//#5f0f40, #9a031e, #fb8b24, #e36414, #0f4c5c

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  
  drawRipple(700, 120, 8, 20, color('#0f4c5c'));
  drawRipple(400, 200, 12, 30, color('#5f0f40'));
  drawRipple(500, 400, 8, 60, color('#9a031e'));
  drawRipple(100, 800, 10, 40, color('#9a031e'));
  drawRipple(700, 700, 16, 80, color('#fb8b24'));
}

function draw() {

}

function mousePressed() {
  let steps = floor(random(6, 16));
  let interval = random(20, 80);
  let col = color(random(255), random(255), random(255));
  drawRipple(mouseX, mouseY, steps, interval, col);
}

function drawRipple(x, y, steps, interval, col) {
  for(let i=steps; i>=0; i--) {
    col.setAlpha(map(i, 0, 10, 255, 60));
    fill(col);
    stroke(col);
    strokeWeight(2);
    ellipse(x, y, interval*i);
  }
}
