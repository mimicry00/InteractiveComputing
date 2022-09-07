

const d = 20;
const gap = 8;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  blendMode(BLEND);
  background(255);
  blendMode(MULTIPLY);
  noStroke();

  let numh = width/(2*d);
  let numv = height/(2*d);

  for(let n=0; n<3; n++) {
    for(let j=0; j<numv; j++) {
      for(let i=0; i<numh; i++) {
        let dx, dy;
        if(n==0) {
          fill(255, 255, 0);  //'#ffff00'
          dx = 0;
          dy = 0;
        } else if (n==1) {
          fill(255, 0, 255);  //'#ff00ff'
          dx = map(i, 0, numh, -gap, gap); //i*0.4;
          dy = 0;
        } else {
          fill(0, 255, 255);  //'#00fffd'
          dx = 0;
          dy = map(j, 0, numv, -gap, gap); //j*0.4;
        }
        ellipse(i*2*d+d + dx, j*2*d+d + dy, d);
      }
    }
  }

}
