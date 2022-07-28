const interval = 8;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);

  noFill();
  for(let i=0; i<height/interval; i++) {
    let col, w;
    let startX, startY, endX, endY;

    if(i%2 == 0) {
      col = color(255);
      w = 1;
      startX = interval*i;
      startY = height/2 - i*4;
      endX = interval*i;
      endY = height/2 + i*4;
    } else {
      col = color(120, 60, 4);
      w = 4
      startX = interval*i;
      startY = i*4;
      endX = interval*i;
      endY =  height-i*4;
    }

    stroke(col);
    strokeWeight(w);
    line(startX, startY, endX, endY);
  }

}
