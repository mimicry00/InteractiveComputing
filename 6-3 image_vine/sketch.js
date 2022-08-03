let img;
let dots = [];

function preload() {
  img = loadImage('monalisa.png');
}

function setup() {
  createCanvas(600, 600);
  background(0);

  // for(let x=0; x<width; x+=10) {
  //   for(let y=0; y<height; y+=10) {
  //     let c = img.get(x, y);

  //     noFill();
  //     stroke(c);
  //     strokeWeight(2);
  //     line(x, y, x+10, y+10);
  //   }
  // }
}

function draw() {

  dots.push(new Vine(mouseX, mouseY));

  for(let dot of dots) {
    if(dot.isdone()) {
      dots.splice(dots.indexOf(dot), 1);
    } else {
      dot.display();
      dot.update();
    }
  }

}


class Vine {
	constructor(_x, _y) {
		this.x = _x;
		this.y = _y;
		this.dx = random(-0.2, 0.2);
		this.dy = random(-0.2, 0.2);
		this.d = 10;
    this.count = 0;
    this.life = random(40, 100);
	}

	display() {
    let c = img.get(this.x, this.y);
		fill(c);
		stroke(0);
    strokeWeight(0.5);
		ellipse(this.x, this.y, this.d, this.d);
	}
	
	update() {

		this.dx += random(-0.2, 0.2);
		this.dy += random(-0.2, 0.2);
		this.d *= random(0.99, 0.995);

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