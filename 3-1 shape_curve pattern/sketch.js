function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);

  let startx =0;
  let starty =0;
  let period = 100;
  let pitch = 20;
  let bz = period/4;

  noFill();
  stroke(0);
  for(let y =0; y<height; y+=pitch) {
    beginShape();
    vertex(0, y+pitch);
    for(let x =0; x<width; x+=period) {
      bezierVertex(x+bz, y+pitch, x+period/2-bz, y-pitch, x+period/2, y-pitch);
      bezierVertex(x+period/2+bz, y-pitch, x+period-bz, y+pitch, x+period, y+pitch);
    }
    endShape();
  }
}
