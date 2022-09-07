let step = 40;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	noLoop();

	background(255);
	stroke(0);
	strokeWeight(4);

	for (let x = 0; x < width; x += step) {
		for (let y = 0; y < height; y += step) {
			if (random(1) >= 0.5) {
				line(x, y, x + step, y + step);
			} else {
				line(x + step, y, x, y + step);
			}
		}
	}
}