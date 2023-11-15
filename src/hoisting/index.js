// console.log(nameOfDog);
// var nameOfDog = 'Lilo';
// con lo anterior el rersultado es undefined

// // lo que hace es lo siguiente
// var nameOfDog; //undefined porque internamenete sube y solo asignada la variable pero no declarada y cundo se hace el llamado pues no tienen nada 
// console.log(nameOfDog);
// var nameOfDog = "Lilo";


// var nameOfDog; 
// console.log(nameOfDog);
// var nameOfDog = "Lilo";
// console.log(nameOfDog); //aqui cuando se hace el llamado si genera el resultado porque esta aignada y declara la variable anteriormente


nameDog();

function nameDog(){
    console.log(`el mejor perro es ${kiara}`)
}

var kiara = 'kiarita';

// con lo anterior el rersultado es undefined
// lo que sucede internamente es lo siguiente

var Kiara; // undefined
//la variable sube pero solo la asignacion no la declarada y la funcion tambie sube todo esto internamente lo hace JS pero no tendria acceso a valor de kiara el cual se declara mucho mas abajo de la funcion
function nameDog() {
  console.log(`el mejor perro es ${kiara}`);
}
nameDog();
var kiara = "kiarita";

