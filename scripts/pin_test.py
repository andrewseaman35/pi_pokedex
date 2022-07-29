import os

import RPi.GPIO as GPIO

# Channel numbers, not GPIO numbers
PIN_UP = 13
PIN_DOWN = 7
PIN_LEFT = 11
PIN_RIGHT = 16

PIN_SELECT = 18
PIN_BACK = 15

PIN_EVENT_MAP = {
    PIN_UP: "EVENT_UP",
    PIN_LEFT: "EVENT_LEFT",
    PIN_DOWN: "EVENT_DOWN",
    PIN_RIGHT: "EVENT_RIGHT",
    PIN_BACK: "EVENT_BACK",
    PIN_SELECT: "EVENT_SELECT",
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
                pin, GPIO.RISING, callback=self._on_gpio_event, bouncetime=200
            )

    def _on_gpio_event(self, pin):
        self.on_gpio_event(pin)

    def set_on_gpio_event_handler(self, on_gpio_event):
        print("new gpio event handler")
        print(on_gpio_event)
        self.on_gpio_event = on_gpio_event


def GPIOManager():
    if _GPIOManager._instance is None:
        _GPIOManager._instance = _GPIOManager()
    return _GPIOManager._instance


def on_gpio_event(pin):
    if pin in PIN_EVENT_MAP and GPIO.input(pin):
        print(f"GPIO Pin:: {pin}")
        print(f"PIN: {PIN_EVENT_MAP[pin]}")
        print(f"value: {GPIO.input(pin)}")


gpio_manager = GPIOManager()
gpio_manager.set_on_gpio_event_handler(on_gpio_event)

while True:
    pass