let vines = [];
let num = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  
  for(let i=0; i<vines.length; i++) {
    let c = vines[i];
    if(c.isOut()) {
      vines.splice(i, 1);
    } else {
      c.update();
      c.display();
    }
  }
  
}

function mousePressed() {
  for(let i=0; i<num; i++) {
    vines.push(new Vine(mouseX, mouseY));
  }
}

class Vine {

  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.dx = random(-1, 1);
    this.dy = random(-1, 1);
    this.d = 10;
  }
  
  display() {
    stroke(100, 50, 50);
    fill(255);
    ellipse(this.x, this.y, this.d, this.d);    
  }
  
  update() {
    this.d *= random(.995, .999);
    this.dx += random(-0.5, 0.5);
    this.dy += random(-0.5, 0.5);
    
    this.x += this.dx;
    this.y += this.dy;
  }
  
  isOut() {
    if(this.x<0 || this.x>width || this.y<0 || this.y>height) {
      return true;
    } else {
      return false;
    }
  }
}