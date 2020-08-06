function setup() {
  createCanvas(width, height);
  strokeWeight(4);
  stroke(0,102);
}

function draw() {
  //función dist()
  //ayuda a calcular la velocidad con la que se mueve el ratón, usando pmouseX y pmouseY mide la distancia entre la posición actual y la más reciente
  //lento = distancia pequeña
  //rápido = distancia mayor
  
  //aquí se declara la variable, usando dist()
var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
  
  //aqui se integra la variable al stroke
  strokeWeight(weight);
  
  //seguir el mouse y mantener trazo
  line(mouseX, mouseY,pmouseX,pmouseY);

}
