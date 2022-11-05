# Notes on Fab Things

These are notes to preserve my own memory (or rather to allow me not to) and which may be of assistance to those following the fab path.

[Program a programmer](./PROGRAM_PROGRAMMER.md)

[Program SAMD chips with Arduino](./PROGRAMMING_SAMD_CHIPS_ARDUINO.md)

## Miscellaneous

### Reset your Git Repo (local becomes remote)

```
git fetch origin
git reset --hard origin/master
```

List serial devices (Mac)

```
ls /dev/tty.*
ls /dev/cu.*
```

### Resize Images

I keep a `raw-assets` folder and an `assets` folder.

In my `.gitignore` file I add this line:

```
raw-assets
```

This way I won't push large images to git.

Then I use [imagemagick](https://imagemagick.org/index.php) in a bash script to batch compress my images.

You'll have to install imagemagick which I do on mac as such

```
brew install imagemagick
```

The batch compression script is

```
magick mogrify -quality 50 -path ./assets  -format jpg ./raw-assets/*.png
```

Which you can find here `./compress.sh`. I can run this script with

```
bash compress.sh
```

