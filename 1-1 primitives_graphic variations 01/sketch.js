function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);

  // row 1
  noStroke();
  fill(255, 209, 102);  //yellow
  ellipse(100, 100, 200);
  fill(17, 138, 178);  //blue
  rect(100+100+50, 0+50, 100, 100);
  fill(255, 209, 102);  //yellow
  rect(400, 0, 200, 200);
  fill(255);
  rect(400+50, 50, 100, 100);
  fill(239, 71, 111);  //red
  rect(600, 0, 200, 50);
  rect(600, 100-25, 200, 50);
  rect(600, 200-50, 200, 50);

  //row 2
  stroke(0);
  strokeWeight(1);
  line(0, 200, 200, 400);
  line(200, 200, 0, 400);
  noStroke();
  fill(0);
  rect(200, 200, 200, 200);
  fill(255);
  triangle(400, 200, 400, 400, 200, 400);
  fill(200);
  arc(500, 200, 200, 200, 0, PI, OPEN);
  arc(500, 400, 200, 200, PI, TWO_PI, OPEN);
  fill(255, 209, 102);  //yellow
  triangle(600, 200, 600, 400, 700, 300);
  triangle(800, 200, 800, 400, 700, 300);

}
