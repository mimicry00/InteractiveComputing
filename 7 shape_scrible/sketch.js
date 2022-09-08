const pitch = 180;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255, 5);

  let numdots = floor(random(4, 12));
  let interval = width/numdots;
  let weight = random(0.1, 6);

  noFill();
  stroke(0);
  strokeWeight(weight);

  beginShape();
  curveVertex(0, height/2+random(-pitch, pitch));
  for(let i=0; i<=numdots; i++) {
    curveVertex(i*interval, height/2+random(-pitch, pitch));
  }
  curveVertex(numdots*interval, height/2+random(-pitch, pitch));
  endShape();

}

