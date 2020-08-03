function setup() {
  createCanvas(480, 120);
  fill(0,102);
  noStroke();
}

function draw() {
//Si se deja el background, en cada redibujo aparece otra vez y no se ve el trazo del mouse. 
//background(220);
ellipse(mouseX,mouseY,9,9);
}