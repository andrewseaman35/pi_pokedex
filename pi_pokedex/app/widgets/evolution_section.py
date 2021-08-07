import tkinter as tk

import config
from pokemon import Pokemon


class Evolution(tk.Frame):
    def __init__(self, master, name, column, row):
        super().__init__(master)

        self.canvas = tk.Canvas(
            master=master,
            highlightthickness=0,
            background=config.BACKGROUND_COLOR,
            width=56,
        )
        
        self.canvas.create_text(16, 0,
            fill="black",
            font="courier 10",
            text=name,
        )

        self.canvas.grid(column=column, row=row, padx=20, pady=10)


class EvoSeparator(tk.Frame):
        def __init__(self, master, column, row):
            super().__init__(master)
            self.canvas = tk.Canvas(
                master=master,
                highlightthickness=0,
                background=config.BACKGROUND_COLOR,
            )
            self.canvas.create_text(0, 0,
                fill="black",
                font="courier 10",
                text=">",
            )
            self.canvas.grid(column=column, row=row)


class EvolutionSection(tk.Frame):
    def __init__(self, master, evoution_numbers):
        super().__init__(master)
        self.master = master
        evolution_pokemon = [Pokemon.get_by_number(number) for number in evoution_numbers]
        
        self.configure(
            width=config.SCREEN_WIDTH,
            height=config.EVOLUTION_HEIGHT,
            borderwidth=0,
            background="blue",
            highlightbackground=config.BACKGROUND_COLOR,
            highlightthickness=0,
        )
        Evolution(self, evolution_pokemon[0].name, 0, 0)
        EvoSeparator(self, 1, 0)
