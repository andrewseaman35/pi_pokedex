export
ROOTDIR := $(shell pwd)
VENV_PYTHON := venv/bin/python

UNAME := $(shell uname -m)
PYTHON=python

venv: requirements.txt
	python -m virtualenv venv --python=$(PYTHON)
	venv/bin/pip install -r requirements.txt

start: venv
	$(VENV_PYTHON) app/pokedex.py

clean:
	rm -rf venv

.PHONY: clean venv
