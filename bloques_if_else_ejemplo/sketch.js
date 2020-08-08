/*

if (pregunta) {
  instrucciones
  }
  
  >si la respuesta a la pregunta es true, el bloque dentro de if se ejcuta. 
  
  >>el computador determina la respuesta a la pregunta después de evaluar lo que sea que haya entre los paréntesis. 
  
  >Las variables booleanas sólo pueden ser true o false, entonces no necesitan explícitamente == 
  >Puede ser solo if (mouseIsPressed);
  
  NOTA
  
  > El símbolo == pregunta: ¿son estos dos elementos iguales?
  > En síbolo = define el valor de una variable
  
*/

/*

Se puede extender la funcionalidad de un bloque [if] con [else].

//[else] deja que el programa escoja entre dos opciones. 

[else] se ejecuta cuando if = false. 
*/

function setup() {
  createCanvas(240, 120);
  strokeWeight(30);
}

function draw() {
  background(204); 
  stroke(102);
  line(40, 0, 70, height);
  
  if(mouseIsPressed){
    stroke(0);
    }     else {
  stroke(255);
  }
line(0, 70, width, 50);
}