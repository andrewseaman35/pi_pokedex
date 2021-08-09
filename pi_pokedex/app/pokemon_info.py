import tkinter as tk

import config
from widgets.info_header import InfoHeader
from widgets.stats_section import StatsSection
from widgets.description_section import DescriptionSection
from widgets.evolution_section import EvolutionSection


class PokemonInfoFrame(tk.Frame):
    def __init__(self, master=None, pokemon=None, navigate_back=None):
        super().__init__(master)
        self.master = master
        self.pokemon = pokemon
        self.navigate_back = navigate_back

        self.event_map = {
            'j': self.handle_back,
        }

        self.render()
        self.focus_set()
        self.bind('<KeyPress>', self.onKeyPress)

        print(self.pokemon.__dict__)
        
    def render(self):
        header = InfoHeader(self, self.pokemon)
        stats = StatsSection(self, self.pokemon)
        description = DescriptionSection(self, self.pokemon.red_description)
        evolutions = EvolutionSection(self, self.pokemon)
        
        header.pack(side=tk.TOP, padx=10, pady=(10, 8))
        stats.pack(side=tk.TOP, padx=10)
        description.pack(side=tk.TOP)
        evolutions.pack(side=tk.TOP, expand=True)
        
        # Force the fame to be full width
        evolutions.pack_propagate(0)

    def onKeyPress(self, e):
        if e.char in self.event_map:
            self.event_map[e.char]()

    def handle_back(self):
        self.navigate_back()