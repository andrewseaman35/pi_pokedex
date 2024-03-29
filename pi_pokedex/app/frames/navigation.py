from collections import namedtuple
import math

import tkinter as tk
from tkinter import font as tkfont

import config
from event_handler_mixin import (
    EventHandlerMixin,
    EVENT_UP,
    EVENT_DOWN,
    EVENT_LEFT,
    EVENT_RIGHT,
    EVENT_BACK,
    EVENT_SELECT,
)

ITEMS_PER_PAGE = 10


NavigationEntry = namedtuple("NavigationEntry", "value label")


class NavigationItem(tk.Frame):
    def __init__(self, master=None, width=120, text="item", state="default", **kwargs):
        super().__init__(master, **kwargs)
        self.width = width
        self.height = config.SCREEN_HEIGHT / ITEMS_PER_PAGE
        self.text = text
        self.state = state
        self.configure(
            width=self.width,
            height=self.height,
            borderwidth=0,
            background=self.get_background_color(),
            highlightthickness=0,
        )
        self.canvas = tk.Canvas(
            master=self,
            highlightthickness=0,
            background=self.get_background_color(),
            width=self.width,
            height=self.height,
        )
        self.text = self.canvas.create_text(
            40,
            10,
            fill="black",
            font=tkfont.Font(family=config.TYPEFACE, size=config.NAV_ITEM_FONT_SIZE, weight="normal"),
            text=self.text,
            anchor=tk.NW,
        )
        self.canvas.pack()

    @property
    def active(self):
        return self.state == "active"

    def get_background_color(self):
        return (
            config.NAV_ITEM_SELECTED_COLOR if self.active else config.BACKGROUND_COLOR
        )

    def set_state(self, state):
        self.state = state
        self.rerender()

    def rerender(self):
        self.configure(
            background=self.get_background_color(),
        )
        self.update()
        self.canvas.configure(
            background=self.get_background_color(),
        )
        self.canvas.update()


class NavigationFrame(EventHandlerMixin, tk.Frame):
    def __init__(self, master=None, items=None, on_item_select=None, on_back=None):
        super().__init__(master)
        self.master = master
        self.on_item_select = on_item_select
        self.on_back = on_back

        self.configure(
            borderwidth=0,
            background=config.BACKGROUND_COLOR,
            highlightbackground=config.BACKGROUND_COLOR,
            highlightthickness=0,
            bg=config.BACKGROUND_COLOR,
        )

        self.event_map = {
            EVENT_UP: self.handle_up,
            EVENT_LEFT: self.handle_left,
            EVENT_DOWN: self.handle_down,
            EVENT_RIGHT: self.handle_right,
            EVENT_BACK: self.handle_back,
            EVENT_SELECT: self.handle_select,
        }
        self.items = items
        self.frames = []
        self.current_page_index = 0
        self.current_page = 0

        self.focus_set()
        self.render_page()

    @property
    def num_pages(self):
        return int(math.ceil(len(self.items) / float(ITEMS_PER_PAGE)))

    @property
    def current_index(self):
        return (self.current_page * ITEMS_PER_PAGE) + self.current_page_index

    def get_items_page(self, page_index):
        start_index = page_index * ITEMS_PER_PAGE
        end_index = start_index + ITEMS_PER_PAGE
        return self.items[start_index:end_index]

    def handle_up(self):
        previous_index = self.current_page_index
        render_new_page = False
        if self.current_page_index > 0:
            self.current_page_index -= 1
        elif self.current_page > 0:
            self.current_page_index = len(self.frames) - 1
            self.current_page -= 1
            render_new_page = True

        self.refresh_item(previous_index)
        self.refresh_item(self.current_page_index)
        if render_new_page:
            self.render_page()

    def handle_down(self):
        previous_index = self.current_page_index
        render_new_page = False
        if self.current_page_index < len(self.frames) - 1:
            self.current_page_index += 1
        elif self.current_page < (self.num_pages - 1):
            self.current_page_index = 0
            self.current_page += 1
            render_new_page = True
        self.refresh_item(previous_index)
        self.refresh_item(self.current_page_index)
        if render_new_page:
            self.render_page()

    def handle_left(self):
        if self.current_page > 0:
            self.current_page_index = 0
            self.current_page -= 1
            self.render_page()

    def handle_right(self):
        if self.current_page < self.num_pages - 1:
            self.current_page_index = 0
            self.current_page += 1
            self.render_page()

    def handle_back(self):
        if self.on_back is not None:
            self.on_back()

    def handle_select(self):
        if self.on_item_select is not None:
            self.on_item_select(self.items[self.current_index].value)

    def render_page(self):
        for frame in self.frames:
            frame.destroy()
        self.frames = []

        page_items = self.get_items_page(self.current_page)
        for i, item in enumerate(page_items):
            state = "active" if i == self.current_page_index else "inactive"
            frame = NavigationItem(
                master=self,
                width=config.SCREEN_WIDTH,
                text=item.label,
                state=state,
            )
            frame.pack(side=tk.TOP)
            self.frames.append(frame)

    def refresh_item(self, index):
        frame = self.frames[index]
        state = "active" if index == self.current_page_index else "inactive"
        frame.set_state(state)
