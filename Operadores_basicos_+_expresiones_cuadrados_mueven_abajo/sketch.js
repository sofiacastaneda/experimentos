var x = 0;
var y = 0;
var h = 20;


function setup() {
  createCanvas(100, 1000);
}

function draw() {
  background(0);
  
  fill('blue');
  x =0;
  rect(x,y,h,h);
  
  
  fill('red');
  x = x + 25;
  y = y + 1;
  rect(x,y+10,h,h);
  // Si se añade el + 10 dentro de rect(), el cuadrado sólo se mueble
  //Si se declara afuera, los círculos se mueven pues cada vez que draw redibuja, la variable se redefine
  
  //NO entiendo porqué no se mueve lateralmente cuando hago lo mismo con var = x
  ///

  fill('green');
  x = x + 20;
  y = y + 1;
  //Cuando se introducen operadores entre dos valores:
  //por ejemplo 5 + 9
  //se crea una **expresión**
  rect(x,y*2,h+1,h);
  
  fill('yellow');
  x = x + 30;
  y = y + 1;
  rect(x,y*3,h,h);
}