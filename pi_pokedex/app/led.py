import config

if config.IS_RUNNING_ON_RPI:
    import RPi.GPIO as GPIO

# Channel numbers, not GPIO numbers
LED_LEFT = 8
LED_MID = 10
LED_RIGHT = 12
LED_BULB = 7

class GPIOMock:
    BOARD = "board"
    OUT = "out"
    LOW = "low"
    HIGH = "high"

    def __init__(self):
        self._state = {}

    def setwarnings(self, v):
        pass

    def setmode(self, v):
        pass

    def setup(self, pin, val):
        print(f"setup: {pin} - {val}")

    def _output(self, pin, val):
        print(f"WRITE: {pin} - {val}")
        self._state[pin] = val

    def output(self, pin, val):
        if isinstance(pin, list):
            if isinstance(val, list):
                for i, p in enumerate(pin):
                    self._output(p, val[i])
            else:
                for p in pin:
                    self._output(p, val)
        else:
            self._output(pin, val)

    def input(self, pin):
        val = self._state[pin]
        print(f"READ: {pin} - {val}")
        return val



GPIO = GPIOMock()


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

    def __init__(self):
        print("LED INIT")
        GPIO.setwarnings(False)
        GPIO.setmode(GPIO.BOARD)
        for pin in self._LED_PINS:
            GPIO.setup(pin, GPIO.OUT)
        GPIO.output(self._LED_PINS, GPIO.LOW)

    def set_bulb(self, value):
        GPIO.output(self._LED_BULB, GPIO.HIGH if value else GPIO.LOW)

    def set_trio(self, values):
        if isinstance(values, list):
            assert len(list) == len(self._LED_TRIO)
            GPIO.output(
                self._LED_TRIO,
                [GPIO.HIGH if v else GPIO.LOW for v in values],
            )
        elif isinstance(values, (int, bool)):
            GPIO.output(
                self._LED_TRIO,
                [GPIO.HIGH if values else GPIO.LOW for _ in self._LED_TRIO]
            )



def LEDManager():
    if _LEDManager._instance is None:
        _LEDManager._instance = _LEDManager()
    return _LEDManager._instance