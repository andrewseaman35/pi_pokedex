"""
Usage: training_set_validation.py <pokemon_name> [commit]

Runs a TKinter application that helps speed up the process of validating a set of downloaded
images for the training set.
"""

import datetime
import os
from pathlib import Path
import sys

from PIL import Image, UnidentifiedImageError
import PIL.ImageTk

import tkinter as tk

SCREEN_WIDTH = 500
SCREEN_HEIGHT = 800

allowed_extensions = {'.png', '.jpeg', '.jpg'}

unvalidated_image_file_path = './approved_images/{}/'
validated_image_file_path = './validated_images/{}/'
rejected_image_file_path = './rejected_images/{}/'


def get_run_kwargs():
    """
    Get args from the command line and validates. Using the args, returns a set of paths, the name of
    the pokemon, and the commit flag.

    Expected args: `pokemon_name` [`commit`]
     - `pokemon_name`: name of the pokemon, corresponds to directory name for `unvalidated_image_file_path`
     - `commit`: present to move files based on decisions, not present to just store in lists
    """
    pokemon = sys.argv[1]
    if not pokemon:
        raise ValueError('`pokemon` arg required')

    commit = False
    if len(sys.argv) > 2:
        commit = sys.argv[2] == 'commit'

    unvalidated_path = unvalidated_image_file_path.format(pokemon)
    if not os.path.exists(unvalidated_image_file_path.format(pokemon)):
        raise ValueError(f'no images for pokemon {pokemon}')

    validated_path = validated_image_file_path.format(pokemon)
    Path(validated_path).mkdir(parents=True, exist_ok=True)

    rejected_path = rejected_image_file_path.format(pokemon)
    Path(rejected_path).mkdir(parents=True, exist_ok=True)

    return {
        'unvalidated_path': unvalidated_path,
        'validated_path': validated_path,
        'rejected_path': rejected_path,
        'pokemon': pokemon,
        'commit': commit,
    }


def get_file_names(unvalidated_path):
    """
    Finds and returns all filenames with allowed extensions under `unvalidated_path`.
    """
    image_file_names = [
        file_name for file_name in os.listdir(unvalidated_path)
        if os.path.splitext(file_name)[1] in allowed_extensions
    ]
    return image_file_names


class ImageFrame(tk.Frame):
    image_size = (500, 500)

    def __init__(self, master=None, image=None):
        super().__init__(master, bg='red')
        self.master = master
        self.image = image
        self.pack()
        self.render_image()
        self.render_instructions()

    def render_image(self):
        self.image.thumbnail(self.image_size)
        photo = PIL.ImageTk.PhotoImage(self.image)
        label = tk.Label(self, image=photo)
        label.image = photo
        label.pack()

    def render_instructions(self):
        canvas = tk.Canvas(
            master=self,
            highlightthickness=0,
            width=500,
            height=200,
        )
        pos = 0
        for text in [
            "Right Arrow: accept",
            "Left Arrow: reject",
            "U: undo",
            "<ESC>: quit",
        ]:
            canvas.create_text(
                20,
                pos,
                fill="black",
                font="courier 24",
                text=text,
                anchor=tk.NW,
            )
            pos += 30
        canvas.pack()


class DonezoFrame(tk.Frame):
    def __init__(self, master=None, stats=None):
        super().__init__(master, bg='white')
        self.stats = stats
        self.canvas = tk.Canvas(
            master=self,
            highlightthickness=0,
            width=500,
            height=500,
        )
        self.title_text = self.canvas.create_text(
            20,
            20,
            fill="black",
            font="courier 48",
            text="DONEZO!",
            anchor=tk.NW,
        )
        pos = self.render_stats()

        self.title_text = self.canvas.create_text(
            20,
            pos,
            fill="black",
            font="courier 48",
            text="Thank you!",
            anchor=tk.NW,
        )
        self.canvas.pack()

    def render_stats(self):
        self.stats['completed'] = sum(self.stats[key] for key in ['errored', 'accepted', 'rejected'])
        pos = 80
        for k in ['completed', 'accepted', 'rejected', 'errored']:
            self.canvas.create_text(
                60,
                pos,
                fill="black",
                font="courier 32",
                text=f"{k.title()}: {self.stats[k]}",
                anchor=tk.NW,
            )
            pos += 50

        self.stats['duration'] = self.stats['end_time'] - self.stats['start_time']
        self.stats['avg time'] = self.stats['duration'] / self.stats['completed']
        for k in ['duration', 'avg time']:
            self.canvas.create_text(
                60,
                pos,
                fill="black",
                font="courier 24",
                text=f"{k.title()}: {self.stats[k]}",
                anchor=tk.NW,
            )
            pos += 50
        return pos


class Main(tk.Tk):
    def __init__(self, *args, **kwargs):
        self.pokemon_name = kwargs.pop('pokemon')
        self.unvalidated_path = kwargs.pop('unvalidated_path')
        self.validated_path = kwargs.pop('validated_path')
        self.rejected_path = kwargs.pop('rejected_path')
        self.commit = kwargs.pop('commit')

        tk.Tk.__init__(self, *args, **kwargs)
        self.title(self.pokemon_name)
        self.geometry(f"{SCREEN_WIDTH}x{SCREEN_HEIGHT}")

        self.accepted = []
        self.rejected = []

        self.last_action = None
        self.last_move = None
        self.file_names = get_file_names(self.unvalidated_path)
        self.current_index = -1
        self.current_image_frame = None
        self.stats = {
            'errored': 0,
            'accepted': 0,
            'rejected': 0,
            'start_time': datetime.datetime.now(),
            'end_time': None
        }

        self.bind('u', self.on_undo)
        self.bind('<Left>', self.on_reject_image)
        self.bind('<Right>', self.on_accept_image)
        self.bind('<Escape>', self.on_escape)
        self.focus_set()

        self.render_next_image()

    @property
    def current_file_name(self):
        return self.file_names[self.current_index]

    @property
    def current_unvalidated_filepath(self):
        return os.path.join(self.unvalidated_path, self.current_file_name)

    @property
    def current_validated_filepath(self):
        return os.path.join(self.validated_path, self.current_file_name)

    @property
    def current_rejected_filepath(self):
        return os.path.join(self.rejected_path, self.current_file_name)

    def reject_current_image(self):
        self.last_action = 'reject'
        self.rejected.append(self.current_file_name)
        if self.commit:
            self.last_move = (self.current_unvalidated_filepath, self.current_rejected_filepath)
            os.rename(self.current_unvalidated_filepath, self.current_rejected_filepath)

    def accept_current_image(self):
        self.last_action = 'accept'
        self.accepted.append(self.current_file_name)
        if self.commit:
            self.last_move = (self.current_unvalidated_filepath, self.current_validated_filepath)
            os.rename(self.current_unvalidated_filepath, self.current_validated_filepath)

    def on_undo(self, _):
        if not self.last_action:
            return

        if self.last_action == 'accepted':
            self.accepted.pop()
            self.stats['accepted'] -= 1
        elif self.last_action == 'rejected':
            self.rejected.pop()
            self.stats['rejected'] -= 1

        if self.commit:
            (last_source, last_dest) = self.last_move
            os.rename(last_dest, last_source)

        # decrement two since rendering next increments one
        self.current_index -= 2
        self.render_next_image()

    def on_escape(self, e):
        if self.current_image_frame:
            self.current_image_frame.destroy()
        self.render_donezo()

    def on_reject_image(self, *args):
        self.stats['rejected'] += 1
        self.reject_current_image()
        self.render_next_image()

    def on_accept_image(self, *args):
        self.stats['accepted'] += 1
        self.accept_current_image()
        self.render_next_image()

    def render_next_image(self):
        self.current_index += 1
        if self.current_image_frame:
            self.current_image_frame.destroy()

        if self.current_index >= len(self.file_names):
            return self.render_donezo()

        try:
            image = PIL.Image.open(self.current_unvalidated_filepath).convert('RGB')
        except UnidentifiedImageError:
            self.stats['errored'] += 1
            return self.on_reject_image()

        self.current_image_frame = ImageFrame(
            self,
            image,
        )

    def render_donezo(self):
        self.stats['end_time'] = datetime.datetime.now()
        self.unbind('<Left>')
        self.unbind('<Right>')
        self.unbind('<Escape>')
        self.donezo_frame = DonezoFrame(
            self,
            self.stats,
        )
        self.donezo_frame.pack()


if __name__ == "__main__":
    run_kwargs = get_run_kwargs()
    app = Main(**run_kwargs)
    app.mainloop()
