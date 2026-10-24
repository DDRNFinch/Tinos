# Velicia

Design workspace for **Velicia**, a stylised 3D fantasy open-world RPG for
Android.

This folder is separate from the Tinos web app in the repository root. The
Tinos APK build copies only its own listed files, so nothing here affects it.

- [`docs/CHARACTER_DESIGN.md`](docs/CHARACTER_DESIGN.md): authoritative
  character design spec for the Amir, Burrok, Gouran and Gyria.
- [`docs/ASSET_REDESIGN_CHECKLIST.md`](docs/ASSET_REDESIGN_CHECKLIST.md):
  review flags for existing and incoming assets.
- [`data/peoples.json`](data/peoples.json): the same spec in machine-readable
  form, ready to load into a game engine (e.g. Godot) later.

## Engine

The plan is to build Velicia in **Godot 4** (it also has an Android editor).
A Godot project (`project.godot`) has not been created yet. When it is, put it
in this folder and load `data/peoples.json` for character stats and
proportions.
