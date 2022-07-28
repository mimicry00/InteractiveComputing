
/*
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background('#A09CB0');

  noStroke();
  fill(255);
  ellipse(400, 400+60, 200, 160);
  //nose
  fill(0);
  ellipse(400, 400, 80, 60);
  //mouth
  noFill();
  stroke(0);
  strokeWeight(8);
  line(400, 400, 400, 400+80);
  arc(400-40, 400+80, 80, 40, 0, PI);
  arc(400+40, 400+80, 80, 40, 0, PI);
  //eyes
  fill(255);
  ellipse(400-80, 400-60, 80, 40);
  ellipse(400+80, 400-60, 80, 40);
  //pupils
  fill(0);
  ellipse(400-80, 400-60, 10, 40);
  ellipse(400+80, 400-60, 10, 40);
  //whiskers
  noFill();
  stroke(0);
  strokeWeight(2);
  line(400-140, 400+10, 400-40, 400+30);
  line(400-140, 400+70, 400-40, 400+50);
  line(400+140, 400+10, 400+40, 400+30);
  line(400+140, 400+70, 400+40, 400+50);

}
*/

const centerX = 500;
const centerY = 300;
const sizeRate = 1.8;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background('#A09CB0');

  noStroke();
  fill(255);
  ellipse(centerX, centerY+60*sizeRate, 200*sizeRate, 160*sizeRate);
  //nose
  fill(0);
  ellipse(centerX, centerY, 80*sizeRate, 60*sizeRate);
  //mouth
  noFill();
  stroke(0);
  strokeWeight(8*sizeRate);
  line(centerX, centerY, centerX, centerY+80*sizeRate);
  arc(centerX-40*sizeRate, centerY+80*sizeRate, 80*sizeRate, 40*sizeRate, 0, PI);
  arc(centerX+40*sizeRate, centerY+80*sizeRate, 80*sizeRate, 40*sizeRate, 0, PI);
  //eyes
  fill(255);
  ellipse(centerX-80*sizeRate, centerY-60*sizeRate, 80*sizeRate, 40*sizeRate);
  ellipse(centerX+80*sizeRate, centerY-60*sizeRate, 80*sizeRate, 40*sizeRate);
  //pupils
  fill(0);
  ellipse(centerX-80*sizeRate, centerY-60*sizeRate, 10*sizeRate, 40*sizeRate);
  ellipse(centerX+80*sizeRate, centerY-60*sizeRate, 10*sizeRate, 40*sizeRate);
  //whiskers
  noFill();
  stroke(0);
  strokeWeight(2*sizeRate);
  line(centerX-140*sizeRate, centerY+10*sizeRate, centerX-40*sizeRate, centerY+30*sizeRate);
  line(centerX-140*sizeRate, centerY+70*sizeRate, centerX-40*sizeRate, centerY+50*sizeRate);
  line(centerX+140*sizeRate, centerY+10*sizeRate, centerX+40*sizeRate, centerY+30*sizeRate);
  line(centerX+140*sizeRate, centerY+70*sizeRate, centerX+40*sizeRate, centerY+50*sizeRate);

}
