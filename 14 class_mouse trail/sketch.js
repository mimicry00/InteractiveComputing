let circles = [];
let mx, my;
let speed = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
	
	mx = mouseX;
	my = mouseY;
}

function draw() {
  background(0);
	
	mx += speed * (mouseX - mx);
  my += speed * (mouseY - my);
  circles.push(new CircleTrace(mx, my));

  // circles.push(new Circle(mouseX, mouseY));

  for (let i=0; i<circles.length; i++) {
    circles[i].show();
    circles[i].update();
    if (circles[i].isDone()) circles.splice(i, 1);
  }
}

class CircleTrace {
	constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.d = 80;
    this.hue = 0;
  }
 
  show() {
    noStroke();
    fill(this.hue, 100, 100);
    ellipse(this.x, this.y, this.d);
  }
  
  update() {
    this.d -= 2;
    this.hue += 1;
  }
 
  isDone() {
    if(this.d <= 0) return true;
    else return false;
  }
}