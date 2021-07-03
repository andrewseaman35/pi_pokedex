from collections import namedtuple

import PIL.Image
import PIL.ImageTk

import tkinter as tk
from tkinter import ttk
import time


Pokemon = namedtuple("Pokemon", "number name")


SCREEN_WIDTH = 320
SCREEN_HEIGHT = 240

SPLASH_TIME = 1000


class SplashFrame(tk.Frame):
    image_size = (200, 200)

    def __init__(self, master=None):
        super().__init__(master, bg='white')
        self.master = master
        self.pack()
        self.render_image()

    def render_image(self):
        im = PIL.Image.open("./assets/img/pokemon_logo_3x.png").convert('RGB')
        im.thumbnail(self.image_size)

        photo = PIL.ImageTk.PhotoImage(im)
        label = tk.Label(self, image=photo)
        label.image = photo
        label.grid(row=0, column=0)


class NavigationItem(tk.Frame):
    def __init__(self, master=None, width=120, text='item', state='default', **kwargs):
        super().__init__(master, **kwargs)
        self.items_per_page = 8
        self.borderwidth = 2
        self.width = width
        self.height = (SCREEN_HEIGHT / self.items_per_page) - (2 * self.borderwidth) - self.items_per_page
        self.text = text
        self.state = state
        self.configure(
            width=self.width,
            height=self.height,
            borderwidth=self.borderwidth,
            background=self.get_background_color(),
            highlightbackground=self.get_border_color(),
            highlightthickness=1,
        )
        self.canvas = tk.Canvas(
            master=self,
            highlightthickness=0,
            background=self.get_background_color(),
            width=self.width,
            height=self.height,
        )
        self.text = self.canvas.create_text(40, 0,
            fill="darkblue",
            font="courier 20",
            text=self.text,
            anchor=tk.NW,
        )
        self.canvas.pack()

    @property
    def active(self):
        return self.state == 'active'

    def get_background_color(self):
        return '#888888' if self.active else '#ffffff'

    def get_border_color(self):
        return '#111111' if self.active else '#666666'

    def set_state(self, state):
        self.state = state
        self.rerender()

    def rerender(self):
        self.configure(
            background=self.get_background_color(),
            highlightbackground=self.get_border_color(),
        )
        self.update()
        self.canvas.configure(
            background=self.get_background_color(),
        )
        self.canvas.update()


class NavigationFrame(tk.Frame):
    items = [
        Pokemon(i, f"Poke-{i}") for i in range(20)
    ]
    items_per_page = 4
    def __init__(self, master=None):
        super().__init__(master)
        self.master = master

        self.event_map = {
            'w': self.handle_up,
            's': self.handle_down,
            'k': self.handle_submit,
        }
        self.current_index = 0;

        self.bind('<KeyPress>', self.onKeyPress)
        self.focus_set()
        self.pack()
        self.create_widgets()


    def onKeyPress(self, e):
        if e.char in self.event_map:
            self.event_map[e.char]()

    def handle_up(self):
        self.current_index -= 1;
        self.refresh_item(self.current_index + 1)
        self.refresh_item(self.current_index)

    def handle_down(self):
        self.current_index += 1;
        self.refresh_item(self.current_index - 1)
        self.refresh_item(self.current_index)

    def handle_submit(self):
        print(f"submitting {self.items[self.current_index]['name']}")

    def create_widgets(self):
        item_height = SCREEN_HEIGHT / self.items_per_page
        self.frames = []
        for i, item in enumerate(self.items):
            state = 'active' if i == self.current_index else 'inactive'
            name = i
            frame = NavigationItem(master=self, width=SCREEN_WIDTH, text=item.name, state=state)
            frame.pack(side="top")
            self.frames.append(frame)

    def refresh_item(self, index):
        frame = self.frames[index]
        state = 'active' if index == self.current_index else 'inactive'
        frame.set_state(state)


class Main(tk.Tk):
    def __init__(self, *args, **kwargs):
        tk.Tk.__init__(self, *args, **kwargs)
        self.title('Pokedéx')
        self.geometry(f"{SCREEN_WIDTH}x{SCREEN_HEIGHT}")

        self.frame_stack = []

        self.grid_rowconfigure(0, weight=1)
        self.grid_columnconfigure(0, weight=1)
        self.display_splash_and_initialize()
        # self.configure()

    def configure(self):
        self.resizable(False, False)
        self.bind('<KeyPress>', self.onKeyPress)

    def onKeyPress(self, e):
        print(e)
        print(e.char)
        if e.char in self.event_map:
            self.event_map[e.char]()

    def display_splash_and_initialize(self):
        splash_frame = SplashFrame(master=self)
        splash_frame.grid(column=0, row=0, sticky = "nsew")
        splash_frame.grid_rowconfigure(0, weight = 1)
        splash_frame.grid_columnconfigure(0, weight = 1)
        splash_frame.tkraise()
        self.after(SPLASH_TIME, lambda: self.show_frame('navigation'))
        self.frame_stack.append(splash_frame)

        self.initialize()

    def initialize(self):
        self.frame_by_id = {
            'navigation': NavigationFrame,
        }

    def show_frame(self, frame_id):
        print(f"show_frame {frame_id}")
        frame = self.frame_by_id[frame_id](master=self)
        frame.grid(column=0, row=0, sticky = "nsew")
        frame.grid_rowconfigure(0, weight = 1)
        frame.grid_columnconfigure(0, weight = 1)
        frame.tkraise()
        self.frame_stack.append(frame)


if __name__ == "__main__":
    app = Main()
    app.mainloop()

