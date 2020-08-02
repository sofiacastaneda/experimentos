function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(0);
  
  for (var y = 32; y <= height; y = y + 8){
    for (var x = 12; x <= width; x = x + 15) {
       ellipse(x, y , 16 - y/10.0, 16 - y/10.0);
       }
  }
}