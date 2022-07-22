import os

#TYPEFACE = "Avenir Next"
TYPEFACE = "FreeSans"

SCREEN_WIDTH = 320
SCREEN_HEIGHT = 240

# SPLASH_TIME = 3000
SPLASH_TIME = 100

HOME_ITEM_WIDTH = 120
HOME_ITEM_HEIGHT = 120
HOME_TOP_MARGIN = 40
HOME_LEFT_RIGHT_MARGIN = 30
HOME_SETTINGS_ITEM_WIDTH = 240
HOME_SETTINGS_ITEM_HEIGHT = 20
HOME_SETTINGS_TOP_MARGIN = 200
HOME_ITEM_COLOR = "#EEEEEE"

NAV_ITEM_SELECTED_COLOR = "#DDDDDD"
NAV_ITEM_BORDER_COLOR = "#BBBBBB"

HEADER_HEIGHT = 30
STATS_HEIGHT = 100

STATS_LABEL_CHARS = 8
STATS_VALUE_CHARS = 11

BASE_STATS_LABEL_CHARS = 7
BASE_STATS_VALUE_CHARS = 3

DESCRIPTION_HEIGHT = 42
EVOLUTION_HEIGHT = 32

BLACK = "#000000"
BACKGROUND_COLOR = "#FFFFFF"
EVOLUTION_BACKGROUND = "#EEEEEE"

RPI_UNAMES = {"armv6l", "armv7l"}

IS_RUNNING_ON_RPI = os.uname()[4] in RPI_UNAMES
