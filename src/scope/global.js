//Variable

var a; //declaracion
var b = 'b' // declaramos // asignamos
b = 'bb'; //reasignacion
var a = 'aa'; //redeclaracion



// Global Scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

//cuando no declaramos una variable y simplemente la asignams por defecto pasa a ser una variable global ypuede ser accedida desde fuera de la funcion
function countries() {
  country = "Colombia"; // global porque no la declaraste
  console.log(country);
}

countries();
console.log(country);