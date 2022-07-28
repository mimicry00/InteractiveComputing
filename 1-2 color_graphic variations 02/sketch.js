function setup() {
  createCanvas(800, 800);
}

function draw() {
  colorMode(RGB);
  rectMode(CORNER);
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

  // row 3
  fill(17, 138, 178);
  rect(0, 400, 18, 200);
  rect(18*2, 400, 18, 200);
  rect(18*4, 400, 18, 200);
  rect(18*6, 400, 18, 200);
  rect(18*8, 400, 18, 200);
  rect(18*10, 400, 18, 200);
  noFill();
  stroke(255, 209, 102, 140);
  strokeWeight(24);
  ellipse(100, 500, 120, 120);
  noFill();
  stroke(255, 209, 102);
  strokeWeight(24);
  ellipse(100+200, 500, 120, 120);

  colorMode(HSB);
  noStroke();
  fill(195, 90, 70);  //rgb : (17, 138, 178)
  triangle(400+200, 400, 400+200, 600, 600-200, 500);
  fill(346, 70, 94, 0.8);  //rgb : (239, 71, 111, 180)
  triangle(400, 400, 400, 600, 600, 500);

  colorMode(RGB);
  rectMode(CENTER);
  fill(239, 71, 111);
  rect(600+100, 400+100, 200, 200);
  fill(255, 140);
  ellipse(600+100, 400+100, 100, 100);

  // row 4
  fill(0);
  arc(400+120, 600+100, 240, 180, PI*0.22, PI*(2-0.22), OPEN);
  fill(17, 138, 178);
  arc(800-120, 600+100, 240, 180, PI*(1+0.22), PI*(1-0.22), OPEN);
  fill(200);
  rect(100, 600+100, 200, 200);
  fill(255);
  rect(100, 600+100, 40, 200);
  fill(17, 138, 178, 140);
  triangle(0, 600, 200, 600, 100, 800);
  fill(17, 138, 178);
  ellipse(200+50, 600+50, 80, 80);
  ellipse(200+50+100, 600+50, 80, 80);
  ellipse(200+50, 600+50+100, 80, 80);
  ellipse(200+50+100, 600+50+100, 80, 80);
  fill(255, 209, 102, 160);
  ellipse(200+100, 600+100, 120, 120);

}
