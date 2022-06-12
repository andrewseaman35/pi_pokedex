from collections import namedtuple
import math

import tkinter as tk
from tkinter import font as tkfont

import config
from pokemon import Pokemon
from event_handler_mixin import (
    EventHandlerMixin,
    EVENT_UP,
    EVENT_DOWN,
    EVENT_LEFT,
    EVENT_RIGHT,
    EVENT_SELECT,
)

ITEMS_PER_PAGE = 10


NavigationEntry = namedtuple("NavigationEntry", "value label")


class HomeItem(tk.Frame):
    def __init__(self, master=None, width=None, height=None, text='item', text_anchor=tk.NW, state='default', **kwargs):
        super().__init__(master, **kwargs)
        highlight_thickness = 1
        self.width = width
        self.height = height
        self.text = text
        self.state = state
        self.configure(
            width=self.width,
            height=self.height,
            borderwidth=0,
            background=config.HOME_ITEM_COLOR,
            highlightbackground=self.get_border_color(),
            highlightthickness=highlight_thickness,
        )
        self.canvas = tk.Canvas(
            master=self,
            highlightthickness=0,
            background=config.HOME_ITEM_COLOR,
            width=self.width,
            height=self.height,
        )
        self.text = self.canvas.create_text(20, 0,
            fill="black",
            font=tkfont.Font(family=config.TYPEFACE, size=10, weight="bold"),
            text=self.text,
            anchor=text_anchor,
        )
        self.canvas.pack()

    @property
    def active(self):
        return self.state == 'active'

    def get_border_color(self):
        return '#111111' if self.active else config.HOME_ITEM_COLOR

    def set_state(self, state):
        self.state = state
        self.rerender()

    def rerender(self):
        self.configure(
            highlightbackground=self.get_border_color(),
        )
        self.update()
        self.canvas.update()


class SettingsItem(tk.Frame):
    def __init__(self, master=None, width=None, height=None, text='item', text_anchor=tk.NW, state='default', **kwargs):
        super().__init__(master, **kwargs)
        highlight_thickness = 1
        self.width = width
        self.height = height
        self.text = text
        self.state = state
        self.configure(
            width=self.width,
            height=self.height,
            borderwidth=0,
            background=config.HOME_ITEM_COLOR,
            highlightbackground=self.get_border_color(),
            highlightthickness=highlight_thickness,
        )
        self.canvas = tk.Canvas(
            master=self,
            highlightthickness=0,
            background=config.HOME_ITEM_COLOR,
            width=self.width,
            height=self.height,
        )
        self.text = self.canvas.create_text(
            config.SCREEN_WIDTH / 2 - 30,
            3,
            fill="black",
            font=tkfont.Font(family=config.TYPEFACE, size=10, weight="bold"),
            text=self.text,
            anchor=tk.N,
        )
        self.canvas.pack()

    @property
    def active(self):
        return self.state == 'active'

    def get_border_color(self):
        return '#111111' if self.active else config.HOME_ITEM_COLOR

    def set_state(self, state):
        self.state = state
        self.rerender()

    def rerender(self):
        self.configure(
            highlightbackground=self.get_border_color(),
        )
        self.update()
        self.canvas.update()


class HomeFrame(EventHandlerMixin, tk.Frame):
    def __init__(self, master=None, on_item_select=None):
        super().__init__(master)
        self.master = master
        self.on_item_select = on_item_select

        self.configure(
            background=config.BACKGROUND_COLOR,
        )

        self.event_map = {
            EVENT_UP: self.handle_up,
            EVENT_LEFT: self.handle_left,
            EVENT_DOWN: self.handle_down,
            EVENT_RIGHT: self.handle_right,
            EVENT_SELECT: self.handle_select,
        }

        self.focus_set()
        self.render()

    @property
    def active_next_frame_id(self):
        if self.pokemon_frame.active:
            return 'pokemon_selector'
        if self.camera_frame.active:
            return None
        return 'settings'

    def handle_up(self):
        if self.settings_frame.active:
            self.transition_active_from_to(self.settings_frame, self.pokemon_frame)

    def handle_down(self):
        if self.pokemon_frame.active:
            self.transition_active_from_to(self.pokemon_frame, self.settings_frame)
        elif self.camera_frame.active:
            self.transition_active_from_to(self.camera_frame, self.settings_frame)

    def handle_left(self):
        if self.camera_frame.active:
            self.transition_active_from_to(self.camera_frame, self.pokemon_frame)

    def handle_right(self):
        if self.pokemon_frame.active:
            self.transition_active_from_to(self.pokemon_frame, self.camera_frame)

    def handle_select(self):
        self.on_item_select(self.active_next_frame_id)

    def transition_active_from_to(self, item_from, item_to):
        item_from.set_state('default')
        item_to.set_state('active')

    def render(self):
        self.pokemon_frame = HomeItem(
            self,
            width=config.HOME_ITEM_WIDTH,
            height=config.HOME_ITEM_HEIGHT,
            text="Pokemon",
            state="active",
        )
        self.pokemon_frame.place(
            anchor=tk.NW,
            x=config.HOME_LEFT_RIGHT_MARGIN,
            y=config.HOME_TOP_MARGIN,
        )
        self.camera_frame = HomeItem(
            self,
            width=config.HOME_ITEM_WIDTH,
            height=config.HOME_ITEM_HEIGHT,
            text="Camera",
        )
        self.camera_frame.place(
            anchor=tk.NE,
            x=config.SCREEN_WIDTH - config.HOME_LEFT_RIGHT_MARGIN,
            y=config.HOME_TOP_MARGIN
        )
        self.settings_frame = SettingsItem(
            self,
            width=config.SCREEN_WIDTH - (2 * config.HOME_LEFT_RIGHT_MARGIN),
            height=config.HOME_SETTINGS_ITEM_HEIGHT,
            text="Settings",
            text_anchor=tk.N,
        )
        self.settings_frame.place(
            anchor=tk.N,
            x=config.SCREEN_WIDTH / 2,
            y=config.HOME_SETTINGS_TOP_MARGIN,
        )
