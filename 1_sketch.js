function setup() {
  createCanvas(740, 160);  
 fill(0);             
  stroke(255);              
}

function draw() {
  background(255);         

  
  let mouseEffect = mouseY / 20;

  rect(0, 0, 741, 45.66 + sin(frameCount * 0.05 + 1) * mouseEffect);            
  rect(0, 49.57, 741, 23.48 + sin(frameCount * 0.05 + 2) * mouseEffect);        
  rect(0, 76.97, 741, 15.65 + sin(frameCount * 0.05 + 3) * mouseEffect);        
  rect(0, 101.76, 741, 11.74 + sin(frameCount * 0.05 + 4) * mouseEffect);        
  rect(0, 130.46, 741, 6.52 + sin(frameCount * 0.05 + 5) * mouseEffect);        
  rect(0, 153.94, 741, 5.22 + sin(frameCount * 0.05 + 6) * mouseEffect);      
}
