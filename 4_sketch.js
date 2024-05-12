let currentOffsetY = 0; // Current Y offset for smooth transition

function setup() {
  createCanvas(740, 160);
 fill(0);             
  stroke(255);         
}

function draw() {
  background(255);

  // Number of copies and maximum vertical offset
  let numCopies = 7;
  let maxOffset = height / 4;

  // Smoothly transition the currentOffsetY towards the target offset based on mouseY
  let targetOffsetY = map(mouseY, 0, height, -maxOffset, maxOffset);
  currentOffsetY = lerp(currentOffsetY, targetOffsetY, 0.1); // Slowly interpolate between current and target

  // Create multiple copies based on the smoothed currentOffsetY
  for (let i = -numCopies; i <= numCopies; i++) {
    let offsetY = currentOffsetY * i / numCopies;
    drawShape(offsetY);
  }
}

function drawShape(offsetY) {
  push();
  translate(0, offsetY);

  // Insert the complex shape definition here
  // Example:
  beginShape();
   beginShape();
  vertex(5.03, 99.84);
  bezierVertex(16.44, 105.37, 29.48, 92.97, 41.8, 95.15);
  bezierVertex(83.47, 105.52, 67.83, 102.35, 106.95, 94.72);
  bezierVertex(120.05, 94.3, 127.05, 101.6, 139.65, 101.74);
  bezierVertex(150.14, 102.23, 162.12, 95.28, 172.82, 94.82);
  bezierVertex(183.41, 94.01, 193.34, 100.01, 203.64, 101.14);
  bezierVertex(217.46, 103.03, 230.1, 92.75, 243.98, 94.3);
  bezierVertex(252.92, 94.93, 261.28, 99.67, 270.4, 100.64);
  bezierVertex(305.82, 98.99, 293.29, 86.26, 336.71, 100.18);
  bezierVertex(372.25, 100.36, 359.18, 85.44, 404.46, 100.05);
  bezierVertex(416.36, 101.84, 426.78, 95.14, 438.65, 93.6);
  bezierVertex(451.24, 91.74, 460.66, 99.04, 472.58, 99.82);
  bezierVertex(483.72, 100.83, 494.57, 94.42, 505.15, 93.19);
  bezierVertex(520.28, 90.84, 534.06, 102.9, 549.14, 99.05);
  bezierVertex(566.14, 94.34, 574.92, 88.53, 593.17, 95.39);
  bezierVertex(610.33, 104.59, 627.07, 93.5, 644.15, 91.49);
  bezierVertex(655.96, 90.8, 666.63, 98.41, 678.4, 98.4);
  bezierVertex(689.25, 99.03, 699.3, 92.44, 709.82, 91.57);
  bezierVertex(721.67, 89.29, 742.06, 103.53, 750.49, 95);
  bezierVertex(754.58, 90.83, 755.72, 76.06, 750.56, 71.23);
  bezierVertex(746.39, 67.59, 740.36, 68.19, 735.28, 66.87);
  bezierVertex(727.75, 65.29, 720.29, 61.69, 712.57, 61.27);
  bezierVertex(699.89, 60.32, 688.21, 69.03, 675.4, 67.93);
  bezierVertex(667.43, 67.58, 659.88, 64.13, 652.24, 62.15);
  bezierVertex(636.35, 57.02, 624.36, 69.45, 607.21, 68.32);
  bezierVertex(571.45, 59.26, 579.13, 60.21, 544.27, 68.63);
  bezierVertex(518.86, 66.57, 514.22, 56.24, 485.97, 67.43);
  bezierVertex(461.44, 73.68, 453.68, 54.57, 426.21, 65.61);
  bezierVertex(420.55, 67.51, 414.98, 69.15, 409.08, 69.15);
  bezierVertex(397.31, 69.53, 386.67, 62.06, 374.91, 62.32);
  bezierVertex(364.52, 62.35, 354.65, 68.8, 344.11, 69.26);
  bezierVertex(332.21, 70.45, 321.06, 62.97, 309.49, 62.55);
  bezierVertex(297.29, 61.84, 286.24, 70.29, 274.14, 69.68);
  bezierVertex(262.4, 69.37, 251.13, 62.53, 239.32, 63.48);
  bezierVertex(226.57, 64.35, 216.81, 72.1, 203.93, 69.98);
  bezierVertex(192.54, 68.26, 181.84, 62.1, 170.15, 63.8);
  bezierVertex(134.83, 74.18, 142.53, 71.16, 108.11, 63.86);
  bezierVertex(96.45, 62.99, 85.82, 70.1, 74.04, 70.94);
  bezierVertex(58.48, 72.17, 46.85, 60.7, 30.68, 65.01);
  bezierVertex(22.41, 67.91, 10.01, 69.53, 4.1, 75.21);
  bezierVertex(-0.02, 80.09, -0.4, 95.95, 5.03, 99.83);
  vertex(5.03, 99.83);
  endShape(CLOSE);

  pop();
}
