var x = 25;
var h = 20;
var y = 25;

var z = 200;

var k = 350;


function setup() {
  createCanvas(480, 520);
}

function draw() {
  background(204);
  
  fill('blue');
  x = 20;
  rect(x,y,300,h);
  
  x = x + 120;
  rect(x, y+h,200,h);
  
  x = x - 250;
  rect(x,y + h*2, 300,h+15);
  
  ///
  
  fill('red');
  
  x = 20;
  rect(x+100,z,100,h);
  
  x = x + 120;
  rect(x+40, z+h,200,h);
  
  x = x - 25;
  rect(x,y + z+15, 300,h+15);
  
  ///
  
  fill('green');
  
  x = 20;
  rect(x+10,k,100,h+20);
  
  x = x+80;
  rect(x+40, k+40,200,h-3);
  
  x = x - 65;
  rect(x,k+75, 300,h-5);
  
}