let img;
let tSize = 30;
let tiles = [];

function preload() {
  img = loadImage('monalisa.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  let imageWidth = img.width;
  let imageHeight = img.height;

  let cols = floor(imageWidth/tSize);
  let rows = floor(imageHeight/tSize);

  for(let col=0; col<cols; col++) {
    for(let row=0; row<rows; row++) {
      let x = col*tSize;
      let y = row*tSize;
      let data = {
        img : img.get(x, y, tSize, tSize),
        x : x,
        y : y
      }
      tiles.push(data);
    }
  }
}

function draw() {
//  image(img, 0, 0);

  // let imgBlock = img.get(200, 200, tSize, tSize);
  // set(200, 200, imgBlock);
  // updatePixels();

  if(tiles.length > 0) {
    let index = floor(random(tiles.length));
    let imgData = tiles[index];
    // set(imgData.x, imgData.y, imgData.img);
    image(imgData.img, imgData.x, imgData.y);
    updatePixels();

    console.log("still running");

    tiles.splice(index, 1);
  }

}
