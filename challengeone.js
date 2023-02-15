function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
  
  drawcolumnone(0,100,1)
  drawcolumnone(0+80,100,1)
  drawcolumnone(0+160,100,1)
  drawcolumnone(0+240,100,1)


  drawothercolumn(0+80,100,1)
  drawothercolumn(0+160,100,1)
  drawothercolumn(0+240,100,1)
  drawothercolumn(0+320,100,1)

}
//column 2-4 for blue in space

function drawothercolumn(x,y,size,ifColor) {
  

  scale(size)
fill("blue")
  
//column 2-4 for blue
  rect(x,0,80,80);
  rect(x,80,80,80);
  rect(x,160,80,80);
  rect(x,240,80,80);
  rect(x+240,320,80,80);


  endShape(CLOSE);
  
  
  
}

function drawcolumnone(x,y,size,ifColor) {
  

  scale(size)
fill("red")
  
//column 1 for red
  rect(x,0,80,80);
  rect(x,80,80,80);
  rect(x,160,80,80);
  rect(x,240,80,80);
  rect(x,320,80,80);

  endShape(CLOSE);
  
  
  
}
//
