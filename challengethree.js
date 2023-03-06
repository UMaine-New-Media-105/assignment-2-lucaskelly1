function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
//call
addL(75,0,1.6)
}

function addL(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  noStroke();

  beginShape();
  fill("limegreen")
  //Points for 'L'
  
  vertex(0, 0);
  vertex(0, 250);
  vertex(150,250);
  vertex(130,225);
  vertex(150,200)
  vertex(50,200)
  vertex(50,0)
  vertex(25,20)
  endShape(CLOSE);
  pop();
}
//
