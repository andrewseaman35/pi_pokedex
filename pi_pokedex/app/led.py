import datetime
import sys
import time
import threading

import RPi.GPIO as GPIO

# Channel numbers, not GPIO numbers
LED_LEFT = 8
LED_MID = 10
LED_RIGHT = 12
LED_BULB = 7


class _LEDManager:
    _instance = None

    _LED_BULB = LED_BULB
    _LED_TRIO = [
        LED_LEFT,
        LED_MID,
        LED_RIGHT,
    ]

    _LED_PINS = _LED_TRIO + [
        _LED_BULB,
    ]

    _PATTERNS = {
        'forward': [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ],
        'backward': [
            [0, 0, 1],
            [0, 1, 0],
            [1, 0, 0],
        ],
        'wave': [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
            [0, 1, 0],
        ],
        'alternate': [
            [1, 0, 1],
            [0, 1, 0],
        ],
    }

    def __init__(self):
        print("LED INIT")
        self.__running = False
        self.__thread = threading.Thread(target=self._run)

        GPIO.setwarnings(False)
        GPIO.setmode(GPIO.BOARD)
        for pin in self._LED_PINS:
            GPIO.setup(pin, GPIO.OUT)
        GPIO.output(self._LED_PINS, GPIO.LOW)

    def set_bulb(self, value):
        GPIO.output(self._LED_BULB, GPIO.HIGH if value else GPIO.LOW)

    def set_trio(self, values):
        if isinstance(values, list):
            assert len(values) == len(self._LED_TRIO)
            GPIO.output(
                self._LED_TRIO,
                [GPIO.HIGH if v else GPIO.LOW for v in values],
            )
        elif isinstance(values, (int, bool)):
            GPIO.output(
                self._LED_TRIO,
                [GPIO.HIGH if values else GPIO.LOW for _ in self._LED_TRIO]
            )

    def reset(self):
        self.set_bulb(0)
        self.set_trio(0)

    def start(self, pattern, duration):
        if self.__running:
            raise Exception("LEDs already running")

        self.__running = True
        self.__thread = threading.Thread(target=lambda: self._run(pattern, duration))
        self.__thread.start()

    def stop(self):
        self.__running = False
        self.join()
        self.reset()

    def join(self):
        if self.__thread.is_alive():
            self.__thread.join()

    def _run(self, pattern, delay):
        self.__running = True
        assert delay >= 0
        values = self._PATTERNS[pattern]

        while self.__running:
            for p in values:
                self.set_trio(p)
                if not self.__running:
                    break
                time.sleep(delay)


def LEDManager():
    if _LEDManager._instance is None:
        _LEDManager._instance = _LEDManager()
    return _LEDManager._instance

if __name__ == "__main__":
    command = sys.argv[1]
    if command not in {'start', 'stop'}:
        raise Exception("invalid command")
    if command == 'start':
        pattern = sys.argv[1]
        if pattern not in LEDManager()._PATTERNS:
            raise Exception("invalid pattern")
        duration = float(sys.argv[1])
        if duration <= 0:
            raise ValueError("bad duration")
        LEDManager().start(sys.argv[1], duration)
    elif command == 'stop':
        LEDManager().stop()