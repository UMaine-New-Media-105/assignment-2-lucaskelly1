function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
fill("limegreen")
  beginShape();
  
  //Points for 'L'
  
  vertex(120, 60);
  vertex(120, 310);
  vertex(270,310);
  vertex(250,285);
  vertex(270,260)
  vertex(170,260)
  vertex(170,60)
  vertex(145,80)
  endShape(CLOSE);
}
