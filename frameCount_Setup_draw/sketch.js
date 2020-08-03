//Aquí van las variables globales

var x = 280;
var y = -100;
var diameter = 380;

function setup() {
  //Se usa para definir las funciones iniciales
    //print("Estoy empezando");
  createCanvas(480, 120);
  fill(102);
}

function draw() {
  //la función draw() siempre opera en bucle
  //Mostrar en la consola la cuenta de cuadros
  print("Estoy dibujando");
  print(frameCount);
  
  background(204);
  ellipse(x, y, diameter, diameter);
}