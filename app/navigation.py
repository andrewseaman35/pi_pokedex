import math

import tkinter as tk

import config
from pokemon import Pokemon

ITEMS_PER_PAGE = 10


class NavigationItem(tk.Frame):
    def __init__(self, master=None, width=120, text='item', state='default', **kwargs):
        super().__init__(master, **kwargs)
        highlight_thickness = 1
        self.width = width
        self.height = (config.SCREEN_HEIGHT / ITEMS_PER_PAGE) - (2 * highlight_thickness)
        self.text = text
        self.state = state
        self.configure(
            width=self.width,
            height=self.height,
            borderwidth=0,
            background=self.get_background_color(),
            highlightbackground=self.get_border_color(),
            highlightthickness=highlight_thickness,
        )
        self.canvas = tk.Canvas(
            master=self,
            highlightthickness=0,
            background=self.get_background_color(),
            width=self.width,
            height=self.height,
        )
        self.text = self.canvas.create_text(20, 0,
            fill="black",
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
    def __init__(self, master=None, on_item_select=None):
        super().__init__(master)
        self.master = master
        self.on_item_select = on_item_select

        self.event_map = {
            'w': self.handle_up,
            'a': self.handle_left,
            's': self.handle_down,
            'd': self.handle_right,
            'k': self.handle_select,
        }
        self.items = Pokemon.all()
        self.frames = []
        self.current_index = 0
        self.current_page = 0

        self.bind('<KeyPress>', self.onKeyPress)
        self.focus_set()
        self.pack()

        self.render_page()

    @property
    def num_pages(self):
        return int(math.ceil(len(self.items) / float(ITEMS_PER_PAGE)))

    def get_items_page(self, page_index):
        start_index = page_index * ITEMS_PER_PAGE
        end_index = start_index + ITEMS_PER_PAGE
        return self.items[start_index: end_index]

    def onKeyPress(self, e):
        if e.char in self.event_map:
            self.event_map[e.char]()

    def on_item_select(self, item):
        print(item)

    def handle_up(self):
        previous_index = self.current_index
        render_new_page = False
        if self.current_index > 0:
            self.current_index -= 1
        elif self.current_page > 0:
            self.current_index = ITEMS_PER_PAGE - 1
            self.current_page -= 1
            render_new_page = True

        self.refresh_item(previous_index)
        self.refresh_item(self.current_index)
        if render_new_page:
            self.render_page()

    def handle_down(self):
        previous_index = self.current_index
        render_new_page = False
        if self.current_index < ITEMS_PER_PAGE - 1:
            self.current_index += 1;
        elif self.current_page < (self.num_pages - 1):
            self.current_index = 0
            self.current_page += 1
            render_new_page = True
        self.refresh_item(previous_index)
        self.refresh_item(self.current_index)
        if render_new_page:
            self.render_page()

    def handle_left(self):
        if self.current_page > 0:
            self.current_index = 0
            self.current_page -= 1
            self.render_page()

    def handle_right(self):
        print(f"self.num_pages: {self.num_pages}")
        if self.current_page < self.num_pages - 1:
            self.current_index = 0
            self.current_page += 1
            self.render_page()

    def handle_select(self):
        self.on_item_select(self.items[self.current_index]);

    def render_page(self):
        for frame in self.frames:
            frame.destroy()
        self.frames = []

        page_items = self.get_items_page(self.current_page)
        for i, item in enumerate(page_items):
            state = 'active' if i == self.current_index else 'inactive'
            name = i
            frame = NavigationItem(
                master=self,
                width=config.SCREEN_WIDTH,
                text=f"[{item.number}] {item.name}",
                state=state,
            )
            frame.pack(side="top")
            self.frames.append(frame)

    def refresh_item(self, index):
        frame = self.frames[index]
        state = 'active' if index == self.current_index else 'inactive'
        frame.set_state(state)
