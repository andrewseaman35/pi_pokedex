import tempfile

import tkinter as tk

from picamera import PiCamera
import PIL

import config
from event_handler_mixin import (
    EventHandlerMixin,
    EVENT_LEFT,
    EVENT_RIGHT,
    EVENT_SELECT,
    EVENT_BACK,
)

from widgets.info_header import InfoHeader
from widgets.stats_section import StatsSection
from widgets.description_section import DescriptionSection
from widgets.evolution_section import EvolutionSection


class CameraFrame(EventHandlerMixin, tk.Frame):
    def __init__(
        self, master=None, navigate_back=None, display_captured_image=None
    ):
        super().__init__(master)
        self.master = master
        self.navigate_back = navigate_back
        self.display_captured_image = display_captured_image

        self.event_map = {
            EVENT_SELECT: self.handle_select,
            EVENT_BACK: self.handle_back,
        }

        self.configure(
            borderwidth=0,
            background=config.BACKGROUND_COLOR,
            highlightbackground=config.BACKGROUND_COLOR,
            highlightthickness=0,
            bg=config.BACKGROUND_COLOR,
        )

        self.camera = PiCamera()
        self.camera.start_preview()
        self.render()
        self.focus_set()

    def render(self):
        print("rendering camera frame")

    def handle_select(self):
        image_file = tempfile.NamedTemporaryFile(delete=False, suffix=".jpg")
        print(f"saving image to {image_file.name}")
        self.camera.capture(image_file.name)
        self.camera.stop_preview()
        self.camera.close()
        print("** about to navigate back")
        self.navigate_back()
        print("navigated_back")
        from time import sleep
        sleep(1)
        print("displaying captured image")
        self.display_captured_image(image_file.name)

    def handle_back(self):
        self.camera.stop_preview()
        self.camera.close()
        self.navigate_back()


class CaptureFrame(EventHandlerMixin, tk.Frame):
    image_size = (config.SCREEN_WIDTH, config.SCREEN_HEIGHT)

    def __init__(self, master=None, on_back=None, filepath=None):
        super().__init__(master, bg="white")
        self.master = master
        
        
        self.event_map = {
            EVENT_BACK: self.handle_back,
            EVENT_SELECT: self.handle_select,
            
        }
        
        self.on_back = on_back
        self.filepath = filepath
        self.render_image()

    def render_image(self):
        im = PIL.Image.open(self.filepath).convert("RGB")
        im.thumbnail(self.image_size)

        photo = PIL.ImageTk.PhotoImage(im)
        label = tk.Label(self, image=photo, borderwidth=0, highlightthickness=0)
        label.image = photo
        label.grid(row=0, column=0)

    def handle_back(self):
        print("back")
        self.on_back()
        
    def handle_select(self):
        print('select')
