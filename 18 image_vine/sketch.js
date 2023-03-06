let img;
let dots = [];

function preload() {
  img = loadImage('monalisa.png');
}

function setup() {
  createCanvas(600, 600);
  background(0);

  // image(img, 0, 0);
}

function draw() {

  let c = img.get(mouseX, mouseY);
  dots.push(new ColorDot(mouseX, mouseY, c));

  for(let dt of dots) {
    if(dt.isdone()) {
      dots.splice(dots.indexOf(dt), 1);
    } else {
      dt.display();
      dt.update();
    }
  }

}


class ColorDot {
	constructor(_x, _y, _c) {
		this.x = _x;
		this.y = _y;
    this.c = _c;
		this.dx = random(-0.2, 0.2);
		this.dy = random(-0.2, 0.2);
		this.d = 10;
    this.count = 0;
    this.life = random(40, 100);
	}

	display() {
    // let c = img.get(this.x, this.y);
		fill(this.c);
		stroke(0);
    strokeWeight(0.25);
		ellipse(this.x, this.y, this.d, this.d);
	}
	
	update() {

		this.dx += random(-0.2, 0.2);
		this.dy += random(-0.2, 0.2);
		this.d *= random(0.96, 0.99);

		this.x += this.dx;
		this.y += this.dy;

    this.count++;
	}

	isdone() {
		if (this.count >= this.life) {
			return true;
		} else {
			return false;
		}
	}
}