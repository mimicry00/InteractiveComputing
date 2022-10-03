
const col_url = 'https://coolors.co/5a4ba7-804da1-1c96a8-58c490-e0c448-e87d43-e9518d';
let COLORS = [];

function setup() {
  createCanvas(800, 800);
  
  rectMode(CENTER);
  noStroke();

  COLORS = extractCols(col_url);

  tileColorBlocks();
}

function draw() {
}

function tileColorBlocks() {
  for(let x=0; x<width; x+=200) {
    for(let y=0; y<height; y+=200) {
      let randomInt = int(random(COLORS.length));
      let randomColor = COLORS[randomInt];
      fill(randomColor);
      rect(x+100, y+100, 200, 200);
      let compColor = extractCompCol(randomColor);
      fill(compColor);
      ellipse(x+100, y+100, 200, 200);
    }
  }
}

function mousePressed() {
  tileColorBlocks();
}

//javascript reference : String
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

function extractCols(url) {
  let lastslash = url.lastIndexOf('/');
  let sliced = url.slice(lastslash+1);
  let cols = sliced.split('-');
  let newcols = [];
  for(let col of cols) {
    newcols.push(concat('#', col));
  }
  return newcols;
}

function extractCompCol(hex) {
  let col = color(hex);
  let newred = 255 - red(col);
  let newgreen = 255 - green(col);
  let newblue = 255 - blue(col);
  return color(newred, newgreen, newblue);
}