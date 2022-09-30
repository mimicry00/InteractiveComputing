let ang = [];
let num = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  for(let i=0; i<num; i++) {
    ang.push(random(360));
  }
}

function draw() {
  background(0, 4);

  for(let i=0; i<num; i++) {
    push();
    translate(width/2, height/2);
    rotate(ang[i]);   //radians()
    fill(255);
    noStroke();
    ellipse(i*24, 0, 20);    
    pop();
  
    ang[i] += calVelocity(i);
  }
}

function calVelocity(n) {
  return map(n, 0, 30, 1, 1.5);
}


