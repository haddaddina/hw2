function setup() {
  createCanvas(400, 400);
}

var x = 30;
var changeInX = 4;
var y = 0;
var changeInY = 3

function draw() {
  background(220);
  
  ellipse(x, 200, 40);
  
  x = x + changeInX;
  
  if (x > width) {
    changeInX = -3;
  }
  
  if (x < 0) {
    changeInX = 3;
  }
  fill (0, 40, 300);

  ellipse(y, 300, 40);
  
  y = y + changeInY;
  
  if (y > height) {
    changeInY = -3;
  }
  
  if (y < 0) {
    changeInY = 3;
  }
  
  fill (0, 400, 300);
  
}
