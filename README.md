# contrast-palette-checker
This is a palette checker tool for the p5 editor (editor.p5js.org). I developed it while working for the Processing Foundation as an open source software intern and focusing on color accessibility. This is based on the [Web Content Accessibility Guidelines (WCAG) 2.2]([url](https://www.w3.org/TR/WCAG22/)). It takes a color palette scss file and outputs a text file with all the appropriate color combinations for each palette. Any configuThat file is then used by a p5.js sketch to draw and download a visual guide to these palettes. Feel free to download it and adjust it for your own project!

## contrast.py
- This is the first file you will want to run.
- Make sure that your input file for scss variables is in the same directory, or include a path with the [path library](https://docs.python.org/3/library/pathlib.html) that is already included.
- Global variables can be adjusted at the top of the file, and the path for output files can be specified.
- outputs markdown files for each color palette as well as a file contrasts.txt that is used as input for the p5 project.

## pallete-checker-p5
- This directory contains a p5.js project that you use to actually download the images.
- There is a pre-included file called contrasts.txt that I built using the p5 editor variables file.
- steps for getting set up
  - Go to the [p5 editor](https://editor.p5js.org/)
  - Make a new project
  - Delete the existing files (index.html, style.css, and sketch.js)
  - Upload the files from the folder
- Make sure to upload your version of contrasts.txt and make sure it is named contrasts.txt exactly (by default the editor will add a -1 to the end of the name instead of prompting you to replace the existing images.
- Global variables can be adjusted at the top of the file
- When you are ready to download your images, set the flag <code>readyToSave</code> to <code>true</code>. 

## pallete-checker-p5-old
- this is a very different p5.js project that executes individual sketches to create the images to save. It is different enough from the new palette checker that I included it as its own directory.
