function setup() {
  createCanvas(800, 800);
}

function draw() {
  colorMode(RGB);
  rectMode(CORNER);
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
  rect(0, 200 + 75, 200, 50);
  rect(0, 200 + 75 + 75, 200, 50);

  fill(120);
  circle(200 + 50, 200 + 50, 60);
  circle(200 + 50 + 100, 200 + 50, 60);
  circle(200 + 50, 200 + 50 + 100, 60);
  circle(200 + 50 + 100, 200 + 50 + 100, 60);

  fill(6, 214, 160);  //green
  arc(500, 200, 200, 200, 0, PI, OPEN);
  arc(500, 400, 200, 200, PI, TWO_PI, OPEN);

  fill(239, 71, 111);  //red
  rect(600, 200, 200, 200);
  fill(255);
  rect(600 + 50, 200 + 50, 100, 100);


  // row 3
  noFill();
  stroke(0);
  strokeWeight(14);
  curve(20, 400+20, 20, 400+20, 20+140, 400+20+20, 20+140, 400+20+20+40);
  curve(20, 400+20, 20+140, 400+20+20, 20+140, 400+20+20+40, 20+20, 400+20+20+40+20);
  curve(20+140, 400+20+20, 20+140, 400+20+20+40, 20+20, 400+20+20+40+20, 20+20, 400+20+20+40+20+40);
  curve(20+140, 400+20+20+40, 20+20, 400+20+20+40+20, 20+20, 400+20+20+40+20+40, 20+140+20, 400+20+20+40+20+40+20);
  curve(20+20, 400+20+20+40+20, 20+20, 400+20+20+40+20+40, 20+140+20, 400+20+20+40+20+40+20, 20+140+20, 400+20+20+40+20+40+20);
  
  noStroke();
  fill(239, 71, 111);
  ellipse(20, 400+20, 14);
  ellipse(20+140, 400+20+20, 14);
  ellipse(20+140, 400+20+20+40, 14);
  ellipse(20+20, 400+20+20+40+20, 14);
  ellipse(20+20, 400+20+20+40+20+40, 14);
  ellipse(20+140+20, 400+20+20+40+20+40+20, 14);
  // fill(17, 138, 178);
  // rect(0, 400, 18, 200);
  // rect(18 * 2, 400, 18, 200);
  // rect(18 * 4, 400, 18, 200);
  // rect(18 * 6, 400, 18, 200);
  // rect(18 * 8, 400, 18, 200);
  // rect(18 * 10, 400, 18, 200);
  // noFill();
  // stroke(255, 209, 102, 140);
  // strokeWeight(24);
  // ellipse(100, 500, 120, 120);

  noFill();
  stroke(120);
  strokeWeight(20);
  bezier(200+20, 400+100, 200+20+40, 400, 200+20+160-40, 400+200, 200+20+160, 400+100);
  bezier(200+20, 400+100, 200+20+40, 400+200, 200+20+160-40, 400, 200+20+160, 400+100);

  noStroke();
  fill(255, 209, 102);
  ellipse(200+20, 400+100, 20);
  ellipse(200+20+160, 400+100, 20);
  // rectMode(CENTER);
  // rect(200+20+40, 400, 20, 20);
  // rect(200+20+160-40, 400+200, 20, 20);


  rectMode(CORNER)
  colorMode(HSB);
  noStroke();
  fill(195, 90, 70, 0.8);  //rgb : (17, 138, 178)
  triangle(400 + 200, 400, 400 + 200, 600, 600 - 200, 500);
  fill(346, 70, 94, 0.8);  //rgb : (239, 71, 111, 180)
  triangle(400, 400, 400, 600, 600, 500);

  colorMode(RGB);
  noStroke();
  fill(200);
  rect(600, 400, 50, 200);
  rect(600 + 75, 400, 50, 200);
  rect(600 + 75 + 75, 400, 50, 200);
  fill(6, 214, 160, 100);
  ellipse(600+100, 400+100, 160);


  // row 4
  colorMode(HSB);
  fill(42, 30, 100);
  ellipse(100, 600+100, 200);
  fill(42, 45, 100);
  ellipse(100, 600+100, 140);
  fill(42, 60, 100);
  ellipse(100, 600+100, 80);

  fill(0, 138, 178);
  rect(200, 600, 200/7, 200);
  fill(30, 138, 178);
  rect(200+(200/7), 600, 200/7, 200);
  fill(60, 138, 178);
  rect(200+(200/7)*2, 600, 200/7, 200);
  fill(120, 138, 178);
  rect(200+(200/7)*3, 600, 200/7, 200);
  fill(220, 138, 178);
  rect(200+(200/7)*4, 600, 200/7, 200);
  fill(240, 138, 178);
  rect(200+(200/7)*5, 600, 200/7, 200);
  fill(280, 138, 178);
  rect(200+(200/7)*6, 600, 200/7, 200);

  rectMode(CENTER);
  fill(0);
  triangle(600, 600, 600, 800, 400, 800);
  fill(195, 90, 70, 0.4);
  rect(400+100, 600+100, 100, 100);

  fill(80);
  circle(600 + 50, 600 + 50, 60);
  circle(600 + 50 + 100, 600 + 50, 60);
  circle(600 + 50, 600 + 50 + 100, 60);
  circle(600 + 50 + 100, 600 + 50 + 100, 60);
  noFill();
  stroke(42, 60, 100, 0.6);
  strokeWeight(40);
  circle(600+100, 600+100, 120);
}