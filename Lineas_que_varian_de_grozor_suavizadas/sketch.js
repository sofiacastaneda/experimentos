var x = 0;
var y = 0;
var px = 0;
var py = 0;
var suavizado = 0.05;

function setup() {
  createCanvas(480, 400);
  stroke(0, 102);
}

function draw() {
  var objetivoX = mouseX;
  x = x + (objetivoX - x) * suavizado;
  
  var objetivoY = mouseY;
  y = y + (objetivoY - y) * suavizado;
  
  var peso = dist(x, y, px, py);
  strokeWeight(peso);
  line(x, y, px, py);
  py = y;
  px = x;

}