let capture;
let prevFrame;
let particles = [];

function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.size(640, 480);

  prevFrame = capture.get(0, 0, 640, 480);

  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 640, 480);
  // image(prevFrame, 0, 0,  640, 480);

  capture.loadPixels();
  prevFrame.loadPixels();

  for (let x = 0; x < capture.width; x += 10) {
    for (let y = 0; y < capture.height; y += 10) {
      let loc = (x + y * capture.width) * 4;
      let r = capture.pixels[loc];
      let g = capture.pixels[loc + 1];
      let b = capture.pixels[loc + 2];
      let pr = prevFrame.pixels[loc];
      let pg = prevFrame.pixels[loc + 1];
      let pb = prevFrame.pixels[loc + 2];

      let d = dist(r, g, b, pr, pg, pb);

      if (d > 80) {
        particles.push(new Particle(x, y, color(r, g, b)));
      }
    }
  }

  updatePixels();

  prevFrame = capture.get(0, 0, 640, 480);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];

    p.update();
    p.display();
    if (p.isDone()) particles.splice(i, 1);
  }
}


class Particle {
  constructor(_x, _y, _c) {
    this.x = _x;
    this.y = _y;
    this.vx = random(-0.5, 0.5);
    this.vy = random(-0.5, 0.5);
    this.c = _c;
    this.alpha = 255;
  }

  display() {
    fill(this.c, this.alpha);
    noStroke();
    ellipse(this.x, this.y, 4, 4);
  }

  update() {
    this.alpha -= 4;
    this.vx += random(-0.1, 0.1);
    this.vy += random(-0.1, 0.1);
    this.x += this.vx;
    this.y += this.vy;
  }

  isDone() {
    if (this.alpha < 0) return true;
    else return false;
  }
}