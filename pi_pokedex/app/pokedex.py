import PIL.Image
import PIL.ImageTk

import tkinter as tk

import config
from pokemon import Pokemon

from frames.home import HomeFrame

from navigation import NavigationFrame, NavigationEntry
from settings import SettingsFrame
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
        label = tk.Label(self, image=photo, borderwidth=0, highlightthickness=0)
        label.image = photo
        label.grid(row=0, column=0)


class Main(tk.Tk):
    def __init__(self, *args, **kwargs):
        tk.Tk.__init__(self, *args, **kwargs)
        self.title('Pokedéx')
        self.geometry(f"{config.SCREEN_WIDTH}x{config.SCREEN_HEIGHT}")
        self.resizable(False, False)

        self.frame_stack = []

        self.grid_rowconfigure(0, weight=1)
        self.grid_columnconfigure(0, weight=1)
        self.display_splash_and_initialize()

    def display_splash_and_initialize(self):
        splash_frame = SplashFrame(master=self)
        splash_frame.grid(column=0, row=0, sticky="nsew")
        splash_frame.grid_rowconfigure(0, weight = 1)
        splash_frame.grid_columnconfigure(0, weight = 1)
        splash_frame.tkraise()
        self.after(config.SPLASH_TIME, lambda: self.show_frame('menu'))
        self.frame_stack.append(splash_frame)
        self.initialize()

    def initialize(self):
        self.frame_by_id = {
            'menu': lambda: HomeFrame(
                master=self,
                on_item_select=self.on_menu_select,
            ),
            'pokemon_selector': lambda: NavigationFrame(
                master=self,
                items=[NavigationEntry(pokemon.number, f"{pokemon.number_string} {pokemon.name}")
                       for pokemon in Pokemon.all()],
                on_item_select=self.on_pokemon_select,
                on_back=self.on_return_to_menu,
            ),
            'pokemon_info': lambda pokemon: PokemonInfoFrame(
                master=self,
                pokemon=pokemon,
                navigate_back=self.navigate_back,
                show_pokemon_info=self.on_pokemon_select,
            ),
            'settings': lambda: SettingsFrame(
                master=self,
                on_back=self.on_return_to_menu,
            ),
        }

    def on_menu_select(self, frame_id):
        if frame_id:
            self.show_frame(frame_id)

    def on_pokemon_select(self, number):
        pokemon = Pokemon.get_by_number(number)
        self.show_frame('pokemon_info', pokemon=pokemon)

    def show_frame(self, frame_id, **kwargs):
        if self.frame and hasattr(self.frame, 'on_pause'):
            self.frame.on_pause()
        self.frame = self.frame_by_id[frame_id](**kwargs)
        self.render_current_frame()

    def on_return_to_menu(self):
        self.navigate_back()
        self.show_frame('menu')

    def navigate_back(self):
        self.destroy_and_render_last()

    def destroy_and_render_last(self):
        self.frame.destroy()
        self.frame_stack.pop()
        self.frame = self.frame_stack[-1]
        self.frame.tkraise()
        self.frame.focus_set()
        self.frame.on_resume()

    def render_current_frame(self):
        self.frame.grid(column=0, row=0, sticky="nsew")
        self.frame.grid_rowconfigure(0, weight=1)
        self.frame.grid_columnconfigure(0, weight=1)
        self.frame.tkraise()
        self.frame_stack.append(self.frame)


if __name__ == "__main__":
    app = Main()
    app.mainloop()