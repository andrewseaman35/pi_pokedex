# Training Set Validation #

This is a little TKinter application I threw together to help with validating data for the
training sets. Since I bulk downloaded images of Pokemon for training, there are many images
in the downloaded set that should not be used for training (such as images of other pokemon).

I built this to speed up the process of going through the images and building the training datasets.
It helps me quickly display an image, and let me approve or reject that image for use. It also
automatically removes corrupted or otherwise un-usable images.


![In application screenshot](https://raw.githubusercontent.com/andrewseaman35/pi_pokedex/main/screenshots/training_set_validation/usage_abra.png)


## Usage ##

### Directory Structure ###

The application expects a directory structure like the following:

```
training_set_validation
├── training_set_validation.py
└──  unvalidated_images/
    ├── pokemon_1/
    │   ├── img.png
    │   ├── img-invalid.png
    │   ├── img.jpg
    └── pokemon_2/
        ├── img.png
        ├── img-1.png
        └── img.jpg
```

In this structure `pokemon_1` and `pokemon_2` would correspond to the names of pokemon and the contained
images would have all be downloaded through the training set building process.


### Running the Application ###

Make the virtual environment and activate, if you need to:

```
make venv
```

Run the application for a given pokemon.

**Args:**

- `pokemon_1` - the name of the pokemon; corresponds to directory under `unvalidated_images/`
- `commit` - include to move files around

```
venv/bin/python training_set_validation.py pokemon_1 commit  # omit `commit` if you don't want to move files
```

Follow the in-app instructions to work through the unvalidated training data.


### Resulting Directory Structure ###

Once complete (if run for `pokemon_1`, for example), your directory structure should look like this:

```
training_set_validation/
├── training_set_validation.py
├──  approved_images/
│   ├── pokemon_1/
│   │   ├── img.png
│   │   ├── img.jpg
├──  rejected_images/
│   ├── pokemon_1/
│   │   ├── img-1.png
└──  unvalidated_images/
    ├── pokemon_1/
    └── pokemon_2/
        ├── img.png
        ├── img-1.png
        └── img.jpg
```

If all of the images were checked, there should be no files left in `pokemon_1/`. Images that were approved for
use in the training set will be under `validated_images/pokemon_1/`, and images that either failed to open or
were rejected for use will be under `rejected_images/pokemon_1/`
