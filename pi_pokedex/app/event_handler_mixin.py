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

PIN_UP = 8
PIN_DOWN = 10
PIN_LEFT = 12
PIN_RIGHT = 16
PIN_SELECT = 18
PIN_BACK = 22

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


HAS_INITIALIZED_GPIO = False
HAS_INITIALIZED_EVENTS = False

class EventHandlerMixin:

    def __init__(self, *args, **kwargs):
        self.event_map = {}

        super().__init__(*args, **kwargs)
        print(f"initing: {self}")

        if config.IS_RUNNING_ON_RPI:
            self.init_gpio()
            global HAS_INITIALIZED_EVENTS
            if not HAS_INITIALIZED_EVENTS:
                self.add_event_detection()

        self.bind("<KeyPress>", self.on_keyboard_press)

    @classmethod
    def init_gpio(cls):
        global HAS_INITIALIZED_GPIO
        if not HAS_INITIALIZED_GPIO:
            print("GPIO INIT")
            GPIO.setwarnings(False)
            GPIO.setmode(GPIO.BOARD)
            for pin in PIN_EVENT_MAP.keys():
                GPIO.setup(pin, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
            HAS_INITIALIZED_GPIO = True

    def init_event_map(self):
        self.event_map = {}

    def add_event_detection(self):
        global HAS_INITIALIZED_EVENTS
        for pin in PIN_EVENT_MAP.keys():
            GPIO.add_event_detect(
                pin, GPIO.RISING, callback=lambda _: self.on_gpio_event(pin)
            )
        HAS_INITIALIZED_EVENTS = True

    def remove_event_detection(self):
        for pin in PIN_EVENT_MAP.keys():
            GPIO.remove_event_detect(pin)

    def on_gpio_event(self, pin):
        print(f"pin: {pin}")
        if pin in PIN_EVENT_MAP:
            event = PIN_EVENT_MAP[pin]
            self.handle_event(event)

    def on_keyboard_press(self, e):
        if e.char in KEY_EVENT_MAP:
            event = KEY_EVENT_MAP[e.char]
            self.handle_event(event)

    def handle_event(self, event_type):
        handler = self.event_map.get(event_type)
        print(f"handling {handler}")
        if handler:
            handler()

    def on_pause(self):
        print(f"pausing: {self}")
        if config.IS_RUNNING_ON_RPI:
            self.remove_event_detection()

    def on_resume(self):
        print(f"resuming: {self}")
        if config.IS_RUNNING_ON_RPI:
            self.add_event_detection()

    def destroy(self):
        print(f"Destorying: {self}")
        if config.IS_RUNNING_ON_RPI:
            self.remove_event_detection()
        super().destroy()
