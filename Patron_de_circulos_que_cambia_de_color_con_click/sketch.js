function setup() {
  createCanvas(500, 500);
}

function draw() {

  if (mouseIsPressed == true) {
    background('red');
    fill('blue');
    
    //Se pueden anidar bloques [if] dentro de otros bloques [if]
    if (mouseButton == CENTER) {
      background('yellow');
      fill('blue');
    }
    
  } else {
    background('blue');
    fill('red');
  }

  /*
  El programa puede detectar varios botones.
  mouseButton == RIGHT
  mouseButton == CENTER
  mouseButton == LEFT
  
  if (mouseButton == RIGHT) {
      background('green');
    fill('yellow');
    } 
  if (mouseButton == CENTER) {
  background('yellow');
    fill('green');
  }
*/

  strokeWeight(4);


  for (var a = 0; a <= width; a = a + 40) {
    for (var b = 0; b <= height; b = b + 40) {
      ellipse(a+12, b+12, 30, 30);
    }
  }

}