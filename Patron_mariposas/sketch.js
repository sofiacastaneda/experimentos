function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('orange');
  
  for (var i = 20; i <= height - 20; i = i + 30) {
     for (var e = 20; e <= width - 20; e = e + 30) {
       
       //Círculos
       fill('blue');
       strokeWeight(1);
       stroke(0);
       ellipse(i, e, 30, 30);
       
       //line(x1,y1,x2,y2);
       //Alitas
       strokeWeight(4);
       stroke('red');
       line(i-5,e-5,i+5,e+5);
       line(i+5,e-5,i-5,e+5);
       
       //Cuerpo
       strokeWeight(2);
       stroke('yellow');
       line(i, e+6, i, e -6);
       
       //Antenas
       strokeWeight(2);
       stroke(0);
       line(i, e-6, i+2, e-8);
       line(i, e-6, i-2, e-8);
     }
  }
}