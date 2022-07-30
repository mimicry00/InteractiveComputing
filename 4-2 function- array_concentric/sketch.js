let ang = [];
let x = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i=0; i<30; i++) {
    ang.push(random(360));
    x.push(i*24+30);
  }
}

function draw() {
  background(0, 4);

  for(let i=0; i<30; i++) {
    push();
    translate(width/2, height/2);
    rotate(radians(ang[i]));   //radians()
    fill(255);
    noStroke();
    ellipse(x[i], 0, 20);    
    pop();
  
    ang[i] += vel(i);
  }
}

function vel(n) {
  return map(n, 0, 30, 1, 1.5);
}


