import tkinter as tk

import config
from pokemon import Pokemon


class EvolutionSectionItem(tk.Frame):
    def __init__(self, master, text, size=11, bold=False, italic=False, justify=tk.LEFT):
        super().__init__(master)

        font_modifiers = []
        if bold:
            font_modifiers.append('Bold')
        if italic:
            font_modifiers.append('Italic')

        typeface = f"{config.TYPEFACE} { ' '.join(font_modifiers)}"
        label_element = tk.Label(
            self, 
            text=text, 
            font=(typeface, size), 
            anchor=tk.W, 
            justify=justify,
            bg=config.EVOLUTION_BACKGROUND,
        )
        label_element.pack(side=tk.LEFT)


class Evolution(EvolutionSectionItem):
    def __init__(self, master, name, active=False):
        super().__init__(master, text=name, bold=active)
    

class EvolutionSection(tk.Frame):
    def __init__(self, master, pokemon):
        super().__init__(master)
        self.master = master
        evoution_numbers = pokemon.evolutions
        evolution_pokemon = [Pokemon.get_by_number(number) for number in evoution_numbers]
        
        self.configure(
            width=config.SCREEN_WIDTH,
            height=config.EVOLUTION_HEIGHT,
            borderwidth=0,
            background=config.EVOLUTION_BACKGROUND,
            highlightbackground=config.EVOLUTION_BACKGROUND,
            highlightthickness=0,
        )

        # Inner frame to capture and center the variable sized elements within the full width frame
        inner = tk.Frame(master=self)
        inner.configure(
            width=config.SCREEN_WIDTH,
            height=config.EVOLUTION_HEIGHT,
            borderwidth=0,
            background=config.EVOLUTION_BACKGROUND,
            highlightbackground=config.EVOLUTION_BACKGROUND,
            highlightthickness=0,
        )
        inner.pack(side=tk.TOP)

        if len(evolution_pokemon) > 1:
            for evolution in evolution_pokemon:
                is_last = evolution.number == evolution_pokemon[-1].number
                active = evolution.number == pokemon.number
                Evolution(inner, evolution.name, active=active).pack(side=tk.LEFT, pady=(4, 0))
                if not is_last:
                    EvolutionSectionItem(inner, ">", size=16, justify=tk.CENTER).pack(side=tk.LEFT, padx=10)
        else:
            EvolutionSectionItem(inner, "No evolutions", italic=True).pack(side=tk.LEFT, pady=(4, 0))
