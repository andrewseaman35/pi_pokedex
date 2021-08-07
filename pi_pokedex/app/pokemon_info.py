import tkinter as tk

import config
from widgets.info_header import InfoHeader
from widgets.stats_section import StatsSection
from widgets.description_section import DescriptionSection
from widgets.evolution_section import EvolutionSection


class PokemonInfoFrame(tk.Frame):
    def __init__(self, master=None, pokemon=None):
        super().__init__(master)
        self.master = master
        self.pokemon = pokemon
        self.focus_set()
        header = InfoHeader(self, self.pokemon)
        stats = StatsSection(self, self.pokemon)
        description = DescriptionSection(self, self.pokemon.red_description)
        # evolutions = EvolutionSection(self, self.pokemon.evolutions)
        header.pack(side="top")
        stats.pack(side="top")
        description.pack(side="top")
        # evolutions.pack(side="top")
        print(self.pokemon.__dict__)
