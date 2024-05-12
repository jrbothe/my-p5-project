let font;
let texts = [
  { text: "FEDERAL", r: 50, angle: 0, x: 0, y: 0 },  // Placeholder values, to be calculated
  { text: "GRAPHICS", r: 150, angle: 0, x: 0, y: 0 } // Placeholder values, to be calculated
];
let mouseOverIndex = -1; // Track which text is hovered over

function preload() {
  font = loadFont("fonts/Roboto-Regular.ttf");
}

function setup() {
  createCanvas(1600, 500);
  background(1);

  // Calculate centered positions for each text
  texts[0].x = (width - font.textBounds(texts[0].text, 0, 0, 300).w) / 2;
  texts[0].y = height / 4 + 120; // Adjusted to avoid being cut off (top quarter + 50px)
  texts[1].x = (width - font.textBounds(texts[1].text, 0, 0, 300).w) / 2;
  texts[1].y = (3 * height) / 4; // Lower down in the bottom quarter

  // Generate points for each text using the calculated center coordinates
  for (let i = 0; i < texts.length; i++) {
    texts[i].points = font.textToPoints(texts[i].text, texts[i].x, texts[i].y, 300, {
      sampleFactor: 0.1,
      simplifyThreshold: 0
    });
  }

  angleMode(DEGREES);
}

function draw() {
  background(1);

  // Render each text
  for (let i = 0; i < texts.length; i++) {
    let points = texts[i].points;
    let r = (i === mouseOverIndex) ? 2 : texts[i].r; // Change radius if hovered
    let angle = texts[i].angle;

    for (let j = 0; j < points.length; j++) {
      ellipse(points[j].x + r * sin(angle + j * 25), points[j].y, 10, 10);
    }

    texts[i].angle += (i === mouseOverIndex) ? 1 : 5;  // Slow down angle increment when hovered
  }

  // Check for hover after everything is drawn
  updateMouseOver();
}

function updateMouseOver() {
  let mouseYThreshold = height / 2; // Midpoint of the canvas

  // Check which half of the screen the mouse is in
  if (mouseY < mouseYThreshold) {
    // Top half - Slow "FEDERAL"
    mouseOverIndex = 0; // "FEDERAL" is index 0
  } else {
    // Bottom half - Slow "GRAPHICS"
    mouseOverIndex = 1; // "GRAPHICS" is index 1
  }
}
