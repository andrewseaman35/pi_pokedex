import os

TYPEFACE = "Avenir Next"

SCREEN_WIDTH = 320
SCREEN_HEIGHT = 240

SPLASH_TIME = 3000

HEADER_HEIGHT = 30
STATS_HEIGHT = 100

STATS_LABEL_CHARS = 8 
STATS_VALUE_CHARS = 11

BASE_STATS_LABEL_CHARS = 7
BASE_STATS_VALUE_CHARS = 3

DESCRIPTION_HEIGHT = 42
EVOLUTION_HEIGHT = 32

BACKGROUND_COLOR = '#FFFFFF'
EVOLUTION_BACKGROUND = '#EEEEEE'

RPI_UNAMES = {'armv7l'}

IS_RUNNING_ON_RPI = os.uname()[4] in RPI_UNAMES