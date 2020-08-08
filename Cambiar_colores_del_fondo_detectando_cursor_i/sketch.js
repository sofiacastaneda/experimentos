var x;
var y;

function setup() {
  createCanvas(500, 500);
  
  x = width/2;
  y = height/2;

  rectMode(CENTER);
}

function draw() {
  background(0);
  
  
  if(mouseX < x){
  background('blue')
  if(mouseY < y){
  background('green')
  }
  }
  
  if(mouseX > x){
  background('red')
  if(mouseY > y){
  background('yellow')
        //ellipse(width/4, height/4, 10,10);
  }
  }
  
  if (mouseIsPressed){
    background(0);
    stroke(255);
  } else {
  stroke(0);
  }
  
  
  fill('yellow');
  rect(width*3/4,height*3/4,30,30);

  fill('red');
  rect(width*3/4,height*1/4,30,30);
  
  fill('green');
  rect(width*1/4,height*1/4,30,30);
  
  fill('blue');
  rect(width*1/4,height*3/4,30,30);
  
  fill('white');
  ellipse(mouseX, mouseY, 20,20);
  
    strokeWeight(4);
      line(height/2,0,height/2,width);
      line(width,width/2, 0, width/2);
}