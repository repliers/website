#!/bin/bash
 
counter=0;
 
function execute() {
    counter=$((counter+1))
    echo "Detected change n. $counter" 
    eval "$@"   
}

SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
project_dir="$(realpath $SCRIPTPATH/..)"

$project_dir/scripts/build.sh $1

if [[ "$OSTYPE" == "darwin"* ]]; then
if ! command -v fswatch &> /dev/null; then
        echo "inotifywait not installed."
        echo "Type command brew install fswatch"
        exit 1
    fi
    # macOS
    fswatch -e "$project_dir/$1" -e "$project_dir/node_modules" -r -o "$project_dir" | while read -r changed; do
        execute "$project_dir/scripts/build.sh $1"
    done
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    if ! command -v inotifywait &> /dev/null; then
        echo "inotifywait not installed."
        echo "In most distros, it is available in the inotify-tools package."
        exit 1
    fi

    inotifywait --exclude "($project_dir/$1|$project_dir/node_modules)" --recursive --monitor --format "%e %w%f" \
    --event close_write,move,delete "$project_dir" | while read -r changed; do
        execute "$project_dir/scripts/build.sh $1"
    done
else
    echo "Unsupported OS: $OSTYPE"
    exit 1
fi