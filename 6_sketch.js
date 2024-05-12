let speed1 = 0.01; // Speed for the first shape
let speed2 = 0.02; // Speed for the second shape
let speed3 = 0.03; // Speed for the third shape
let speed4 = 0.04; // Speed for the fourth shape

let xPos1 = 0; // Initial x-position for the first shape
let xPos2 = 0; // Initial x-position for the second shape
let xPos3 = 0; // Initial x-position for the third shape
let xPos4 = 0; // Initial x-position for the fourth shape

function setup() {
  createCanvas(740, 160);
  background(255);
  scale(0.29);
  strokeCap(PROJECT);
  strokeJoin(MITER);
  strokeWeight(1);
  fill(1);
  smooth(); // Enable smooth animation
}

function draw() {
  background(255); // White background

  let mouseXRatio = mouseX / width;
  let mouseYRatio = mouseY / height;

  // Update x-positions based on speed
  xPos1 = lerp(xPos1, mouseXRatio * 200, speed1);
  xPos2 = lerp(xPos2, mouseXRatio * 200, speed2);
  xPos3 = lerp(xPos3, mouseXRatio * 200, speed3);
  xPos4 = lerp(xPos4, mouseXRatio * 200, speed4);

  // First shape
  beginShape();
  vertex(0, 69.13 + xPos1);
  vertex(2322, 69.13 + xPos1);
  quadraticVertex(2322, 69.13 + xPos1, 2322, 69.13 + xPos1);
  vertex(2322, 486.98 + xPos1);
  quadraticVertex(2322, 486.98 + xPos1, 2322, 486.98 + xPos1);
  vertex(0, 486.98 + xPos1);
  quadraticVertex(0, 486.98 + xPos1, 0, 486.98 + xPos1);
  vertex(0, 69.13 + xPos1);
  quadraticVertex(0, 69.13 + xPos1, 0, 69.13 + xPos1);
  endShape();

  // Second shape
  beginShape();
  vertex(0, 45.08 + xPos2);
  vertex(2322, 45.08 + xPos2);
  quadraticVertex(2322, 45.08 + xPos2, 2322, 45.08 + xPos2);
  vertex(2322, 63.12 + xPos2);
  quadraticVertex(2322, 63.12 + xPos2, 2322, 63.12 + xPos2);
  vertex(0, 63.12 + xPos2);
  quadraticVertex(0, 63.12 + xPos2, 0, 63.12 + xPos2);
  vertex(0, 45.08 + xPos2);
  quadraticVertex(0, 45.08 + xPos2, 0, 45.08 + xPos2);
  endShape();

  // Third shape
  beginShape();
  vertex(0, 21.04 + xPos3);
  vertex(2322, 21.04 + xPos3);
  quadraticVertex(2322, 21.04 + xPos3, 2322, 21.04 + xPos3);
  vertex(2322, 36.08 + xPos3);
  quadraticVertex(2322, 36.08 + xPos3, 2322, 36.08 + xPos3);
  vertex(0, 36.08 + xPos3);
  quadraticVertex(0, 36.08 + xPos3, 0, 36.08 + xPos3);
  vertex(0, 21.04 + xPos3);
  quadraticVertex(0, 21.04 + xPos3, 0, 21.04 + xPos3);
  endShape();

  // Fourth shape
  beginShape();
  vertex(0, 0 + xPos4);
  vertex(2322, 0 + xPos4);
  quadraticVertex(2322, 0 + xPos4, 2322, 0 + xPos4);
  vertex(2322, 9 + xPos4);
  quadraticVertex(2322, 9 + xPos4, 2322, 9 + xPos4);
  vertex(0, 9 + xPos4);
  quadraticVertex(0, 9 + xPos4, 0, 9 + xPos4);
  vertex(0, 0 + xPos4);
  quadraticVertex(0, 0 + xPos4, 0, 0 + xPos4);
  endShape();
}
