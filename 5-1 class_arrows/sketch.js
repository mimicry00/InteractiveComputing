let triangles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

  for(let i=0; i<width; i+=20) {
    for(let j=0; j<height; j+=20) {
      triangles.push(new Triangle(i+10, j+10));
    }
  }
}

function draw() {
  background(0);
  noStroke();

  for(let tri of triangles) {
    tri.update();
    tri.show();
  }

}

class Triangle {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.w = 20;
    this.hue = 0;
    this.rad = 0;
  }

  show() {
    fill(this.hue, 100, 100);
    
    push();
    translate(this.x, this.y);
    rotate(this.rad);
    beginShape();
    vertex(this.w/2, 0);
    vertex(-this.w/2, this.w/4);
    vertex(-this.w/2, -this.w/4);
    endShape();
    pop();   
  }
  
  update() {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    let maxdistance = dist(0, 0, width, height);
    this.w = map(distance, 0, maxdistance, 20, 0);    
    this.hue = map(distance, 0, maxdistance, 0, 360);

    this.rad = atan2(mouseY-this.y, mouseX-this.x);
  }
}
