function setup() {
  createCanvas(480, 720);
}

//Operadores relacionales
/*
> Mayor que
< Menor que
>= Mayor o igual que
<= Menor o igual que
== Igual que
!= Distinto de
*/


function draw() {
  
  //Bucles for
  // for (inic; prueba; refresco) {instrucciones}
  
  // el primer valor determina la variable
  //el segundo el límite
  // el tercero cambia el valor de cada variable en cada bucle, hasta que deje de cumplir la condición dada por prueba
  
  background(205);
  
  strokeWeight(8);
  for (var a = 20; a < 400; a = a + 60) {
  line (a,40, a+60, 80);
  }
  //Este for significa que la variable inicial es 20. En cada bucle, a esos 20 se les suman 60. y1 aumenta en 120 cada bucle.Se detiene cuando la variable inicial alcanza los 400.
  
  strokeWeight(2);
  for (var b = 20; b < 400; b = b + 8) {
  line (b,150, b+60, 200);
  }
  //Este for tiene una variable inicial de 20. En cada bucle se aumenta 8, por eso se ve mucho menos espaciado que el for anterior. Se detiene cuando llega a los 400. 
  
  strokeWeight(4);
  for (var c = 20; c < 450; c = c + 20) {
  line (c,240,c+20,260);
}
  
  /*
  line (20,40,80,80);
  line (80,40,140,80);
  line (140,40,200,80);
  line (200,40,260,80);
  line (260,40,320,80);
  line (320,40,380,80);
  line (380,40,440,80);
  */
  
  strokeWeight(2);
  for (var d = 20; d < 450; d = d + 15) {
  ellipse (d,100,10,10);
    ellipse (d, d+50, 10, 10);
  }
  /*
  ellipse (10,100,10,10);
  ellipse (25,100,10,10); 
  ellipse (40,100,10,10);
  */
  
  for (var e = 20; e < 450; e = e + 25) {
  ellipse (e,300,20,20);
  }
  
  //Este for hace círculos que aumentan de tamaño
 /* for (var f = 5; f < 350; f = f + 5 ) {
  ellipse (f,350,f+0.5,f+0.5);
}*/
  
  for (var f = 20; f < 350; f = f*2 ) {
  ellipse (f,550,f,f);
}
  
}