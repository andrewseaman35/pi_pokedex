import PIL.Image
import PIL.ImageTk

import tkinter as tk
import time

import config
from pokemon import Pokemon
from navigation import NavigationFrame


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


class Main(tk.Tk):
    def __init__(self, *args, **kwargs):
        tk.Tk.__init__(self, *args, **kwargs)
        self.title('Pokedéx')
        self.geometry(f"{config.SCREEN_WIDTH}x{config.SCREEN_HEIGHT}")

        self.frame_stack = []

        self.grid_rowconfigure(0, weight=1)
        self.grid_columnconfigure(0, weight=1)
        self.display_splash_and_initialize()

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
        self.after(config.SPLASH_TIME, lambda: self.show_frame('navigation'))
        self.frame_stack.append(splash_frame)

        self.initialize()

    def initialize(self):
        self.frame_by_id = {
            'navigation': lambda master: NavigationFrame(master=master, onItemSelect=self.onNavItemSelect),
        }

    def onNavItemSelect(self, item):
        print(item)

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

