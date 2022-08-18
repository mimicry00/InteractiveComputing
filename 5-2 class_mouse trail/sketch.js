let circles = [];
let mx, my;
let sp = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
	
	mx = mouseX;
	my = mouseY;
}

function draw() {
  background(0);
  noStroke();
	
	mx += sp * (mouseX - mx);
  my += sp * (mouseY - my);

  circles.push(new Circle(mx, my));

  for (let i=0; i<circles.length; i++) {
    circles[i].display();
    if (circles[i].isDone()) circles.splice(i, 1);
  }
}

class Circle {
	constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.s = 80;
    this.hue = 0;
  }
 
  display() {
    this.col = color(this.hue, 100, 100);
    fill(this.col);
    ellipse(this.x, this.y, this.s);
    this.s -= 2;
    this.hue += 1;
  }
 
  isDone() {
    if(this.hue > 40) return true;
    else return false;
  }
}