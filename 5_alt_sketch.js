let scaleFactor = 0.2;

function setup() {
  createCanvas(1600, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0); // Clear the canvas with a black background

  // Oscillating movement and color effects for all 17 shapes
  for (let i = 0; i < 17; i++) {
    push(); // Save the current state of transformations

    // Map mouse position to influence the movement
    let mouseFactorX = map(mouseX, 0, width, -1, 1);
    let mouseFactorY = map(mouseY, 0, height, -1, 1);

    let t = map(sin(frameCount + i * 20), -1, 1, 0, 1); // Calculate t based on a sine wave
    let alpha = lerp(0, 255, t); // Smoothly transition alpha value

    // Smoothly transition stroke and fill colors
    let r = lerpColor(color(255, 0, 0, alpha), color(0, 255, 255, alpha), t);
    stroke(r);
    fill(r);

    // Calculate oscillating movement based on mouse position
    let oscillateX = sin(frameCount * 0.2 + i * 20 + mouseFactorX * PI) * 50;
    let oscillateY = cos(frameCount * 0.2 + i * 20 + mouseFactorY * PI) * 50;

    // Translate and scale each shape based on its index
    translate(-350 * scaleFactor + oscillateX, -400 * scaleFactor + oscillateY);
    scale(scaleFactor);

    beginShape();
    drawShape(i); // Draw the specific shape based on index
    endShape(CLOSE);

    pop(); // Restore the original state of transformations
  }
}

// Draw 17 shapes using Bezier curves and vertices
function drawShape(index) {
  switch (index) {
    case 0:
      vertex(958, 487);
      bezierVertex(958, 487, 806, 425, 806, 243);
      bezierVertex(806, 62, 958, 0, 958, 0);
      vertex(826, 0);
      bezierVertex(826, 0, 719, 100, 721, 239);
      bezierVertex(722, 377, 816, 487, 816, 487);
      vertex(958, 487);
      break;
    case 1:
      vertex(791, 487);
      bezierVertex(794, 482, 696, 419, 695, 244);
      bezierVertex(695, 61, 793, 0, 791, 0);
      vertex(675, 0);
      bezierVertex(675, 0, 604, 101, 605, 240);
      bezierVertex(607, 379, 678, 487, 678, 487);
      vertex(791, 487);
      break;
    case 2:
      vertex(645, 487);
      bezierVertex(645, 487, 576, 425, 576, 243);
      bezierVertex(576, 62, 645, 0, 645, 0);
      vertex(563, 0);
      bezierVertex(563, 0, 499, 105, 500, 243);
      bezierVertex(502, 382, 560, 487, 560, 487);
      vertex(645, 487);
      break;
    case 3:
      vertex(524, 487);
      bezierVertex(524, 487, 464, 422, 464, 240);
      bezierVertex(464, 59, 527, 0, 527, 0);
      vertex(462, 0);
      bezierVertex(462, 0, 410, 105, 411, 243);
      bezierVertex(413, 382, 462, 487, 462, 487);
      vertex(524, 487);
      break;
    case 4:
      vertex(393, 487);
      bezierVertex(393, 487, 349, 422, 349, 240);
      bezierVertex(349, 59, 398, 0, 398, 0);
      vertex(347, 0);
      bezierVertex(347, 0, 305, 102, 306, 240);
      bezierVertex(307, 379, 344, 487, 344, 487);
      vertex(393, 487);
      break;
    case 5:
      vertex(276, 487);
      bezierVertex(276, 487, 234, 425, 234, 243);
      bezierVertex(234, 62, 280, 0, 280, 0);
      vertex(246, 0);
      bezierVertex(246, 0, 204, 102, 205, 240);
      bezierVertex(207, 379, 243, 487, 243, 487);
      vertex(276, 487);
      break;
    case 6:
      vertex(159, 487);
      bezierVertex(158, 487, 122, 422, 122, 240);
      bezierVertex(122, 59, 166, 0, 166, 0);
      vertex(147, 0);
      bezierVertex(147, 0, 101, 105, 103, 243);
      bezierVertex(96, 243, 120, 487, 135, 487);
      vertex(158, 487);
      break;
    case 7:
      vertex(36, 487);
      bezierVertex(36, 487, 10, 425, 10, 243);
      bezierVertex(10, 62, 46, 0, 46, 0);
      vertex(33, 0);
      bezierVertex(33, 0, -1, 105, 0, 243);
      bezierVertex(1, 382, 26, 487, 26, 487);
      vertex(36, 487);
      break;
    case 8:
      vertex(1239, 487);
      bezierVertex(1239, 487, 1390, 425, 1390, 243);
      bezierVertex(1390, 62, 1239, 0, 1239, 0);
      vertex(1371, 0);
      bezierVertex(1371, 0, 1477, 100, 1476, 239);
      bezierVertex(1495, 350, 1385, 487, 1385, 487);
      vertex(1239, 487);
      break;
    case 9:
      vertex(1406, 487);
      bezierVertex(1402, 482, 1500, 418, 1501, 244);
      bezierVertex(1502, 61, 1404, 0, 1406, 0);
      vertex(1522, 0);
      bezierVertex(1522, 0, 1593, 101, 1591, 240);
      bezierVertex(1590, 379, 1519, 487, 1519, 487);
      vertex(1406, 487);
      break;
    case 10:
      vertex(1551, 489);
      bezierVertex(1551, 487, 1621, 425, 1621, 243);
      bezierVertex(1621, 62, 1551, 0, 1551, 0);
      vertex(1634, 0);
      bezierVertex(1634, 0, 1697, 105, 1696, 253);
      bezierVertex(1700, 259, 1677, 487, 1637, 487);
      vertex(1551, 487);
      break;
    case 11:
      vertex(1673, 487);
      bezierVertex(1673, 487, 1732, 422, 1732, 240);
      bezierVertex(1732, 59, 1670, 0, 1670, 0);
      vertex(1734, 0);
      bezierVertex(1734, 0, 1786, 105, 1785, 243);
      bezierVertex(1788, 253, 1775, 487, 1775, 487);
      vertex(1673, 487);
      break;
    case 12:
      vertex(1804, 487);
      bezierVertex(1804, 487, 1848, 422, 1848, 240);
      bezierVertex(1848, 59, 1798, 0, 1798, 0);
      vertex(1850, 0);
      bezierVertex(1850, 0, 1892, 102, 1890, 243);
      bezierVertex(1888, 379, 1853, 487, 1853, 487);
      vertex(1804, 487);
      break;
    case 13:
      vertex(1935, 487);
      bezierVertex(1935, 487, 1976, 425, 1976, 243);
      bezierVertex(1976, 62, 1935, 0, 1935, 0);
      vertex(1995, 0);
      bezierVertex(1995, 0, 2048, 102, 2047, 243);
      bezierVertex(2049, 379, 1987, 487, 1987, 487);
      vertex(1935, 487);
      break;
    case 14:
      vertex(2076, 487);
      bezierVertex(2076, 487, 2113, 422, 2113, 240);
      bezierVertex(2113, 59, 2078, 0, 2078, 0);
      vertex(2105, 0);
      bezierVertex(2105, 0, 2160, 100, 2155, 243);
      bezierVertex(2157, 379, 2134, 487, 2134, 487);
      vertex(2076, 487);
      break;
    case 15:
      vertex(2190, 487);
      bezierVertex(2190, 487, 2230, 425, 2230, 243);
      bezierVertex(2230, 62, 2190, 0, 2190, 0);
      vertex(2254, 0);
      bezierVertex(2254, 0, 2310, 105, 2304, 243);
      bezierVertex(2308, 250, 2278, 487, 2278, 487);
      vertex(2190, 487);
      break;
    case 16:
      vertex(2278, 487);
      bezierVertex(2278, 487, 2345, 425, 2345, 243);
      bezierVertex(2345, 62, 2278, 0, 2278, 0);
      vertex(2385, 0);
      bezierVertex(2385, 0, 2450, 100, 2450, 240);
      bezierVertex(2451, 350, 2386, 487, 2386, 487);
      vertex(2278, 487);
      break;

    default:
      vertex(0, 0);
      vertex(100, 0);
      vertex(100, 100);
      vertex(0, 100);
      break;
  }
}
