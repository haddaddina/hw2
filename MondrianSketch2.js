function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
	
  noStroke();

  let green = color('rgba(0,255,0, 0.25)');
  let red = color(random (0, 450), 15, 70);
  let purple = color('rgba(90%, 50%,70%,0.9)');

  let leftLineX = 90;
  let lowerLineY = 280;
  let rightLineX = 350;
  let upperShortLineY = random (0, 250)
  let lowerShortLineY = 80;

  fill(red);
  rect(0, lowerLineY, leftLineX, height - lowerLineY);

  fill(green);
  rect(leftLineX, 0, width - leftLineX, lowerLineY);

  fill(purple);
  rect(rightLineX, lowerShortLineY, width - rightLineX, height - lowerShortLineY);

  stroke(0);
  strokeWeight(10);
  strokeCap(SQUARE);
  line(leftLineX, 0, leftLineX, height);
  line(0, lowerLineY, width, lowerLineY);
  line(rightLineX, lowerLineY, rightLineX, height);
	line(rightLineX, 75, rightLineX, height);

  strokeWeight(10);
  line(0, upperShortLineY, leftLineX, upperShortLineY);
	
  strokeWeight(10);
  line(rightLineX, lowerShortLineY, width, lowerShortLineY);

	{
  line(mouseY, 0, mouseX, 400);
}

	
}
