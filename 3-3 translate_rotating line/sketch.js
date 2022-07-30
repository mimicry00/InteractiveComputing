let rad = 0;
let hue = 0;
let x = 400;
let y = 200;
let xdir = 1;
let ydir = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(0);
}

function draw() {
//  background(0);

  stroke(hue, 100, 100, 0.2);
  strokeWeight(0.5);
  translate(x, y);
  rotate(rad);
  line(-300, 0, 300, 0);

  rad += 0.01;

  if(hue>=360) hue = 0;
  else hue ++;
  
  x+=xdir;
  y+=ydir;
  if(x>width || x<0) xdir *= -1;
  if(y>height || y<0) ydir *= -1;
}
