function setup() {
  // Dibujar círculos siguiendo al mouse. El círculo se vuelve negro cuando se hace clic. 
  createCanvas(480,420);
}

function draw() {
if (mouseIsPressed) {
  fill(0);
} else {
  fill(255);
}
ellipse(mouseX,mouseY,80,80);
}
