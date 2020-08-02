function setup() {
  createCanvas(480, 480);
  fill('blue');
  stroke(102,100);
}

function draw() {
  background(0);
  
  for ( var y = 20; y <= height-20; y = y + 10) {
    for (var x = 20; x <= width-20; x = x + 10) {
      //dibujar los puntos
      ellipse (x, y, 4, 4);
      //dibujar una línea hacia el centro
      line(x, y, width/2, height/2);
    }
  
  }
  
}