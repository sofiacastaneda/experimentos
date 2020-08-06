//Variables booleanas
//Sólo tienen dos valores posibes [true] y [false]

//mouseIsPressed >> cuando está siendo presionado su valor es [true]

function setup() {
  createCanvas(240, 120);
  
  //un recurso útil para evitar tener que crear rectángulos
  strokeWeight(30);
}

function draw() {
  background(204);
  
  //esto traza la línea del fondo. Va por fuera del [if] porque si no se colorea también.
  stroke(102);
  line(40, 0, 70, height);
  
  //si se cumple x, hacer y.
  //si se presiona el mouse, hacer la línea negra
  if (mouseIsPressed == true) {
  stroke(0);
  }
  
  //la línea
  //va por fuera, si se pone dentro del if sólo aparece cuando se hace click. obedece primero al if. 
  line(0,70,width,50);
}