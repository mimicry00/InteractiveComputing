var rad = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);

  fill(255, 236, 0);
  noStroke();

  for (var i=0; i<6; i++) {
    for (var j=0; j<6; j++) {
      
      var centerX = i*160;
      var centerY = j*160;
      
      push();
      translate(centerX, centerY);
      rotate(rad);
			
      beginShape();
      vertex(-10, -60);
      vertex(-60, -110);
      vertex(-105, -35);
      vertex(-60, -5);
      vertex(-100, +30);
      vertex(-50, +105);
      vertex(+5, +45);
      vertex(+40, +95);
      vertex(+95, +30);
      vertex(+40, -10);
      vertex(+105, -60);
      vertex(+30, -105);
      vertex(-10, -60);
      endShape();
      pop();
    }
  }
  
  rad += PI/180;

}
