import PIL.Image
import PIL.ImageTk

import tkinter as tk
from tkinter import font as tkfont

import config
from event_handler_mixin import (
    EventHandlerMixin,
    EVENT_UP,
    EVENT_DOWN,
    EVENT_LEFT,
    EVENT_RIGHT,
    EVENT_SELECT,
)


class HomeItem(tk.Frame):
    def __init__(
        self,
        master=None,
        width=None,
        height=None,
        text="item",
        icon=None,
        state="default",
        **kwargs,
    ):
        super().__init__(master, **kwargs)
        highlight_thickness = 1
        self.width = width
        self.height = height
        self.text = text
        self.state = state
        self.icon = icon
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
        self.image = HomeItemImage(self.canvas, self.icon)

        self.label = tk.Label(
            self.canvas,
            text=self.text,
            background=config.HOME_ITEM_COLOR,
            fg=config.BLACK,
            font=tkfont.Font(family=config.TYPEFACE, size=config.HOME_ITEM_FONT_SIZE, weight="bold"),
            anchor=tk.W,
            justify=tk.LEFT,
        )
        self.label.pack(side=tk.TOP, pady=(0, 15))
        self.canvas.pack()

    @property
    def active(self):
        return self.state == "active"

    def get_border_color(self):
        return "#111111" if self.active else config.HOME_ITEM_COLOR

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
    def __init__(
        self,
        master=None,
        width=None,
        height=None,
        text="item",
        state="default",
        **kwargs,
    ):
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
            config.SCREEN_WIDTH / 2 - 60,
            config.HOME_SETTINGS_TEXT_PADY,
            fill="black",
            font=tkfont.Font(family=config.TYPEFACE, size=config.HOME_ITEM_FONT_SIZE, weight="bold"),
            text=self.text,
            anchor=tk.N,
        )
        self.canvas.pack()

    @property
    def active(self):
        return self.state == "active"

    def get_border_color(self):
        return "#111111" if self.active else config.HOME_ITEM_COLOR

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
        self.on_item_select = on_item_select
        self.master = master

        super().__init__(master)

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
            return "pokemon_selector"
        if self.camera_frame.active:
            return "camera"
        return "settings"

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
        print(f"handling select: {self.active_next_frame_id}")
        self.on_item_select(self.active_next_frame_id)

    def transition_active_from_to(self, item_from, item_to):
        item_from.set_state("default")
        item_to.set_state("active")

    def render(self):
        self.pokemon_frame = HomeItem(
            self,
            #width=config.HOME_ITEM_WIDTH,
            #height=config.HOME_ITEM_HEIGHT,
            text="Pokemon",
            state="active",
            icon="icon_pokeball",
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
            icon="icon_camera",
        )
        self.camera_frame.place(
            anchor=tk.NE,
            x=config.SCREEN_WIDTH - config.HOME_LEFT_RIGHT_MARGIN,
            y=config.HOME_TOP_MARGIN,
        )
        self.settings_frame = SettingsItem(
            self,
            width=config.SCREEN_WIDTH - (2 * config.HOME_LEFT_RIGHT_MARGIN),
            height=config.HOME_SETTINGS_ITEM_HEIGHT,
            text="Settings",
        )
        self.settings_frame.place(
            anchor=tk.N,
            x=config.SCREEN_WIDTH / 2,
            y=config.HOME_SETTINGS_TOP_MARGIN,
        )


class HomeItemImage(tk.Frame):
    image_size = (200, 200)

    def __init__(self, master, icon):
        super().__init__(master, bg=config.HOME_ITEM_COLOR)
        self.master = master
        self.icon = icon
        self.render_image()

    @property
    def filepath(self):
        return f"./assets/img/home/{self.icon}.png"

    def render_image(self):
        im = PIL.Image.open(self.filepath).convert("RGBA")
        im.thumbnail(self.image_size)
        photo = PIL.ImageTk.PhotoImage(im)
        label = tk.Label(
            self.master,
            width=config.HOME_IMG_WIDTH,
            height=config.HOME_IMG_HEIGHT,
            image=photo,
            bg=config.HOME_ITEM_COLOR,
            borderwidth=0,
        )
        label.image = photo
        label.pack(side=tk.TOP, padx=config.HOME_IMG_PADX, pady=config.HOME_IMG_PADY)
