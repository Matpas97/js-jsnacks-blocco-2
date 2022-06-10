

// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.

// Creo un Array vuoto
let allElements = [];

// Chiedo all'utente un numero da inserire nell'Array



let som =0;

while(som < 50) {

   let userNumber = parseInt(prompt('Inserisci un numero'));

   // Aggiungo numero in som

   som += userNumber;

   // Inserisco numero nell'Array

   allElements.push(userNumber);

   // Stampo Array
   console.log(allElements);
    


}