export
ROOTDIR := $(shell pwd)
VENV_PYTHON := venv/bin/python


venv: requirements.txt
	virtualenv venv --python=python3.8 --system-site-packages
	venv/bin/pip install -r requirements.txt

start: venv
	$(VENV_PYTHON) app/pokedex.py

clean:
	rm -rf venv

.PHONY: clean
