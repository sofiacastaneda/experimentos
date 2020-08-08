var x;
var offset = 10;

function setup() {
  createCanvas(240, 120);
  
  //x es la mitad de la pantalla
  x = width/2;
}

function draw() {
  background(204);
  
  //estos bloques if determinan la dirección de la flecha según la ubicación del mouse en relación a x
  if(mouseX > x) {
  x = x + 0.5;
    offset = -10;
  }
  if(mouseX < x) {
  x = x - 0.5;
    offset = 10;
  }
  
  //esta línea dibuja la flecha que se mueve
  //su posición en x la determina el cursor
  line(x,0,x,height);
  
  //Dibuja flecha izquierda o derecha según el valor "offset"
  //linea superior
  line(mouseX, mouseY, mouseX + offset, mouseY - 10);
  //linea inferior
  line(mouseX, mouseY, mouseX + offset, mouseY + 10);
  //línea central
  line(mouseX, mouseY, mouseX + offset*3, mouseY);
}