var x = 0;

//esta variable define la velocidad con la que x se aproxima a Objetivo X
var suavizado = 0.1;

function setup() {
  createCanvas(400, 80);
  background(120);
}

//suavizado
//cambia el número de pasos para llegar de un lugar a otro

//cuenta con dos valores: valor actual (por donde se inicia y ha pasado la línea) y valor objetivo (a donde ha llegado)

//bajarle (0.1) al suavizado aumenta los pasos = más puntos
//= más retraso

//subir (04) hace que la línea se vea más fragmentada


function draw() {
  
  //objetivoX es a dónde se dirige el mouse
  var objetivoX = mouseX;
  
  //la posición de la elipse 
  //no entiendo bien la operación inicial
  // - x == se resta para que la elipse pueda moverse en ambas direcciones
  //*suavizado == EL SUAVIZADO SÓLO SE APLICA CUANDO SE MULTIPLICA POR LOS VALORES DE X
  x = x + (objetivoX - x) * suavizado;
  ellipse(x,40,30,30);
  
  //Esta función de print muestra cuánto le falta a la variable x para llegar a objetivoX. 
  //Cuando se mueve el ratón los números se alejan
  //Cuando se deja de mover el valor de x = objetivo X
  print(objetivoX + " : " + x);
}