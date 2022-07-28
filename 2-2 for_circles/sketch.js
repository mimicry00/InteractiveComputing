function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);

  noFill();
  stroke(250, 120, 10);
  for(let i=0; i<60; i++) {
    strokeWeight(i*0.2);
    ellipse(400, 400, 100 + i*20);
  }
}
