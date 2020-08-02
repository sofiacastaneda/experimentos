function setup() {
  createCanvas(480, 480);
  noStroke();
}

function draw() {
  background(255);
  
  ////Bucle anidado
  
  for (var y = 0; y <= height; y = y + 40) {
    for (var x = 0; x <= width; x = x + 40){
      fill(0);
      ellipse(x,y,40,40);
    }
  }
  
}