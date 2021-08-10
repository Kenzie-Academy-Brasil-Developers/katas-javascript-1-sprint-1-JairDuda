
function oneThroughTwenty() {
  
  let meuRetorno = [];

  for (let counter = 1; counter <= 20; counter++) {
    meuRetorno.push(counter)
  }

  return meuRetorno;

  
}
console.log("Numeros de 1 à 20");
console.log(oneThroughTwenty());

//call function oneThroughTwenty

function evensToTwenty() {
  
let meuRetorno = [];

for (let counter = 1; counter <= 20; counter++) {
    if(counter % 2 === 0){
      meuRetorno.push(counter)
    }
}
return meuRetorno

}
console.log("Numeros pares de 1 à 20");
console.log(evensToTwenty());

// //call function evensToTwenty

function oddsToTwenty() {
  
let meuRetorno = [];

for (let counter = 1; counter <= 20; counter++) {
    if(counter % 2 !== 0){
      meuRetorno.push(counter)
    }
}
return meuRetorno
 
}
console.log("Numeros impares de 1 à 20");
console.log(oddsToTwenty());

// //call function oddsToTwenty

function multiplesOfFive() {
  
let meuRetorno = [];

for (let counter = 1; counter <= 100; counter++) {
    if(counter % 5 === 0){
      meuRetorno.push(counter)
    }
}

return meuRetorno;

}
console.log("multiplos de 5 à 100")
console.log(multiplesOfFive())

//call function multiplesOfFive

function squareNumbers() {
  let meuRetorno = []
  

  for (counter = 1; counter <= 10; counter++){

      meuRetorno.push(counter*counter)
  
  
  
}
return meuRetorno; 

}
console.log("Quadradros perfeitos de 1 à 100")
console.log(squareNumbers());

// call function squareNumbers

function countingBackwards() {
  
let meuRetorno = [];

for (let counter = 20; counter >= 1; counter--) {
    meuRetorno.push(counter)
}

return meuRetorno;


}
console.log("Numeros reversos de 20 à 1")
console.log(countingBackwards());

// call function countingBackwards

function evenNumbersBackwards() {
  
let meuRetorno = [];

for (let counter = 20; counter >= 1; counter--) {
  if (counter % 2 === 0){
    meuRetorno.push(counter)
  }
  
}

return meuRetorno;
}
console.log("Numeros reversos pares de 20 à 1")
console.log(evenNumbersBackwards());

// //call function evenNumbersBackwards

function oddNumbersBackwards() {
  
let meuRetorno = [];

for (let counter = 20; counter >= 1; counter--) {
  if (counter % 2 === 1){
    meuRetorno.push(counter)
  }
  
}

return meuRetorno;

}
console.log("Numeros reversos impares de 20 à 1")
console.log(oddNumbersBackwards());

// //call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  
let meuRetorno = [];

for (let counter = 100; counter >= 1; counter--) {
  if (counter % 5 === 0){
    meuRetorno.push(counter)
  }
  
}

return meuRetorno;

}
console.log("Numeros reversos multiolos de 5 de 100 à 1")
console.log(multiplesOfFiveBackwards());


//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
  
let meuRetorno = []
  

  for (counter = 10; counter >= 1; counter--){

    meuRetorno.push(counter*counter)
  
}
return meuRetorno; 
}
console.log("Numeros reversos quadrados perfeitos de 100 à 1")
console.log(squareNumbersBackwards());


// //call function squareNumbersBackwards



