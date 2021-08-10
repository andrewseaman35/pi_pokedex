from navigation import NavigationFrame, NavigationEntry
from utils import get_ip_address


class SettingsFrame(NavigationFrame):
    def __init__(self, master, on_back=None):
        ip_address = get_ip_address()
        items = [
            NavigationEntry('ip', f'IP Address: {ip_address}'),
            NavigationEntry('version', 'Version: 0.0.1'),
        ]
        super().__init__(master=master, items=items, on_back=on_back)
