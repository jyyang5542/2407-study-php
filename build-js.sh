#!/bin/bash

# Create the output directory if it doesn't exist
mkdir -p dist/assets/js

# Minify each JavaScript file in the dev/assets/js directory
for file in dev/assets/js/*.js; do
  # Get the base name of the file (without path)
  filename=$(basename "$file")
  
  # Minify the file and output to the dist directory
  terser "$file" --compress --mangle --output "dist/assets/js/$filename"
done
