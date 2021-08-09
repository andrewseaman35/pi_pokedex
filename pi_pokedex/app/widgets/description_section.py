import tkinter as tk

import config


class DescriptionSection(tk.Frame):
    def __init__(self, master, description):
        super().__init__(master)
        self.master = master
        self.description = description
        
        self.configure(
            width=config.SCREEN_WIDTH,
            height=config.DESCRIPTION_HEIGHT,
            borderwidth=0,
            background=config.BACKGROUND_COLOR,
            highlightbackground=config.BACKGROUND_COLOR,
            highlightthickness=0,
            padx=10,
        )
        self.canvas = tk.Canvas(
            master=self,
            highlightthickness=0,
            background=config.BACKGROUND_COLOR,
            width=config.SCREEN_WIDTH,
            height=config.DESCRIPTION_HEIGHT,
        )
        self.text = self.canvas.create_text(0, 0,
            fill="black",
            font=(config.TYPEFACE, 10),
            text=self.description,
            anchor=tk.NW,
            width=config.SCREEN_WIDTH - 20
        )
        # self.canvas.pack(side="left")
        self.canvas.grid(row=0, column=0, pady=5)