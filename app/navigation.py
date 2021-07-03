import tkinter as tk

import config
from pokemon import Pokemon


class NavigationItem(tk.Frame):
    def __init__(self, master=None, width=120, text='item', state='default', **kwargs):
        super().__init__(master, **kwargs)
        self.items_per_page = 8
        self.borderwidth = 2
        self.width = width
        self.height = (config.SCREEN_HEIGHT / self.items_per_page) - (2 * self.borderwidth) - self.items_per_page
        self.text = text
        self.state = state
        self.configure(
            width=self.width,
            height=self.height,
            borderwidth=self.borderwidth,
            background=self.get_background_color(),
            highlightbackground=self.get_border_color(),
            highlightthickness=1,
        )
        self.canvas = tk.Canvas(
            master=self,
            highlightthickness=0,
            background=self.get_background_color(),
            width=self.width,
            height=self.height,
        )
        self.text = self.canvas.create_text(40, 0,
            fill="darkblue",
            font="courier 20",
            text=self.text,
            anchor=tk.NW,
        )
        self.canvas.pack()

    @property
    def active(self):
        return self.state == 'active'

    def get_background_color(self):
        return '#888888' if self.active else '#ffffff'

    def get_border_color(self):
        return '#111111' if self.active else '#666666'

    def set_state(self, state):
        self.state = state
        self.rerender()

    def rerender(self):
        self.configure(
            background=self.get_background_color(),
            highlightbackground=self.get_border_color(),
        )
        self.update()
        self.canvas.configure(
            background=self.get_background_color(),
        )
        self.canvas.update()


class NavigationFrame(tk.Frame):
    items = [
        Pokemon(i, f"Poke-{i}") for i in range(20)
    ]
    items_per_page = 4
    def __init__(self, master=None, onItemSelect=None):
        super().__init__(master)
        self.master = master
        self.onItemSelect = onItemSelect

        self.event_map = {
            'w': self.handle_up,
            's': self.handle_down,
            'k': self.handle_select,
        }
        self.current_index = 0;

        self.bind('<KeyPress>', self.onKeyPress)
        self.focus_set()
        self.pack()
        self.create_widgets()

    def onKeyPress(self, e):
        if e.char in self.event_map:
            self.event_map[e.char]()

    def onItemSelect(self, item):
        print(item)

    def handle_up(self):
        self.current_index -= 1;
        self.refresh_item(self.current_index + 1)
        self.refresh_item(self.current_index)

    def handle_down(self):
        self.current_index += 1;
        self.refresh_item(self.current_index - 1)
        self.refresh_item(self.current_index)

    def handle_select(self):
        self.onItemSelect(self.items[self.current_index]);

    def create_widgets(self):
        item_height = config.SCREEN_HEIGHT / self.items_per_page
        self.frames = []
        for i, item in enumerate(self.items):
            state = 'active' if i == self.current_index else 'inactive'
            name = i
            frame = NavigationItem(
                master=self,
                width=config.SCREEN_WIDTH,
                text=item.name,
                state=state,
            )
            frame.pack(side="top")
            self.frames.append(frame)

    def refresh_item(self, index):
        frame = self.frames[index]
        state = 'active' if index == self.current_index else 'inactive'
        frame.set_state(state)
