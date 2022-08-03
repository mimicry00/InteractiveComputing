let salma;
let echars = [];
let txtStr = "GOODBOY";
let inputStr = '';
let tSize = 120;

function preload() {
  salma = loadFont('assets/Salma.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(salma);
  textSize(tSize);
  textAlign(CENTER);

  initialize();
}

function initialize() {
  
  let minW = width/2 - tSize*1.5;
  let maxW = width/2 + tSize*1.5;
  let intervalH = height/(txtStr.length+1);
  
  for(let i=0; i<txtStr.length; i++) {
    echars.push(new ExplodingChars(txtStr.charAt(i), random(minW, maxW), intervalH + i*intervalH));
  }

}

function draw() {
  background(0);
  
  for(let ch of echars) {
    ch.show();
  }  

  for(let i=0; i<echars.length; i++) {
    fill(255, 120);
    noStroke();
    text(echars[i].char, echars[i].x, echars[i].y);
  }
  
  noFill();
  stroke(255);
  line(width/2-200, height-40, width/2+200, height-40);
  fill(255);
  textSize(60);
  text(inputStr, width/2, height-50);
}

function keyTyped() {
  if(keyCode === ENTER) {
    inputStr = '';
  } else {
    if(inputStr.length<10) {
      inputStr += key;
    }
  }
}

function keyPressed() {
  if(keyCode === RETURN) {
    txtStr = inputStr.toUpperCase();
    echars = [];
    initialize();
    inputStr = '';
  } 
  if(keyCode === BACKSPACE) {
    inputStr = inputStr.substring(0, inputStr.length-2);
  }
  // return false;
}

class ExplodingChars {
  constructor(ch, x, y) {
    this.x = x;
    this.y = y;
    this.char = ch;
    let dis = dist(this.x, this.y, width/2, height/2);
    this.num = int( map(dis, 0, 280, 20, 80) );
  }

  show() {
    for(let i=this.num; i>=0; i--) {
      noFill();
      let alpha = map(i, this.num, 0, 0, 120);
      stroke(210, 85, 20, alpha);
      strokeWeight(1);
      let dx = lerp(this.x, width/2, i*(1/this.num));
      let dy = lerp(this.y, height/2, i*(1/this.num));
      // let dx = map(i, this.num, 0, width/2, this.x);
      // let dy = map(i, this.num, 0, height/2, this.y);
      textSize(tSize);
      text(this.char, dx, dy);
    }
  }
}
