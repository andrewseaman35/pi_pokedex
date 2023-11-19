import tkinter as tk
import config

from .type_badges import TypeBadges


class InfoHeader(tk.Frame):
    def __init__(self, master, pokemon):
        super().__init__(master)
        self.master = master
        self.pokemon = pokemon

        self.configure(
            width=config.SCREEN_WIDTH,
            height=config.HEADER_HEIGHT,
            borderwidth=0,
            background=config.BACKGROUND_COLOR,
            highlightbackground=config.BACKGROUND_COLOR,
            highlightthickness=0,
        )
        self.canvas = tk.Canvas(
            master=self,
            highlightthickness=0,
            background=config.BACKGROUND_COLOR,
            width=config.SCREEN_WIDTH,
            height=config.HEADER_HEIGHT,
        )
        self.number_text = self.canvas.create_text(
            0,
            0,
            fill="black",
            font=(config.TYPEFACE, config.INFO_NUMBER_FONT_SIZE), 
            text=self.pokemon.number_string, 
            anchor=tk.NW,
        )

        self.pokemon_text = self.canvas.create_text(
            0,
            config.INFO_NUMBER_FONT_SIZE + 4,
            fill="black",
            font=(f"{config.TYPEFACE} Bold", config.INFO_POKEMON_FONT_SIZE),
            text=pokemon.name,
            anchor=tk.NW,
        )
        self.badges = TypeBadges(self, pokemon.types)
        self.canvas.pack(side=tk.LEFT)
