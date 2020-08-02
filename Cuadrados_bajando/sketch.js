var x = 0;
var y = 0;
var h = 20;


function setup() {
  createCanvas(330, 1000);
}

function draw() {
  background(0);
  
  fill('blue');
  x = 0;
  rect(x,y,h,h);
  
  fill('red');
  x = x + 30;
  y = y + 0.1;
  rect(x,y+10,h,h);
  
  //ATAJOS
  
  // x += 10
  // x = x + 10
  
  // y -= 
  // y = y - 10
  
  // x++
  // x = x + 1
  
  //y--
  // y = y - 1

  fill('green');
  x += 30;
  //y += 0.2;
  rect(x,y+20,h,h);
  
  fill('yellow');
  x += 30;
  //y += 0.3;
  rect(x,y+30,h,h);
  
  fill('magenta');
  x += 30;
  //y += 0.4;
  rect(x,y+40,h,h);
  
  fill('purple');
  x += 30;
  //y += 0.5;
  rect(x,y+50,h,h);
  
  fill('brown');
  x += 30;
  //y += 0.6;
  rect(x,y+60,h,h);
  
  fill('pink');
  x += 30;
  //y += 0.7;
  rect (x,y+70,h,h);
  
  fill('white');
  x += 30;
  //y += 0.8;
  rect (x,y+80,h,h);
  
  fill('orange');
  x += 30;
  //y += 0.9;
  rect (x,y+90,h,h);
  
  fill('gray');
  x += 30;
  //y++;
  rect (x,y+100,h,h);
}