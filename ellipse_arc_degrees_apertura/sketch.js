function setup() {
  createCanvas(500, 200);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  fill(255);
  

  ellipse(30,100,50,50);
  arc(90,100,50,50,0,310);
  arc(150,100,50,50,0,270);
  arc(210,100,50,50,0,220);
  arc(270,100,50,50,0,180);
  arc(330,100,50,50,0,130);
  arc(390,100,50,50,0,90);
  arc(450,100,50,50,0,50);

  
}