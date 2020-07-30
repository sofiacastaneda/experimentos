function setup() {
  createCanvas(710, 400);
  background(0);
}

function draw() {
  stroke(400);
  if (mouseIsPressed === true) {
    //el pmouse hace que el trazo sea continuo
    line(mouseX, mouseY, pmouseX, pmouseY);
    //line(mouseX, mouseY, mouseX, mouseY); / hace que la línea sea puntuada
  }
}