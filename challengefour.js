//KENYA and LIBERIA FLAG


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  //red box
  fill("hsl(0, 75%, 45%)");
  rect(0, 0, 600, 400);

  //white stripes (in order)
  addStripe(0, 0, 1);
  addStripe(0, 72, 1);
  addStripe(0, 144, 1);
  addStripe(0, 216, 1);
  addStripe(0, 288, 1);

  addTrap();
  addStar(-25,95,.5);
}

//KENYA CODE


function addTrap() {
  beginShape();
  fill("black");
  //Points for trapezoid

  vertex(0, 0);
  vertex(0, 400);
  vertex(200, 288);
  vertex(200, 108);

  endShape(CLOSE);
  pop();
}

//LIBERIA CODE


function addStripe(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  noStroke();
  fill("white");
  noStroke();
  rect(0, 36, 600, 36);

  pop();
}

function addStar(x,y,size) {
  push();
  translate(x,y);
  scale(size);
  
  fill("white")
  noStroke()
  fill("white")
  beginShape();
  vertex(330,180)
  vertex(250,180)
  vertex(220,95)
  vertex(180,180)
  vertex(100,180)
  vertex(165,235)
  vertex(140,305)
  vertex(215,265)
  vertex(290,305)
  vertex(265,235)
  endShape(CLOSE);
  pop();
}
//
