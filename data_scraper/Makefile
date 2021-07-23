export
ROOTDIR := $(shell pwd)
VENV_PYTHON := venv/bin/python


venv: requirements.txt
	virtualenv venv --python=python3
	venv/bin/pip install -r requirements.txt

clean:
	rm -rf venv

.PHONY: clean
