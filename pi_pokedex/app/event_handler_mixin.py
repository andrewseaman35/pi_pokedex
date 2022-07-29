import os

import config

if config.IS_RUNNING_ON_RPI:
    import RPi.GPIO as GPIO

EVENT_UP = "up"
EVENT_DOWN = "down"
EVENT_LEFT = "left"
EVENT_RIGHT = "right"
EVENT_BACK = "back"
EVENT_SELECT = "select"

# Channel numbers, not GPIO numbers
PIN_UP = 13
PIN_DOWN = 7
PIN_LEFT = 11
PIN_RIGHT = 16

PIN_SELECT = 18
PIN_BACK = 15

# left and back

PIN_EVENT_MAP = {
    PIN_UP: EVENT_UP,
    PIN_LEFT: EVENT_LEFT,
    PIN_DOWN: EVENT_DOWN,
    PIN_RIGHT: EVENT_RIGHT,
    PIN_BACK: EVENT_BACK,
    PIN_SELECT: EVENT_SELECT,
}

KEY_EVENT_MAP = {
    "w": EVENT_UP,
    "a": EVENT_LEFT,
    "s": EVENT_DOWN,
    "d": EVENT_RIGHT,
    "j": EVENT_BACK,
    "k": EVENT_SELECT,
}


class _GPIOManager:
    _instance = None

    def __init__(self):
        self.init_gpio()
        self.add_event_detection()

    def init_gpio(self):
        print("GPIO INIT")
        GPIO.setwarnings(False)
        GPIO.setmode(GPIO.BOARD)
        for pin in PIN_EVENT_MAP.keys():
            GPIO.setup(pin, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

    def add_event_detection(self):
        print("Initialing events")
        for pin in PIN_EVENT_MAP.keys():
            print(f"initializing pin {pin}")
            GPIO.add_event_detect(
                pin, GPIO.RISING, callback=self._on_gpio_event, bouncetime=400
            )

    def _on_gpio_event(self, pin):
        # Despite us setting GPIO.RISING, this seems to trigger on both, make sure
        # input is high before firing.
        if GPIO.input(pin):
            self.on_gpio_event(pin)

    def set_on_gpio_event_handler(self, on_gpio_event):
        print(f"new gpio event handler: {on_gpio_event}")
        self.on_gpio_event = on_gpio_event


def GPIOManager():
    if _GPIOManager._instance is None:
        _GPIOManager._instance = _GPIOManager()
    return _GPIOManager._instance

class EventHandlerMixin:

    def __init__(self, *args, **kwargs):
        self.event_map = {}

        super().__init__(*args, **kwargs)
        print(f"initing: {self}")

        self.gpio_manager = None
        if config.IS_RUNNING_ON_RPI:
            self.gpio_manager = GPIOManager()
            self.gpio_manager.set_on_gpio_event_handler(self.on_gpio_event)

        self.bind("<KeyPress>", self.on_keyboard_press)

    def init_event_map(self):
        self.event_map = {}

    def on_gpio_event(self, pin):
        if pin in PIN_EVENT_MAP:
            event = PIN_EVENT_MAP[pin]
            print(f"PIN: {PIN_EVENT_MAP[pin]}")
            self.handle_event(event)

    def on_keyboard_press(self, e):
        if e.char in KEY_EVENT_MAP:
            event = KEY_EVENT_MAP[e.char]
            self.handle_event(event)

    def handle_event(self, event_type):
        handler = self.event_map.get(event_type)
        if handler:
            handler()
