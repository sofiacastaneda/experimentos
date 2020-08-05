function setup() {
  createCanvas(480, 120);
  strokeWeight(4);
  stroke(0,102);
}

function draw() {
  //las variables pmouseX y pmouseY
  //almacenan la posición del ratón en el cuadro anterior. 
  //dejan un trazo atrás, por eso se ve la línea continua
line(mouseX,mouseY,pmouseX,pmouseY);
}