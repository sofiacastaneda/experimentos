function setup() {
  createCanvas(480, 620);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(0);

  //Muestra de lo que hacen los for por separado
  /*
  //Bucle horizontal 
  for (var x = 0; x <= width; x = x + 20) {
  rect(x, 0, 10, 10);
  }
  
  //Bucle vertical 

  for (var y = 0; y <=height; y = y + 20) {
  rect(0, y, 10, 10);
  }
  */
  
  //Bucle anidado
  // x y y son iguales a 10 para que no toquen los bordes
  // y<=620 // x <=480 // hacen que los cuadrados de las líneas del perímetro acaben atravesados por la mitad
  
  for (var y = 10; y <620; y = y + 20) {
    for (var x = 10; x < 480; x = x + 20) {
      rect(x, y, 10, 10);
      //rect(); debe incluir AMBAS variables para que funcione el bucle anidado. Se combinan en una sólo en vez de escribir dos. 
    }
  }
  
}