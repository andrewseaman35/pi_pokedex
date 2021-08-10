import tkinter as tk

import config
from widgets.info_header import InfoHeader
from widgets.stats_section import StatsSection
from widgets.description_section import DescriptionSection
from widgets.evolution_section import EvolutionSection


class PokemonInfoFrame(tk.Frame):
    def __init__(self, master=None, pokemon=None, navigate_back=None, show_pokemon_info=None):
        super().__init__(master)
        self.master = master
        self.pokemon = pokemon
        self.navigate_back = navigate_back
        self.show_pokemon_info = show_pokemon_info

        self.event_map = {
            'a': self.handle_left,
            'd': self.handle_right,
            'k': self.handle_select,
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
        self.evolution_section = EvolutionSection(self, self.pokemon)

        header.pack(side=tk.TOP, padx=10, pady=(10, 8))
        stats.pack(side=tk.TOP, padx=10)
        description.pack(side=tk.TOP)
        self.evolution_section.pack(side=tk.TOP, expand=True)
        
        # Force the fame to be full width
        self.evolution_section.pack_propagate(0)

    def onKeyPress(self, e):
        if e.char in self.event_map:
            self.event_map[e.char]()

    def handle_left(self):
        self.evolution_section.handle_left()

    def handle_right(self):
        self.evolution_section.handle_right()

    def handle_select(self):
        highlighted_pokemon = self.evolution_section.get_highlighted_pokemon()
        if highlighted_pokemon is None or highlighted_pokemon.number == self.pokemon.number:
            return

        self.navigate_back()
        self.show_pokemon_info(highlighted_pokemon.number)

    def handle_back(self):
        self.navigate_back()