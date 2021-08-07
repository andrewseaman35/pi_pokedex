import PIL.Image
import PIL.ImageTk

import tkinter as tk

import config


STAT_LABEL_BY_KEY = {
    'special_attack': 'Sp. Attack', 
    'special_defense': 'Sp. Defense',
}


class PokemonImage(tk.Frame):
    image_size = (100, 100)

    def __init__(self, master, pokemon):
        super().__init__(master, bg='white')
        self.master = master
        self.pokemon = pokemon
        self.render_image()

    @property
    def filepath(self):
        return f"./assets/img/pokemon/{self.pokemon}.png"

    def render_image(self):
        im = PIL.Image.open(self.filepath).convert('RGB')
        im.thumbnail(self.image_size)
        photo = PIL.ImageTk.PhotoImage(im)
        label = tk.Label(self.master, image=photo)
        label.image = photo
        label.pack(side="left")


class StatsColumn(tk.Frame):
    def __init__(self, master, width, data, keys):
        super().__init__(master)
        self.master = master

        self.configure(
            width=width,
            height=config.STATS_TABLE_HEIGHT,
            borderwidth=0,
            background=config.BACKGROUND_COLOR,
            highlightbackground=config.BACKGROUND_COLOR,
            highlightthickness=0,
        )

        for i, key in enumerate(keys):
            label = STAT_LABEL_BY_KEY.get(key, key.title()).title()
            value = data[key]

            label_element = tk.Label(
                self, 
                text=label, 
                font="courier 10", 
                anchor="w", 
                justify="left",
            )
            label_element.grid(column=0, row=i)

            value_element = tk.Label(
                self, 
                text=value, 
                font="courier 10 bold", 
                anchor="e", 
                justify="right",
            )
            value_element.grid(column=1, row=i)

        self.pack(side="left")


class StatsTable(tk.Frame):
    stat_keys = ['category', 'abilities', 'height', 'weight', 'gender']
    base_stat_keys = ['hp', 'attack', 'defense', 'special_attack', 'special_defense', 'speed']

    def __init__(self, master, pokemon):
        super().__init__(master)
        self.stats_column = StatsColumn(self, config.STATS_TABLE_WIDTH, pokemon.stats, self.stat_keys)
        self.base_stats_column = StatsColumn(self, config.BASE_STATS_TABLE_WIDTH, pokemon.base_stats, self.base_stat_keys)


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
        self.stats_table.pack(side="top")
