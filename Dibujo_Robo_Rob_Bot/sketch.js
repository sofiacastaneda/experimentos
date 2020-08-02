function setup() {
  createCanvas(400, 400);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  background(220);
  
  //Cuello
  stroke(102);
  line(266,257,266,162);
  line(276,257,276,162);
  line(286,257,286,162);
  
  //Antenas
  stroke('red');
  fill('red');
  beginShape();
  vertex(276,155);
  vertex(246,80);
  vertex(276,100);
  vertex(306,56);
  vertex(326,155);
  vertex(342,170);
  endShape(CLOSE);
  
  //Bracitos
  
  //Cuerpo
  noStroke();
  fill(153);
  ellipse(264,377,33,33);
  fill(0);
  rect(219,257,90,120);
  fill('red');
  rect(219,274,90,6);
  
  //Cabeza
  fill(0);
  ellipse(276,155,45,45);
  fill(255);
  ellipse(288,150,14,14);
  fill(0);
  ellipse(288,150,3,3);
  fill(153);
  ellipse(263,148,5,5);
  ellipse(296,130,4,4);
  ellipse(305,162,3,3);
  
}