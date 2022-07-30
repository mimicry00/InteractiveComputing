let step = 40;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	stroke(0);
	strokeWeight(4);

	for (let x = 0; x < width; x += step) {
	 	for (let y = 0; y < height; y += step) {
	 		drawDiagonal(x, y, step, step);
	 	}
  }
}

function draw() {


}

function drawDiagonal(x, y, w, h) {
	if (random(1) >= 0.5) {
		line(x, y, x + w, y + h);
	} else {
		line(x + w, y, x, y + h);
	}
}