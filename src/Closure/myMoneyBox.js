// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);

// otro Ejemplo con Closures
function notasTrimestre(){
    let notas = 0;
    function sumaNotas(nota){
        let notaTri = nota * 0.23;
        notas += notaTri;        
        console.log(`Sus notas del trimestre suman ${notas}%`);
    }
    return sumaNotas;
}

const misNotas = notasTrimestre();
misNotas(85);
misNotas(70);
misNotas(85);
misNotas(65);

// reto
function createPetList() {
  const petList = [];

  function addPet(pet) {
    if (pet) {
      petList.push(pet);
    }
    return petList;
  }

  return addPet;
}

const myPetList = createPetList();
myPetList("michi");
myPetList("firulais");

console.log(myPetList());