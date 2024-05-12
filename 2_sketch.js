function setup() {
  createCanvas(740, 160);
 fill(0);             
  stroke(255);  
}

function draw() {
  background(255);
  const rectangles = [
    { x: 0, width: 17.13 },
    { x: 23.72, width: 18.45 },
    { x: 46.13, width: 39.54 },
    { x: 89.62, width: 18.45 },
    { x: 114.66, width: 17.13 },
    { x: 142.34, width: 10.54 },
    { x: 167.38, width: 7.91 },
    { x: 195.06, width: 5.27 },
    { x: 235.91, width: 5.27 },
    { x: 260.95, width: 7.91 },
    { x: 283.36, width: 10.54 },
    { x: 304.44, width: 17.13 },
    { x: 328.17, width: 18.45 },
    { x: 350.57, width: 39.54 },
    { x: 394.06, width: 18.45 },
    { x: 419.1, width: 17.13 },
    { x: 446.78, width: 10.54 },
    { x: 471.82, width: 7.91 },
    { x: 499.5, width: 5.27 },
    { x: 541.67, width: 5.27 },
    { x: 566.71, width: 7.91 },
    { x: 589.12, width: 10.54 },
    { x: 610.21, width: 17.13 },
    { x: 633.93, width: 18.45 },
    { x: 656.33, width: 39.54 },
    { x: 699.83, width: 18.45 },
    { x: 724.87, width: 17.13 }
  ];

  rectangles.forEach(function(rectangle) {
    rect(rectangle.x, 0, rectangle.width, 159); 
  });
  rectangles.forEach(rect => {
    const height = mouseY / 2; 
    fill(128 + 127 * sin(frameCount * 0.01 + rect.x * 0.1), 128 + 127 * cos(frameCount * 0.01 + rect.x * 0.1), 255);
    rect(rect.x, 160 - height, rect.width, height); 
  });
}



function setup() {
  createCanvas(742, 160);  
  noStroke();              
  fill(0);                 
}

function draw() {
  background(255);         

  const rectangles = [
    { x: 0, width: 17.13 },
    { x: 23.72, width: 18.45 },
    { x: 46.13, width: 39.54 },
    { x: 89.62, width: 18.45 },
    { x: 114.66, width: 17.13 },
    { x: 142.34, width: 10.54 },
    { x: 167.38, width: 7.91 },
    { x: 195.06, width: 5.27 },
    { x: 235.91, width: 5.27 },
    { x: 260.95, width: 7.91 },
    { x: 283.36, width: 10.54 },
    { x: 304.44, width: 17.13 },
    { x: 328.17, width: 18.45 },
    { x: 350.57, width: 39.54 },
    { x: 394.06, width: 18.45 },
    { x: 419.1, width: 17.13 },
    { x: 446.78, width: 10.54 },
    { x: 471.82, width: 7.91 },
    { x: 499.5, width: 5.27 },
    { x: 541.67, width: 5.27 },
    { x: 566.71, width: 7.91 },
    { x: 589.12, width: 10.54 },
    { x: 610.21, width: 17.13 },
    { x: 633.93, width: 18.45 },
    { x: 656.33, width: 39.54 },
    { x: 699.83, width: 18.45 },
    { x: 724.87, width: 17.13 }
  ];

  rectangles.forEach(function(rectangle) {
    rect(rectangle.x, 0, rectangle.width, 159); 
  });
}

function setup() {
  createCanvas(742, 160);
  noStroke();
}

function draw() {
  background(255);
  let rectangles = [
    { x: 0, width: 17.13 },
    { x: 23.72, width: 18.45 },
    { x: 46.13, width: 39.54 },
    { x: 89.62, width: 18.45 },
    { x: 114.66, width: 17.13 },
    { x: 142.34, width: 10.54 },
    { x: 167.38, width: 7.91 },
    { x: 195.06, width: 5.27 },
    { x: 235.91, width: 5.27 },
    { x: 260.95, width: 7.91 },
    { x: 283.36, width: 10.54 },
    { x: 304.44, width: 17.13 },
    { x: 328.17, width: 18.45 },
    { x: 350.57, width: 39.54 },
    { x: 394.06, width: 18.45 },
    { x: 419.1, width: 17.13 },
    { x: 446.78, width: 10.54 },
    { x: 471.82, width: 7.91 },
    { x: 499.5, width: 5.27 },
    { x: 541.67, width: 5.27 },
    { x: 566.71, width: 7.91 },
    { x: 589.12, width: 10.54 },
    { x: 610.21, width: 17.13 },
    { x: 633.93, width: 18.45 },
    { x: 656.33, width: 39.54 },
    { x: 699.83, width: 18.45 },
    { x: 724.87, width: 17.13 }
  ];

  rectangles.forEach(function(rectangle, index) {
    let heightFactor = sin(frameCount * 0.05 + rectangle.x * 0.02) * 50 + mouseY;
    fill(128 + 127 * sin(rectangle.x * 0.05 + mouseY * 0.001), 128 + 127 * cos(rectangle.x * 0.05 + mouseY * 0.001), 255);
    rect(rectangle.x, 160 - heightFactor, rectangle.width, heightFactor);
  });
}

function setup() {
  createCanvas(742, 160);
  noStroke();
}

function draw() {
  background(255);
  let rectangles = [
    { x: 0, width: 17.13 },
    { x: 23.72, width: 18.45 },
    { x: 46.13, width: 39.54 },
    { x: 89.62, width: 18.45 },
    { x: 114.66, width: 17.13 },
    { x: 142.34, width: 10.54 },
    { x: 167.38, width: 7.91 },
    { x: 195.06, width: 5.27 },
    { x: 235.91, width: 5.27 },
    { x: 260.95, width: 7.91 },
    { x: 283.36, width: 10.54 },
    { x: 304.44, width: 17.13 },
    { x: 328.17, width: 18.45 },
    { x: 350.57, width: 39.54 },
    { x: 394.06, width: 18.45 },
    { x: 419.1, width: 17.13 },
    { x: 446.78, width: 10.54 },
    { x: 471.82, width: 7.91 },
    { x: 499.5, width: 5.27 },
    { x: 541.67, width: 5.27 },
    { x: 566.71, width: 7.91 },
    { x: 589.12, width: 10.54 },
    { x: 610.21, width: 17.13 },
    { x: 633.93, width: 18.45 },
    { x: 656.33, width: 39.54 },
    { x: 699.83, width: 18.45 },
    { x: 724.87, width: 17.13 }
  ];

  fill(0);
  rectangles.forEach(function(rectangle) {
    let heightFactor = sin((rectangle.x - mouseX) * 0.05) * 50 + mouseY;
    rect(rectangle.x, 160 - heightFactor, rectangle.width, heightFactor);
  });
}
