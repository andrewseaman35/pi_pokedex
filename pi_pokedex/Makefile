export
ROOTDIR := $(shell pwd)
VENV_PYTHON := venv/bin/python

UNAME := $(shell uname -m)
ifeq ($(UNAME),arm64)
PYTHON=python3.10
else
PYTHON=python3.7
endif

venv: requirements.txt
	virtualenv venv --python=$(PYTHON)
	venv/bin/pip install -r requirements.txt

start: venv
	$(VENV_PYTHON) app/pokedex.py

clean:
	rm -rf venv

.PHONY: clean
