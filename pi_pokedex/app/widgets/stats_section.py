import PIL.Image
import PIL.ImageTk

import tkinter as tk

import config


STAT_LABEL_BY_KEY = {
    "special_attack": "Sp. Atk",
    "special_defense": "Sp. Def",
}


STAT_VALUE_TO_DISPLAY = {
    "category": lambda cat: cat.title(),
    "abilities": lambda abls: ", ".join(abls),
}


class PokemonImage(tk.Frame):
    image_size = (100, 100)

    def __init__(self, master, pokemon):
        super().__init__(master, bg="white")
        self.master = master
        self.pokemon = pokemon
        self.render_image()

    @property
    def filepath(self):
        return f"./assets/img/pokemon/{self.pokemon}.png"

    def render_image(self):
        im = PIL.Image.open(self.filepath).convert("RGBA")
        im.thumbnail(self.image_size)
        photo = PIL.ImageTk.PhotoImage(im)
        label = tk.Label(
            self.master,
            image=photo,
            bg=config.EVOLUTION_BACKGROUND,
        )
        label.image = photo
        label.pack(side=tk.LEFT)


class StatsColumn(tk.Frame):
    def __init__(self, master, label_chars, value_chars, value_anchor, data, keys):
        super().__init__(master)
        self.master = master

        self.configure(
            borderwidth=0,
            background=config.BACKGROUND_COLOR,
            highlightbackground=config.BACKGROUND_COLOR,
            highlightthickness=0,
            bg=config.BACKGROUND_COLOR,
        )

        for i, key in enumerate(keys):
            label = STAT_LABEL_BY_KEY.get(key, key.title()).title()
            value_to_display_func = STAT_VALUE_TO_DISPLAY.get(key, lambda x: x)
            value = value_to_display_func(data[key])

            label_element = tk.Label(
                self,
                text=label,
                bg=config.BACKGROUND_COLOR,
                fg=config.BLACK,
                font=(config.TYPEFACE, 7),
                anchor=tk.W,
                justify=tk.LEFT,
                width=label_chars,
            )
            label_element.grid(column=0, row=i)

            value_element = tk.Label(
                self,
                text=value,
                bg=config.BACKGROUND_COLOR,
                fg=config.BLACK,
                font=(f"{config.TYPEFACE} Bold", 7),
                anchor=value_anchor,
                justify=tk.LEFT,
                wraplength=70,
                width=value_chars,
            )
            value_element.grid(column=1, row=i)

        self.pack(side=tk.LEFT, expand=True, padx=(5, 0))


class StatsTable(tk.Frame):
    stat_keys = ["category", "abilities", "height", "weight", "gender"]
    base_stat_keys = [
        "hp",
        "attack",
        "defense",
        "special_attack",
        "special_defense",
        "speed",
    ]

    def __init__(self, master, pokemon):
        super().__init__(master)

        self.configure(
            borderwidth=0,
            background=config.BACKGROUND_COLOR,
            highlightbackground=config.BACKGROUND_COLOR,
            highlightthickness=0,
        )
        self.stats_column = StatsColumn(
            master=self,
            label_chars=config.STATS_LABEL_CHARS,
            value_chars=config.STATS_VALUE_CHARS,
            value_anchor=tk.W,
            data=pokemon.stats,
            keys=self.stat_keys,
        )
        self.base_stats_column = StatsColumn(
            master=self,
            label_chars=config.BASE_STATS_LABEL_CHARS,
            value_chars=config.BASE_STATS_VALUE_CHARS,
            value_anchor=tk.E,
            data=pokemon.base_stats,
            keys=self.base_stat_keys,
        )


class StatsSection(tk.Frame):
    def __init__(self, master, pokemon):
        super().__init__(master)
        self.master = master
        self.pokemon = pokemon

        self.configure(
            width=config.SCREEN_WIDTH,
            height=config.STATS_HEIGHT,
            borderwidth=0,
            background=config.BACKGROUND_COLOR,
            highlightbackground=config.BACKGROUND_COLOR,
            highlightthickness=0,
        )

        self.image = PokemonImage(self, self.pokemon.number)
        self.stats_table = StatsTable(self, self.pokemon)
        self.stats_table.pack(side=tk.TOP)
