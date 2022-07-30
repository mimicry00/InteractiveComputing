function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  blendMode(BLEND);
  background(255);
  blendMode(MULTIPLY);

  // let startx =0;
  // let starty =0;
  let period = 300;
  let pitch = 40;
  let bz = period/6;

  noFill();
  strokeWeight(24);

  let count = 0;
  for(let y =0; y<height+pitch; y+=28) {
    let startx, starty;
    if(count%2==0) {
      startx = -period/2;
      starty = y+pitch;
      stroke(255, 20, 0);
    } else {
      startx = 0;
      starty = y+pitch;
      stroke(0, 180, 255);
    }
    beginShape();
    vertex(startx, starty);
    for(let x =startx; x<width; x+=period) {
      bezierVertex(x+bz, y+pitch, x+period/2-bz, y-pitch, x+period/2, y-pitch);
      bezierVertex(x+period/2+bz, y-pitch, x+period-bz, y+pitch, x+period, y+pitch);
    }
    endShape();
    count ++;
  }
}
