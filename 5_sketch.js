let originalFillColors = [];
let shapeScales = new Array(17).fill(1);
let currentFillColors = []; // Store current fill colors for interpolation

function setup() {
  createCanvas(740, 160);
  scaleFactor = 0.29; 
  noLoop();
  strokeCap(PROJECT);
  strokeJoin(MITER);
  strokeWeight(1);

  // Initialize colors to vibrant random colors and set current fill colors to black
  for (let i = 0; i < 17; i++) {
    originalFillColors.push(color(random(100, 255), random(100, 255), random(100, 255)));
    currentFillColors.push(color(0)); // Start with black
  }
}

function draw() {
  background(255);
  scale(scaleFactor);
  drawShapes();
}

function drawShapes() {
  for (let i = 0; i < 17; i++) {
    let isHovered = mouseIsOverShape(i);

    // Adjust the scale smoothly using `lerp`
    shapeScales[i] = lerp(shapeScales[i], isHovered ? 1.2 : 1, 0.1);

    // Interpolate color towards vibrant color when hovered, or black when not
    currentFillColors[i] = lerpColor(currentFillColors[i], isHovered ? originalFillColors[i] : color(0), 0.1);

    // Set the fill color
    fill(currentFillColors[i]);

    // Push matrix to isolate each shape's transformation
    push();
    scale(shapeScales[i]); // Scale up on hover
    beginShape();
    drawShape(i);
    endShape(CLOSE);
    pop();
  }

}

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
      bezierVertex(1850, 0, 1892, 102, 1890, 240);
      bezierVertex(1889, 379, 1853, 487, 1853, 487);
      vertex(1804, 487);
      break;
    case 13:
      vertex(1921, 487);
      bezierVertex(1921, 487, 1963, 425, 1963, 243);
      bezierVertex(1963, 62, 1917, 0, 1917, 0);
      vertex(1950, 0);
      bezierVertex(1950, 0, 1992, 102, 1991, 240);
      bezierVertex(1990, 379, 1954, 487, 1954, 487);
      vertex(1921, 487);
      break;
    case 14:
      vertex(2038, 487);
      bezierVertex(2038, 487, 2075, 422, 2075, 240);
      bezierVertex(2075, 59, 2030, 0, 2030, 0);
      vertex(2049, 0);
      bezierVertex(2049, 0, 2095, 105, 2094, 243);
      bezierVertex(2093, 382, 2061, 487, 2061, 487);
      vertex(2038, 487);
      break;
    case 15:
      vertex(2161, 487);
      bezierVertex(2161, 487, 2187, 425, 2187, 243);
      bezierVertex(2187, 62, 2151, 0, 2151, 0);
      vertex(2164, 0);
      bezierVertex(2164, 0, 2198, 105, 2196, 243);
      bezierVertex(2195, 382, 2171, 487, 2171, 487);
      vertex(2161, 487);
      break;
    case 16:
      vertex(978, 487);
      vertex(1223, 485);
      bezierVertex(1223, 485, 1380, 412, 1380, 243);
      bezierVertex(1380, 75, 1226, 0, 1219, 0);
      bezierVertex(1213, 0, 977, 0, 977, 0);
      bezierVertex(977, 0, 811, 67, 817, 243);
      bezierVertex(823, 420, 961, 477, 978, 487);
      break;
    default:
      break;
  }
}

function mouseIsOverShape(index) {
  const scaledMouseX = mouseX / scaleFactor;
  const scaledMouseY = mouseY / scaleFactor;
  let hoverDistance = 100; // Increase this value to expand the hover effect area

  switch (index) {
    case 0:
      return dist(scaledMouseX, scaledMouseY, 958, 243) < hoverDistance;
    case 1:
      return dist(scaledMouseX, scaledMouseY, 791, 244) < hoverDistance;
    case 2:
      return dist(scaledMouseX, scaledMouseY, 645, 244) < hoverDistance;
    case 3:
      return dist(scaledMouseX, scaledMouseY, 524, 244) < hoverDistance;
    case 4:
      return dist(scaledMouseX, scaledMouseY, 393, 244) < hoverDistance;
    case 5:
      return dist(scaledMouseX, scaledMouseY, 276, 244) < hoverDistance;
    case 6:
      return dist(scaledMouseX, scaledMouseY, 159, 244) < hoverDistance;
    case 7:
      return dist(scaledMouseX, scaledMouseY, 36, 244) < hoverDistance;
    case 8:
      return dist(scaledMouseX, scaledMouseY, 1239, 243) < hoverDistance;
    case 9:
      return dist(scaledMouseX, scaledMouseY, 1406, 244) < hoverDistance;
    case 10:
      return dist(scaledMouseX, scaledMouseY, 1551, 244) < hoverDistance;
    case 11:
      return dist(scaledMouseX, scaledMouseY, 1673, 244) < hoverDistance;
    case 12:
      return dist(scaledMouseX, scaledMouseY, 1804, 244) < hoverDistance;
    case 13:
      return dist(scaledMouseX, scaledMouseY, 1921, 244) < hoverDistance;
    case 14:
      return dist(scaledMouseX, scaledMouseY, 2038, 244) < hoverDistance;
    case 15:
      return dist(scaledMouseX, scaledMouseY, 2161, 244) < hoverDistance;
    case 16:
      return dist(scaledMouseX, scaledMouseY, 978, 243) < hoverDistance;
    default:
      return false;
  }
}


function mouseMoved() {
  redraw();
}