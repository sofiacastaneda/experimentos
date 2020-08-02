function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  //line (x1,y1,x2,y2);
  
  strokeWeight(2);
  stroke('blue');

  /*
  line(10,10,390,10);
  line(10,20,390,20);
  line(10,30,390,30);
  
  line (10,10,10,390);
  line (20,10,20,390);
  line (30,10,30,390);
  */
  
 for (var x = 10; x<= width - 10; x = x + 10) {
    for (var y = 10; y<= height - 10; y = y +10) {
      line(10,y,height-10,y);
      line (x,10,x,width-10);
    }
  }
  
}