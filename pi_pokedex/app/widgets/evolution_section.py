import tkinter as tk
from tkinter import font as tk_font

import config
from pokemon import Pokemon


class EvolutionSectionItem(tk.Frame):
    def __init__(
        self,
        master,
        text,
        size=config.EVO_FONT_SIZE,
        bold=False,
        italic=False,
        underline=False,
        justify=tk.LEFT,
    ):
        super().__init__(master)

        font_modifiers = []
        if bold:
            font_modifiers.append("Bold")
        if italic:
            font_modifiers.append("Italic")

        self.configure(
            borderwidth=0,
            background=config.EVOLUTION_BACKGROUND,
            highlightbackground=config.EVOLUTION_BACKGROUND,
            highlightthickness=0,
            bg=config.EVOLUTION_BACKGROUND,
        )

        typeface = f"{config.TYPEFACE} { ' '.join(font_modifiers)}"
        self.label = tk.Label(
            self,
            text=text,
            font=(typeface, size),
            anchor=tk.W,
            justify=justify,
            bg=config.EVOLUTION_BACKGROUND,
            fg=config.BLACK,
        )

        if underline:
            font = tk_font.Font(self.label, self.label.cget("font"))
            font.configure(underline=True)
            self.label.configure(font=font)

        self.label.pack(
            side=tk.LEFT,
            # padx=10,
            pady=(0, 16),
        )

    def set_font_modifiers(self, underline=False):
        font = tk_font.Font(self.label, self.label.cget("font"))
        font.configure(underline=underline)
        self.label.configure(font=font)

    def rerender(self):
        self.label.update()


class Evolution(EvolutionSectionItem):
    def __init__(self, master, name, active=False):
        super().__init__(master, text=name, bold=active)
        self.highlighted = False

    def set_highlighted(self, highlighted):
        self.highlighted = highlighted
        self.set_font_modifiers(underline=self.highlighted)
        self.rerender()


class EvolutionSection(tk.Frame):
    def __init__(self, master, pokemon):
        super().__init__(master)
        self.master = master
        self.pokemon = pokemon
        evolution_numbers = pokemon.evolutions
        self.evolution_pokemon = [
            Pokemon.get_by_number(number) for number in evolution_numbers
        ]
        self.current_pokemon_index = evolution_numbers.index(self.pokemon.number)

        self.highlighted_index = None
        self.item_frames = []  # Set in render_evolutions
        self.render_evolutions()

    @property
    def has_evolutions(self):
        return len(self.evolution_pokemon) > 1

    def render_evolutions(self):
        self.configure(
            width=config.SCREEN_WIDTH,
            height=config.EVOLUTION_HEIGHT,
            borderwidth=0,
            bg=config.EVOLUTION_BACKGROUND,
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
            bg=config.EVOLUTION_BACKGROUND,
            background=config.EVOLUTION_BACKGROUND,
            highlightbackground=config.EVOLUTION_BACKGROUND,
            highlightthickness=0,
        )
        inner.pack(side=tk.TOP)

        if self.has_evolutions:
            for evolution in self.evolution_pokemon:
                is_last = evolution.number == self.evolution_pokemon[-1].number
                active = evolution.number == self.pokemon.number
                evolution_item = Evolution(inner, evolution.name, active=active)
                evolution_item.pack(side=tk.LEFT, pady=config.EVO_ITEM_PAD_Y)
                self.item_frames.append(evolution_item)

                if active:
                    self.highlighted_index = len(self.item_frames) - 1

                if not is_last:
                    EvolutionSectionItem(inner, ">", size=config.EVO_FONT_SIZE, justify=tk.CENTER).pack(
                        side=tk.LEFT, padx=10, pady=config.EVO_ITEM_PAD_Y
                    )
        else:
            EvolutionSectionItem(inner, "No evolutions", italic=True).pack(
                side=tk.LEFT, pady=config.EVO_ITEM_PAD_Y
            )

    def rerender(self):
        for i, item_frame in enumerate(self.item_frames):
            item_frame.set_highlighted(i == self.highlighted_index)

    def _handle_highlight_change(self, get_next_index):
        if not self.has_evolutions:
            return
        if self.highlighted_index is None:
            self.highlighted_index = self.current_pokemon_index
        else:
            self.highlighted_index = get_next_index()
        self.rerender()

    def handle_right(self):
        def _get_incremented_index():
            return min(self.highlighted_index + 1, len(self.evolution_pokemon) - 1)

        self._handle_highlight_change(_get_incremented_index)

    def handle_left(self):
        def _get_decremented_index():
            return max(self.highlighted_index - 1, 0)

        self._handle_highlight_change(_get_decremented_index)

    def get_highlighted_pokemon(self):
        if not self.has_evolutions or self.highlighted_index is None:
            return None
        return self.evolution_pokemon[self.highlighted_index]
