import PIL.Image
import PIL.ImageTk

import tkinter as tk

import config
from pokemon import Pokemon

from navigation import NavigationFrame
from pokemon_info import PokemonInfoFrame


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
        splash_frame.grid(column=0, row=0, sticky="nsew")
        splash_frame.grid_rowconfigure(0, weight = 1)
        splash_frame.grid_columnconfigure(0, weight = 1)
        splash_frame.tkraise()
        self.after(config.SPLASH_TIME, self.show_navigation)
        self.frame_stack.append(splash_frame)
        self.initialize()

    def initialize(self):
        self.frame_by_id = {
            'navigation': lambda master: NavigationFrame(master=master, on_item_select=self.on_nav_item_select),
            'pokemon_info': lambda master, pokemon: PokemonInfoFrame(master=master, pokemon=pokemon),
        }

    def on_nav_item_select(self, item):
        self.show_pokemon_info(item)

    def show_navigation(self):
        self.frame = self.frame_by_id['navigation'](master=self)
        self.show_current_frame()

    def show_pokemon_info(self, pokemon):
        self.frame = self.frame_by_id['pokemon_info'](master=self, pokemon=pokemon)
        self.show_current_frame()

    def show_current_frame(self):
        self.frame.grid(column=0, row=0, sticky="nsew")
        self.frame.grid_rowconfigure(0, weight=1)
        self.frame.grid_columnconfigure(0, weight=1)
        self.frame.tkraise()
        self.frame_stack.append(self.frame)


if __name__ == "__main__":
    app = Main()
    app.mainloop()

