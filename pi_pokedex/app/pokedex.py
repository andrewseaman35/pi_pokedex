import PIL.Image
import PIL.ImageTk

import tkinter as tk

import config

from api import IdentifierApi
from led import LEDManager
from pokemon import Pokemon

from frames.camera import CameraFrame, CaptureFrame
from frames.home import HomeFrame
from frames.navigation import NavigationFrame, NavigationEntry
from frames.settings import SettingsFrame
from frames.pokemon_info import PokemonInfoFrame

LEDManager().start('wave', 0.1)


class SplashFrame(tk.Frame):
    image_size = (400, 400)

    def __init__(self, master=None):
        super().__init__(master, bg="white")
        self.master = master
        self.pack()
        self.render_image()

    def render_image(self):
        im = PIL.Image.open("./assets/img/pokemon_logo_3x.png").convert("RGB")
        im.thumbnail(self.image_size)

        photo = PIL.ImageTk.PhotoImage(im)
        label = tk.Label(self, image=photo, borderwidth=0, highlightthickness=0)
        label.image = photo
        label.grid(row=0, column=0)


class Main(tk.Tk):
    def __init__(self, *args, **kwargs):
        tk.Tk.__init__(self, *args, **kwargs)
        self.wm_attributes('-fullscreen', 'True')
        self.attributes("-fullscreen", True)
        self.title("Pokedéx")
        self.geometry(f"{config.SCREEN_WIDTH}x{config.SCREEN_HEIGHT}")
        self.resizable(False, False)

        self.frame_stack = []

        self.grid_rowconfigure(0, weight=1)
        self.grid_columnconfigure(0, weight=1)
        self.display_splash_and_initialize()

    def display_splash_and_initialize(self):
        splash_frame = SplashFrame(master=self)
        splash_frame.grid(column=0, row=0, sticky="nsew")
        splash_frame.grid_rowconfigure(0, weight=1)
        splash_frame.grid_columnconfigure(0, weight=1)
        splash_frame.tkraise()
        self.after(config.SPLASH_TIME, lambda: self.show_frame("menu"))
        self.after(config.SPLASH_TIME, lambda: LEDManager().stop())
        self.frame_stack.append(splash_frame)
        self.initialize()

    def initialize(self):
        self.frame_by_id = {
            "menu": lambda: HomeFrame(
                master=self,
                on_item_select=self.on_menu_select,
            ),
            "pokemon_selector": lambda: NavigationFrame(
                master=self,
                items=[
                    NavigationEntry(
                        pokemon.number, f"{pokemon.number_string}  {pokemon.name}"
                    )
                    for pokemon in Pokemon.all()
                ],
                on_item_select=self.on_pokemon_select,
                on_back=self.on_return_to_menu,
            ),
            "pokemon_info": lambda pokemon: PokemonInfoFrame(
                master=self,
                pokemon=pokemon,
                navigate_back=self.navigate_back,
                show_pokemon_info=self.on_pokemon_select,
            ),
            "camera": lambda: CameraFrame(
                master=self,
                navigate_back=self.navigate_back,
                upload_and_display_captured_image=self.upload_and_display_captured_image,
            ),
            "capture": lambda filepath: CaptureFrame(
                master=self,
                on_back=self.on_return_to_menu,
                filepath=filepath,
            ),
            "settings": lambda: SettingsFrame(
                master=self,
                on_back=self.on_return_to_menu,
            ),
        }

    def on_menu_select(self, frame_id):
        if frame_id:
            self.show_frame(frame_id)

    def on_pokemon_select(self, number):
        pokemon = Pokemon.get_by_number(number)
        self.show_frame("pokemon_info", pokemon=pokemon)

    def show_frame(self, frame_id, **kwargs):
        if self.frame and hasattr(self.frame, "on_pause"):
            print(f"pausing {self.frame}")
            self.frame.on_pause()
        else:
            print(f"aint got no pause, {self.frame}")
        self.frame = self.frame_by_id[frame_id](**kwargs)
        self.render_current_frame()

    def upload_and_display_captured_image(self, filepath):
        self.show_frame("capture", filepath=filepath)
        IdentifierApi().upload(filepath, config.SOURCE, "test4")
        LEDManager().stop()
        LEDManager().start('alternate', 0.3)
        result = IdentifierApi().identify(config.SOURCE, 'test4')
        self.destroy_and_render_last()
        self.on_pokemon_select(result)
        LEDManager().stop()

    def on_return_to_menu(self):
        self.navigate_back()
        self.show_frame("menu")

    def navigate_back(self):
        self.destroy_and_render_last()

    def destroy_and_render_last(self):
        self.frame.destroy()
        self.frame_stack.pop()
        self.frame = self.frame_stack[-1]
        self.frame.tkraise()
        self.frame.focus_set()

    def render_current_frame(self):
        self.frame.grid(column=0, row=0, sticky="nsew")
        self.frame.grid_rowconfigure(0, weight=1)
        self.frame.grid_columnconfigure(0, weight=1)
        self.frame.tkraise()
        self.frame.focus_set()
        self.frame_stack.append(self.frame)


if __name__ == "__main__":
    app = Main()
    app.config(cursor="none")
    app.mainloop()
