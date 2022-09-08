function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);

  // row 1
  noStroke();
  fill(239, 71, 111);  //red
  ellipse(100, 100, 200);

  noFill();
  stroke(17, 138, 178);  //blue
  strokeWeight(36);
  rect(250, 50, 100, 100);

  noStroke();
  fill(255, 209, 102);  //yellow
  triangle(400, 0, 500, 100, 400, 200);
  triangle(600, 0, 500, 100, 600, 200);
  
  noFill();
  stroke(0);
  strokeWeight(1);
  line(600, 0, 800, 200);
  line(800, 0, 600, 200);

  //row 2
  noStroke();
  fill(0);
  rect(0, 200, 200, 50);
  rect(0, 200+75, 200, 50);
  rect(0, 200+75+75, 200, 50);

  fill(120);
  circle(200+50, 200+50, 60);
  circle(200+50+100, 200+50, 60);
  circle(200+50, 200+50+100, 60);
  circle(200+50+100, 200+50+100, 60);


  fill(6, 214, 160);  //green
  arc(500, 200, 200, 200, 0, PI, OPEN);
  arc(500, 400, 200, 200, PI, TWO_PI, OPEN);

  fill(239, 71, 111);  //red
  rect(600, 200, 200, 200);
  fill(255);
  rect(600+50, 200+50, 100, 100);


  // noStroke();
  // fill(0);
  // rect(200, 200, 200, 200);
  // fill(255);
  // triangle(400, 200, 400, 400, 200, 400);

}
