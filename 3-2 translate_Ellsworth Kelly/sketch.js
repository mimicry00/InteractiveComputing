// let x = 400;
// let y = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  for(let x=0; x<width; x+=400) {
    for(let y=0; y<height; y+= 300) {
      push();
      translate(x, y);
      rotate(PI/6);
      noStroke();
      fill(245, 10, 40);
      beginShape();
      curveVertex(-200, -200);
      curveVertex(-200, 0);
      curveVertex(-160, 180);
      curveVertex(-40, 250);
      curveVertex(120, 180);
      curveVertex(200, 0);
      curveVertex(200, -200);
      endShape();
      fill(10, 40, 180);
      beginShape();
      curveVertex(-200, -200);
      curveVertex(-200, 0);
      curveVertex(-120, 180);
      curveVertex(20, 250);
      curveVertex(150, 160);
      curveVertex(200, 0);
      curveVertex(200, -200);
      endShape();
      pop();
    }
  }

  // noLoop();
}

// function mousePressed() {
//   x = mouseX;
//   y = mouseY;
// }
