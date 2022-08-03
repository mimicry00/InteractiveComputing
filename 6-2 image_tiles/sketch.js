let img;
let tSize = 30;
let tiles = [];

function preload() {
  img = loadImage('monalisa.png');
}

function setup() {
  createCanvas(600, 600);
  background(255);

  for(let x=0; x<width; x+=tSize) {
    for(let y=0; y<height; y+=tSize) {
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

  if(tiles.length>0) {
    let index = floor(random(tiles.length));
    let imgData = tiles[index];
    set(imgData.x, imgData.y, imgData.img);
    updatePixels();

    tiles.splice(index, 1);
  }

}
