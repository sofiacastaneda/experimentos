function setup() {
  createCanvas(600, 400);
  //angleMode(DEGREES) cambia los valores de radianes pero es más fácil de leer
  angleMode(DEGREES);
}

function draw() {
  background(0);
  stroke(255); 
  //Líneas 
  //line(x1,y1,x2,y2);
  line(50,100,500,100); 
  line(60,40,550,400);
  
  //triángulo
  //(x1,y1,x2,y2,x3,y3);
  triangle(40,300,20,250,100,300);
  triangle(150,200,100,300,200,300);
  
  //cuadrilátero
  //quad(x1,y1,x2,y2,x3,y3,x4,y4);
  quad(550,120,500,150,500,240,580,300);
  
  //rectángulo
  //rect(x,y,ancho,altura);
  rect(300,20,50,100);
  
  //elipse
  //ellipse(x,y,ancho,altura);
  //si es un círculo se pone el valor después de las coordenadas x y y sólo una vez
  ellipse(100,50,50);
  ellipse(150,170,80,60);
  
  //pie pacman
  //arc(x,y,ancho,altura,inicio,final)
  //inicio y final son los puntos de apertura del pie
  arc(350,300,70,70,HALF_PI,TWO_PI);
  //se pueden usar radianes
  arc(350,250,180,50,radians(320),radians(30));
}