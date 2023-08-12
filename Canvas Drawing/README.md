# Canvas Drawing Example

This repository contains a simple HTML file demonstrating how to create a canvas element and implement basic drawing functionality using JavaScript. Users can click and drag the mouse on the canvas to draw lines.

## Getting Started

To run this example, simply open the `canvas.html` file in a web browser that supports HTML5 and JavaScript.

### Prerequisites

You only need a modern web browser to run this example. No additional installations are required.

## Usage

1. Open the `canvas.html` file in a web browser.
2. Click and hold the mouse button on the canvas.
3. Drag the mouse around to draw lines.
4. Release the mouse button to stop drawing.

## Code Explanation

The HTML file `canvas.html` contains a canvas element and JavaScript code to handle the drawing functionality. The canvas is initialized with a width and height of 400 pixels each. The JavaScript code inside the `<script>` tag handles the mouse events and drawing operations.

The functions included are:
- `startDrawing(event)`: Initiates drawing when the mouse button is pressed.
- `drawLine(event)`: Draws lines as the mouse is moved while holding the button.
- `stopDrawing(event)`: Stops drawing when the mouse button is released.
