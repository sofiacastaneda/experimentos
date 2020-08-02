function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(220);
  
  
  for (var i = 0; i <= width; i = i + 20) {
    for (var e = 0; e <= height; e = e + 20) {
      ellipse (i, e, 10, 10);
    }
  }
}