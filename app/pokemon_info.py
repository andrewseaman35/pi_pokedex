import tkinter as tk

import config


class PokemonInfoFrame(tk.Frame):
    def __init__(self, master=None, pokemon=None):
        super().__init__(master)
        self.master = master
        self.pokemon = pokemon
        self.focus_set()
        print(self.pokemon)
