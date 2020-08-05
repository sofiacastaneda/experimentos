//NO olvidar definir todas las variables de abajo aquí

var x = 0;
var y = 0;
var suavizado = 0.01;

function setup() {
  createCanvas(400, 400);
  background(102);
}

function draw() {

  
  //la multiplicación expresa el espacio que hay entre las elipses
  //por eso un suavizado * 0.01 es más continuo que el de *0.5
  var objetivoX = mouseX;
  x = x + (objetivoX - x) * suavizado;
  
  var objetivoY = mouseY;
  y = y + (objetivoY - y) * suavizado;
  
  fill('blue');
  ellipse(x,y,10,10);
  
  print("X" + objetivoX + " : " + x); 
  print("Y" + objetivoY + " : " + y);

}