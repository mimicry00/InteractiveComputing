const interval = 8; //global variable
let num;

function setup() {
  createCanvas(800, 800); //width, height
  num = width/interval;
}

function draw() {
  background(0);

  for(let i=0; i<num; i++) {
    let startx, starty, endx, endy;
    let c, weight;
  
    startx = i*interval;
    endx = i*interval;

    if(i%2 === 0) { //even
      c = color(255);
      weight = 1;
      starty = height/2-i*4;
      endy = height/2+i*4;
    } else {  //odd
      c = color(120, 60, 4);
      weight = 4;
      starty = i*4;
      endy = height - i*4;
    }

    noFill();
    stroke(c);
    strokeWeight(weight);
    line(startx, starty, endx, endy);
  }
}
