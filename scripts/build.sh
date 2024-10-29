#!/bin/bash

# Define the source and destination directories
SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
src_dir="$SCRIPTPATH/../src"
dest=$1
build_dir="$SCRIPTPATH/../$1"

# Check if the "build" directory exists; if not, create it
if [ ! -d "$build_dir" ]; then
    mkdir -p "$build_dir"
fi

# Clear the contents of the "build" directory
find $build_dir -type f ! -name "index.css" -exec rm -f {} \;

# Copy the contents of the "src" directory to the "build" directory
cp -r "$src_dir"/* "$build_dir"

echo "Contents of '$src_dir' have been copied to '$build_dir'."

npx tailwindcss -i $SCRIPTPATH/../src/index.css -o $build_dir/index.css
npx tailwindcss -i $SCRIPTPATH/../src/css/*.tw.css -o $build_dir/css/*