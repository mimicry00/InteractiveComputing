let font;
let outputStr = "GOODBOY";
let inputStr = '';
let charSize = 120;

let echars = [];
let maxHPos, minHPos;

function preload() {
  font = loadFont('assets/NotoSans-Black.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textAlign(CENTER);

  maxHPos = width/2 + width/2*0.5;
  minHPos = width/2 - width/2*0.5;

  initialize();
}

function initialize() {
  echars = [];

  let interval = height / (outputStr.length + 1);

  for (let i = 0; i < outputStr.length; i++) {
    let ch = outputStr.charAt(i);
    let x = random(minHPos, maxHPos);
    let y = i*interval + interval;
    echars.push(new ExplodingChars(ch, x, y));
  }
}

function draw() {
  background(0);

  for (let ch of echars) {
    ch.show();
  }

  for (let i = 0; i < echars.length; i++) {
    fill(255, 120);
    noStroke();
    text(echars[i].char, echars[i].x, echars[i].y);
  }

  noFill();
  stroke(255);
  line(width / 2 - 200, height - 40, width / 2 + 200, height - 40);
  fill(255);
  textSize(60);
  text(inputStr, width / 2, height - 50);
}

// function keyTyped() {
//   if (keyCode === ENTER) {
//     inputStr = '';
//   } else {
//     if (inputStr.length < 10) {
//       inputStr += key;
//     }
//   }
// }

function keyPressed() {
  if (keyCode === RETURN) {
    outputStr = inputStr.toUpperCase();
    inputStr = '';
    initialize();
  } else if (keyCode === BACKSPACE) {
    inputStr = inputStr.substring(0, inputStr.length - 1);
  } else {
    if (inputStr.length < 10) {
      inputStr += key;
    }
  }
}

class ExplodingChars {
  constructor(ch, x, y) {
    this.x = x;
    this.y = y;
    this.char = ch;
    let distance = dist(this.x, this.y, width / 2, height / 2);
    let maxd = dist(0, 0, width/2, height/2);
    this.steps = int(map(distance, 0, maxd, 0, 240));
  }

  show() {
    for (let i = this.steps; i >= 0; i--) {
      noFill();
      let alpha = map(i, this.steps, 0, 0, 120);
      stroke(210, 85, 20, alpha);
      strokeWeight(1);
      let dx = lerp(this.x, width / 2, i * (1 / this.steps));
      let dy = lerp(this.y, height / 2, i * (1 / this.steps));
      // let dx = map(i, this.steps, 0, width/2, this.x);
      // let dy = map(i, this.steps, 0, height/2, this.y);
      textSize(charSize);
      text(this.char, dx, dy);
    }
  }
}
