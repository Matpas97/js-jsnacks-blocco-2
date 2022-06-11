

//- Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// Creo i due Array

let arrayElements1 = [3,9,4,2,6,5];

let arrayElements2 = [5,9,4,2,6,4,3,9,1];

// Aggiungo numeri casuali all'Array che ha meno elementi


for(let i = 0; i < 3; i++) {
   
 arrayElements1.push(Math.floor(Math.random() * 3));

}
 // Stampo gli elementi dell'ArrayElements1
console.log(arrayElements1);

