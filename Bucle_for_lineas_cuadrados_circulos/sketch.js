function setup() {
  createCanvas(600, 600);
  
  rectMode(CENTER);
}

function draw() {
  background(220);
  
  strokeWeight(2);
  
  
  //Para hacer que las líneas se conecten
  for (var i = 20; i < 400; i = i + 20) {
  line(i,0, i + i/2, 80);
  }
  
  for (var a = 20; a < 400; a = a + 20) {
  line(a,120, a + a/2, 80);
  }
  
  //Líneas rectas
  for (var b = 20; b < 580; b = b + 20) {
  line(b,250, b, 150);
  }
  
  //Círculos
  for (var c = 20; c < 550; c = c + 20) {
  ellipse (c, 300, 10, 10);
    ellipse (c+10, 320, 10, 10);
      ellipse (c, 340, 10, 10);
        ellipse (c+10, 360, 10, 10);
  }
  
  //Rectángulos
  
  for (var d = 30; d < 590; d = d + 20) {
  rect(d, 420, 10, 10);
  }
  
  for (var e = 15; e < 120; e = e + 20) {
  rect(e, 440+e, 10, 10);
    rect(e+20, 440+e, 10, 10);
      rect(e+40, 440+e, 10, 10);
  }
  
  for (var f = 10; f < 100; f = f +20) {
  rect(f+150, 510, 2+f, 2+f);
  }
  
}