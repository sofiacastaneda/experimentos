//Variables

//Las variables se pueden declarar por fuera de setup() y draw()
//Esas son llmadas variables globales, porque se pueden usar en ambos
//Si se declara una variable dentro de setup() no se puede repetir en draw()

//Ejemplos de cómo declarar variables

//var x;
//x =12;

//var radio;
//radio = 6;

//var i = 50;

function setup() {
  createCanvas(600, 200);
}

function draw() {
  background(220);
  //las variables width y height almacenan las dimensiones del lienzo
  
  line(0,0,width,height);
  line(width,0,0,height);
  //a width y a height se les pueden dividir valores
  ellipse(width/2,height/2,60,60);
  rect(width/4,height/4,20,20);
}