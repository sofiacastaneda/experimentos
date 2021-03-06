function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(204,247,255);
  
  //Nubes
  for (var f = 10; f<= width; f = f +50) {
    for (var g = 20; g < 100; g = g + 30) {
  noStroke();
    fill(255);
      ellipse(f, g, 20, 10);
        ellipse(f+20, g, 20, 10);
          ellipse(f+10,g-5,20,10);
    }
  }
  
  
  //Bosque
  //troncos
  //line (x1,y1,x2,y2);
  for (var d = 10; d <= width; d = d +25) {
    strokeWeight(5);
    stroke(153,51,0);
    line(d, 170, d, 254);
  }
  
  //follaje
  /*fill('green')
  stroke(0);
  strokeWeight(1);
  beginShape();
  //lado derecho árbol
  vertex(15,100);
  vertex(30,130);
  vertex(25,150);
  vertex(30,170);
  vertex(25,190);
  vertex(30,210);
  //lado izq árbol
  vertex(0,210);
  vertex(5,190);
  vertex(-5,170);
  vertex(5,150);
  vertex(-5,130);
  endShape(CLOSE);
  */
  
  for (var h = 5; h <=width; h = h + 15){
  fill('green')
  stroke(0);
  strokeWeight(1);
  beginShape();
  //lado derecho árbol
  vertex(15+h,100);
  vertex(30+h,130);
  vertex(25+h,150);
  vertex(30+h,170);
  vertex(25+h,190);
  vertex(30+h,210);
  //lado izq árbol
  vertex(0+h,210);
  vertex(h+5,190);
  vertex(h-5,170);
  vertex(h+5,150);
  vertex(h-5,130);
  endShape(CLOSE);
  }
  
  //Casa
  //cuerpo
  noStroke();
  fill('orange');
  rect(width/2,230,60,60);
  fill('red');
  triangle(150,200,250,200,200,160);
  fill(0);
  rect(width/2,240,25,30);
  fill(66,230,245)
  rect(width/2-15, 213, 15,15);
  rect(width/2+15, 213, 15,15);
  
  //Pasto
  //triangle(x1,y1,x2,y2,x3,y3)
  //triangle(0,260,10,260,5,250);
  //triangle(10,260,20,260,15,250);
  //triangle(20,260,30,260,25,250);
  
  for (var e = 0; e <= width; e = e + 10){
    noStroke();
    fill('green');
    triangle(e-10,260,e+10,260,e+2,240);
  }
  
  //Ladrillos
  for (var c = 10; c <= width+10; c = c + 10) {
    fill('brown');
    strokeWeight(1);
    stroke(0);
    rect(c-10, 260, 10,10);
  }
  
  //Lago
  for (var a = 10; a <= width; a = a + 10) {
     for (var b = 10; b <= height; b = b + 10) {
       strokeWeight(1);
       fill('blue');
       ellipse(a-5,b+260,15,15);
     }
  }
  
  //Peces
  for (var i = 10; i <=width; i = i + 40){
    for (var j = 10; j <=height; j = j + 30){
      fill('orange');
      //aleta trasera
        triangle(i,260+j,i,280+j,i+10,270+j);
      //aleta superior
        triangle(i+15,255+j,i+6,270+j,i+22,270+j);
      //cuerpo
        ellipse(i+15,270+j,20,15);
      //ojito
        fill(0);
        ellipse(i+17,268+j,3,3);
    }  
  }

}