import os

import config

from frames.navigation import NavigationFrame, NavigationEntry
from utils import get_ip_address


ACTION_SHUTDOWN = "shutdown"
ACTION_EXIT = "exit"


class SettingsFrame(NavigationFrame):
    def __init__(self, master, on_back=None):
        ip_address = get_ip_address()
        # exit_entry = (
        #     NavigationEntry(ACTION_SHUTDOWN, "Shutdown")
        #     if config.IS_RUNNING_ON_RPI else
        #     NavigationEntry(ACTION_EXIT, "Exit")
        # )
        exit_entry = NavigationEntry(ACTION_EXIT, "Exit")
        items = [
            NavigationEntry("ip", f"IP Address: {ip_address}"),
            NavigationEntry("version", "Version: 0.0.1"),
            exit_entry,
        ]
        super().__init__(
            master=master,
            items=items,
            on_back=on_back,
            on_item_select=self._on_item_select,
        )

    def _on_item_select(self, action):
        if action == ACTION_SHUTDOWN:
            os.system("sudo shutdown -h now")
        elif action == ACTION_EXIT:
            self.master.destroy()
