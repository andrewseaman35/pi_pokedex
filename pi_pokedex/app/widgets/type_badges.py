import PIL.Image
import PIL.ImageTk

import tkinter as tk

import config


class Badge(tk.Frame):
    image_size = (30, 30)

    def __init__(self, master, badge_type):
        super().__init__(master, bg='white')
        self.master = master
        self.badge_type = badge_type.lower()
        self.pack(side="right")
        self.render_image()

    @property
    def filepath(self):
        return f"./assets/img/badges/{self.badge_type}.png"

    def render_image(self):
        # TODO make transparent background work.
        im = PIL.Image.open(self.filepath).convert('RGB')
        im.thumbnail(self.image_size)

        photo = PIL.ImageTk.PhotoImage(im)
        label = tk.Label(self, image=photo)
        label.image = photo
        label.pack(side="right")


class TypeBadges(tk.Frame):
    def __init__(self, master, badge_types=None):
        super().__init__(master)
        self.master = master
        self.badge_types = badge_types or []

        for badge_type in self.badge_types:
            Badge(
                master=self, 
                badge_type=badge_type
            )
        self.pack(side="right",  anchor='ne')