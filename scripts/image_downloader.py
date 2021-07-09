"""
Bulk download images or just store URLs of any number of Google image search results based on
a list of searches.

Requires a file with the desired search terms, one per line.

Usage: image_downloader.py [-h] [--profile PROFILE] [--local] --input-file INPUT_FILE [--limit LIMIT] [--out-dir OUTPUT_DIRECTORY]
                           [--first-search FIRST_SEARCH] [--num-searches NUM_SEARCHES] [--store-urls] [--download-images]

Optional arguments:
  -h, --help            show this help message and exit
  --profile PROFILE     AWS profile to use
  --local               add if running locally
  --input-file INPUT_FILE
                        path to file with search inputs
  --limit LIMIT         number of images to try to pull
  --out-dir OUTPUT_DIRECTORY
                        top-level directory to store images
  --first-search FIRST_SEARCH
                        search item to start with
  --num-searches NUM_SEARCHES
                        number of searches items to process
  --store-urls          include to save urls to file
  --download-images     include to download images
"""

from logging import Logger
import json
import os
import uuid
import re
import sys
import time
from six.moves.urllib.parse import urlparse

from bs4 import BeautifulSoup

from icrawler.builtin import GoogleImageCrawler
from icrawler import ImageDownloader, Parser

from base import BaseScript


DEFAULT_OUTPUT_DIRECTORY = "output"
DEFAULT_LIMIT = 100


class TrainingSetDownloader(BaseScript):
    def _setup_parser(self):
        super(TrainingSetDownloader, self)._setup_parser()
        self.parser.add_argument("--input-file", dest="input_file", help="path to file with search inputs", required=True)
        self.parser.add_argument("--limit", dest="limit", default=DEFAULT_LIMIT, help="number of images to try to pull")
        self.parser.add_argument("--out-dir", dest="output_directory", default=DEFAULT_OUTPUT_DIRECTORY, help="top-level directory to store images")
        self.parser.add_argument("--first-search", dest="first_search", help="search item to start with")
        self.parser.add_argument("--num-searches", dest="num_searches", help="number of searches items to process")
        self.parser.add_argument("--store-urls", dest="store_urls", help="save urls to file", action="store_true")
        self.parser.add_argument("--download-images", dest="download_images", help="download images", action="store_true")

    def _validate_args(self):
        super(TrainingSetDownloader, self)._validate_args()
        self.limit = int(self.args.limit)
        self.first_search = self.args.first_search
        self.num_searches = int(self.args.num_searches) if self.args.num_searches else None
        self.store_urls = self.args.store_urls
        self.download_images = self.args.download_images
        if not self.store_urls and not self.download_images:
            raise ValueError('either or both of --store-urls and --download-images must be present')

        self.input_file = self.args.input_file
        if not os.path.exists(self.input_file):
            raise ValueError(f'input file not found')

        self.output_directory = self.args.output_directory
        os.makedirs(self.output_directory, exist_ok=True)
        if self.store_urls:
            self.urls_subdirectory = os.path.join(self.output_directory, "urls")
            os.makedirs(self.urls_subdirectory, exist_ok=True)
        if self.download_images:
            self.images_subdirectory = os.path.join(self.output_directory, "images")
            os.makedirs(self.images_subdirectory, exist_ok=True)

    def _init_aws(self):
        super(TrainingSetDownloader, self)._init_aws()
        self.s3_client = self.aws_session.client('s3', region_name='us-east-1')

    def get_search_inputs(self):
        """
        Load the searches defined in the input file, filter based on first_search and num_searches
        and return a mapping of <search_name>: [search, terms].
        """
        with open(self.input_file, 'r') as f:
            search_data = json.loads(f.read())

        searches = search_data['searches']
        search_names = [search['name'] for search in searches]
        start_index = search_names.index(self.first_search) if self.first_search else 0
        num_searches = len(searches) if self.num_searches is None else self.num_searches
        end_index = start_index + num_searches

        return {
            search['name']: search['terms'] for search in searches[start_index:end_index]
        }

    def process_search(self, search_name, search_terms):
        print(f'=== Processing {search_name} ===')

        images_directory = None
        if self.download_images:
            images_directory = os.path.join(self.images_subdirectory, search_name)
            os.makedirs(images_directory, exist_ok=True)
        urls_file = None
        logger = None
        if self.store_urls:
            urls_file = os.path.join(self.urls_subdirectory, f"{search_name}.txt")
            logger = UrlLogger(__name__, urls_file)

        limit_per_search = int(self.limit / len(search_terms))
        for term in search_terms:
            print(f"   Searching for: {term}")
            google_crawler = GoogleImageCrawler(
                storage={'root_dir': images_directory},
                feeder_threads=3,
                parser_threads=3,
                downloader_threads=1,
                parser_cls=CustomGoogleParser,
                downloader_cls=CustomGoogleImageDownloader,
                extra_downloader_args={
                    'download_images': self.download_images,
                    # 'logger': logger,
                },
                extra_parser_args={
                    'url_logger': logger,
                    'download_images': self.download_images,
                },
                log_level=20)
            google_crawler.crawl(keyword=term, max_num=limit_per_search)

        print(f"=== Done with {search_name} ====")

    def _run(self):
        search_inputs = self.get_search_inputs()

        for search_name, search_terms in search_inputs.items():
            self.process_search(search_name, search_terms)

        print('totally donezo!')


class UrlLogger(Logger):
    """
    Logger that is meant to work with the CustomGoogleImageDownloader.

    When the downloader logs the format "image|<stuff>" it'll write "<stuff>"
    to `self.url_file`. <stuff> is meant to be the url that's being downloaded.
    """
    # corresponds to the format of logging the url
    search_pattern = re.compile(r'^image\|(.*)$')

    def __init__(self, name, url_file):
        super().__init__(name)
        self.url_file = url_file

    def log_url(self, url):
        with open(self.url_file, 'a') as f:
            f.write(f"{url}\n")

    def info(self, msg, *args, **kwargs):
        if self.url_file:
            log_match = self.search_pattern.match(msg)
            url = log_match.group(1) if log_match else None
            if url:
                self.log_url(url)

        super(UrlLogger, self).info(msg, *args, **kwargs)


class CustomGoogleParser(Parser):
    """
    A copy of `icrawler.builtin.GoogleParser` with a parsing step
    added that fixes a parsing issue.
    """
    def __init__(self, thread_num, signal, session, download_images=False, url_logger=None):
        super().__init__(thread_num, signal, session)
        self.url_logger = url_logger
        self.download_images = download_images

    def parse(self, response):
        soup = BeautifulSoup(
            response.content.decode('utf-8', 'ignore'), 'lxml')
        #image_divs = soup.find_all('script')
        image_divs = soup.find_all(name='script')
        for div in image_divs:
            #txt = div.text
            txt = str(div)
            #if not txt.startswith('AF_initDataCallback'):
            if 'AF_initDataCallback' not in txt:
                continue
            if 'ds:0' in txt or 'ds:1' not in txt:
                continue
            #txt = re.sub(r"^AF_initDataCallback\({.*key: 'ds:(\d)'.+data:function\(\){return (.+)}}\);?$",
            #             "\\2", txt, 0, re.DOTALL)
            #meta = json.loads(txt)
            #data = meta[31][0][12][2]
            #uris = [img[1][3][0] for img in data if img[0] == 1]

            uris = re.findall(r'http.*?\.(?:jpg|png|bmp)', txt)

            # I suspect that the response from the request changed a bit and this hasn't
            # been updated to match. This seems to work fine.
            parsed_uris = [uri.split(',')[-1].strip('[').strip('"') for uri in uris]
            print(f"adding {len(parsed_uris)} urls")
            return [{'file_url': uri} for uri in parsed_uris]

    def output(self, task, block=True, timeout=None):
        if self.download_images and self.out_queue is not None:
            self.out_queue.put(task, block, timeout)
        if self.url_logger:
            self.url_logger.log_url(task['file_url'])


class CustomGoogleImageDownloader(ImageDownloader):
    """
    Pretty close to icrawler.builtin.GoogleImageDownloader. Added a flag to skip the downloading
    of images and a way to override the logger.
    """
    count = 0
    def __init__(self, thread_num, signal, session, storage, download_images=False, logger=None):
        super().__init__(thread_num, signal, session, storage)
        self.download_images = download_images
        if logger:
            self.logger = logger

    def keep_file(self, *args, **kwargs):
        return True

    def get_filename(self, task, default_ext=''):
        url_path = urlparse(task['file_url'])[2]
        if '.' in url_path:
            extension = url_path.split('.')[-1]
            if extension.lower() not in [
                    'jpg', 'jpeg', 'png', 'bmp', 'tiff', 'gif', 'ppm', 'pgm'
            ]:
                extension = default_ext
        else:
            extension = default_ext
        name = str(uuid.uuid4()).replace('-','')
        return '{}.{}'.format(name, extension)

    def process_meta(self, task):
        print('processing meta')

    def download(self,
                 task,
                 default_ext,
                 timeout=5,
                 max_retry=3,
                 overwrite=False,
                 **kwargs):
        """Download the image and save it to the corresponding path.
        Args:
            task (dict): The task dict got from ``task_queue``.
            timeout (int): Timeout of making requests for downloading images.
            max_retry (int): the max retry times if the request fails.
            **kwargs: reserved arguments for overriding.
        """
        file_url = task['file_url']
        task['success'] = False
        task['filename'] = None
        retry = max_retry

        self.count += 1
        print(self.count)
        while retry > 0 and not self.signal.get('reach_max_num'):
            try:
                if self.download_images:
                    response = self.session.get(file_url, timeout=timeout)
            except Exception as e:
                self.logger.error('Exception caught when downloading file %s, '
                                  'error: %s, remaining retry times: %d',
                                  file_url, e, retry - 1)
            else:
                if self.reach_max_num():
                    self.signal.set(reach_max_num=True)
                    print('max reached')
                    break
                elif self.download_images and response.status_code != 200:
                    self.logger.error('Response status code %d, file %s',
                                      response.status_code, file_url)
                    break
                elif not self.download_images:
                    self.logger.info(f"image|{file_url}")
                    self.fetched_num += 1
                    break
                with self.lock:
                    self.fetched_num += 1
                    filename = self.get_filename(task, default_ext)
                self.logger.info(f"image|{file_url}")
                self.storage.write(filename, response.content)
                task['success'] = True
                task['filename'] = filename
                break
            finally:
                retry -= 1


if __name__ == '__main__':
    TrainingSetDownloader().run()

