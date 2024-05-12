// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(240);


//   let d = dist(mouseX, mouseY, width / 2, height / 2);
//   let maxDist = dist(0, 0, width / 2, height / 2);

//   let norm = map(d, 0, maxDist, 1, 0);


//   drawShape(width / 2, height / 2 - 240, 1); 
//   for (let i = 1; i < 5; i++) {
//     let centerX = width / 2;
//     let centerY = height / 2 + i * 120 - 240;
//     drawShape(centerX, centerY, norm);
//   }
// }

// function drawShape(x, y, scale) {
//   push();
//   translate(x, y);
//   scale(scale);
//   fill(0);

//   beginShape();
//   vertex(192, 1);
//   vertex(337, 0);
//   vertex(431, 83);
//   vertex(345, 160);
//   vertex(198, 160);
//   vertex(281, 82);
//   vertex(192, 1);
//   endShape(CLOSE);

//   beginShape();
//   vertex(187, 1);
//   vertex(275.33, 82.27);
//   vertex(190, 160);
//   vertex(155, 160);
//   vertex(235, 82);
//   vertex(150, 1);
//   vertex(187, 1);
//   endShape(CLOSE);

  

//   pop();
// }


function setup() {
  createCanvas(740, 160);                   
 fill(0);             
  stroke(255);  
}

function draw() {
  background(240);
  
  
   let mouseEffect = mouseX / 20;

//   let angleOffset = map(mouseX, 0, width, -PI, PI);
//   let numShapes = map(mouseX,0,width,0,300);
  

//   for (let i = 0; i < numShapes; i++) {
//     let centerX = 0;
//     let centerY = 0; 
    
    
    
  
//     let angle = PI /100 * i + angleOffset;
    
//     push();
//     translate(centerX, centerY);
//     rotate(angle);
    
 beginShape();
  vertex(192 + sin(frameCount * 0.07 + 1) * mouseEffect, 1);
  vertex(337 + sin(frameCount * 0.07 + 1) * mouseEffect, 0);
  vertex(431 + sin(frameCount * 0.03 + 1) * mouseEffect, 83);
  vertex(345 + sin(frameCount * 0.07 + 1) * mouseEffect, 160);
  vertex(198 + sin(frameCount * 0.07 + 1) * mouseEffect, 160);
  vertex(281 + sin(frameCount * 0.03 + 1) * mouseEffect, 82);
  vertex(192 + sin(frameCount * 0.07 + 1) * mouseEffect, 1);
  endShape(CLOSE);
  
  beginShape();
  vertex(187 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(275.33 + sin(frameCount * 0.07 + 1) * mouseEffect, 82.27);
  vertex(190 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(155 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(235 + sin(frameCount * 0.06 + 1) * mouseEffect, 82);
  vertex(150 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(187 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  endShape(CLOSE);
  
  beginShape();
  vertex(141 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(230.54 + sin(frameCount * 0.07 + 1) * mouseEffect, 82.21);
  vertex(147 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(116 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(200 + sin(frameCount * 0.06 + 1) * mouseEffect, 81);
  vertex(111 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(141 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  endShape(CLOSE);
  
  beginShape();
  vertex(100 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(190.09 + sin(frameCount * 0.07 + 1) * mouseEffect, 82.21);
  vertex(104 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(80 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(164 + sin(frameCount * 0.06 + 1) * mouseEffect, 83);
  vertex(75 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(100 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  endShape(CLOSE);
  
  beginShape();
  vertex(60 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(149.92 + sin(frameCount * 0.07 + 1) * mouseEffect, 82.2);
  vertex(64 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(50 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(133 + sin(frameCount * 0.06 + 1) * mouseEffect, 82);
  vertex(43 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(60 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  endShape(CLOSE);
  
  beginShape();
  vertex(22 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(110.83 + sin(frameCount * 0.07 + 1) * mouseEffect, 83.05);
  vertex(28 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(19 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(102 + sin(frameCount * 0.06 + 1) * mouseEffect, 83);
  vertex(13 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(22 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  endShape(CLOSE);
  
  beginShape();
  vertex(14 + sin(frameCount * 0.06 + 1) * mouseEffect, 26);
  vertex(78.02 + sin(frameCount * 0.07 + 1) * mouseEffect, 82.93);
  vertex(8 + sin(frameCount * 0.06 + 1) * mouseEffect, 147);
  vertex(0 + sin(frameCount * 0.06 + 1) * mouseEffect, 147);
  vertex(72 + sin(frameCount * 0.06 + 1) * mouseEffect, 83);
  vertex(7 + sin(frameCount * 0.06 + 1) * mouseEffect, 26);
  vertex(14 + sin(frameCount * 0.06 + 1) * mouseEffect, 26);
  endShape(CLOSE);
  
  beginShape();
  vertex(625.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(713.71 + sin(frameCount * 0.04 + 1) * mouseEffect, 82.27);
  vertex(628.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(593.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(673.38 + sin(frameCount * 0.04 + 1) * mouseEffect, 82);
  vertex(588.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(625.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  endShape(CLOSE);
  
  beginShape();
  vertex(576.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(668.91 + sin(frameCount * 0.04 + 1) * mouseEffect, 82.21);
  vertex(585.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(551.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(635.38 + sin(frameCount * 0.04 + 1) * mouseEffect, 81);
  vertex(546.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(576.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  endShape(CLOSE);
  
  beginShape();
  vertex(538.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(628.47 + sin(frameCount * 0.04 + 1) * mouseEffect, 82.21);
  vertex(542.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(518.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(602.38 + sin(frameCount * 0.04 + 1) * mouseEffect, 83);
  vertex(513.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(538.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  endShape(CLOSE);
  
  beginShape();
  vertex(498.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(588.29 + sin(frameCount * 0.04 + 1) * mouseEffect, 82.2);
  vertex(502.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(488.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(571.38 + sin(frameCount * 0.04 + 1) * mouseEffect, 82);
  vertex(481.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(498.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  endShape(CLOSE);
  
  beginShape();
  vertex(460.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(549.21 + sin(frameCount * 0.04 + 1) * mouseEffect, 83.05);
  vertex(466.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(457.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 160);
  vertex(540.38 + sin(frameCount * 0.04 + 1) * mouseEffect, 83);
  vertex(451.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  vertex(460.38 + sin(frameCount * 0.06 + 1) * mouseEffect, 1);
  endShape(CLOSE);
  
  beginShape();
  vertex(426 + sin(frameCount * 0.06 + 1) * mouseEffect, 0);
  vertex(514.4 + sin(frameCount * 0.04 + 1) * mouseEffect, 81.93);
  vertex(430 + sin(frameCount * 0.06 + 1) * mouseEffect, 159);
  vertex(426 + sin(frameCount * 0.06 + 1) * mouseEffect, 159);
  vertex(510 + sin(frameCount * 0.04 + 1) * mouseEffect, 82);
  vertex(421+ sin(frameCount * 0.06 + 1) * mouseEffect, 0);
  vertex(426 + sin(frameCount * 0.06 + 1) * mouseEffect, 0);
  endShape(CLOSE);
  
  beginShape();
  vertex(757, 160);
  vertex(640.96, 160);
  vertex(723.96, 82);
  vertex(634.96, 1);
  vertex(754, 1);
  endShape(CLOSE);
    
    pop();
  }
          

  


