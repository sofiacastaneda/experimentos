function setup() {
  createCanvas(480, 620);
  noStroke();
}

function draw() {
  background(0);
  
  ////Bucle anidado
  /*
  for (var y = 0; y <= height; y = y + 40) {
    for (var x = 0; x <= width; x = x + 40){
      fill(255,140);
      ellipse(x,y,40,40);
    }
  }
  */
  
  /*
  for (var y = 0; y < height+45; y = y + 40) {
  fill(255,140);
    ellipse (0, y, 40, 40);
  }
  
  for (var x = 0; x < width+45; x = x + 40) {
  fill(255,140);
    ellipse(x,0,40,40);
  }
  */
  
  //Muestra de lo que hacen los for por separado
  //Area de muestra 480x120
  for (var y = 0; y <= 120; y = y + 40) {
  fill(255,140);
    ellipse (0, y, 40, 40);
  }
  
  for (var x = 0; x <= 480; x = x + 40) {
  fill(255,140);
    ellipse(x,0,40,40);
  }
  
  //Un for dentro de otro toma las repeticiones del primer bucle y las combina con las del segundo
  //Los primeros 4 círculos se combinana con los segundos 13
  //(4x13=52)
  //EL bloque combinado genera un patrón.
  
  //For anidado
  for (var y = 120; y <= 620; y = y + 40) {
    for (var x = 0; x <= 480; x = x + 40){
      fill(255,120);
      ellipse(x,y,40,40);
    }
  }
  
}