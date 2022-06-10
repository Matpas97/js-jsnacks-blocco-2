

//- Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

let som = 0;
for( let i = 1; i < 5 ; i++) {
    let userNumber = parseInt(prompt('Inserisci un numero'));
    let thisnumber = userNumber[i];
    
    som += userNumber;

    
}

// Stampo la somma di tutti i numeri inseriti
console.log(som);

while(i < 5) {
    let userNumber = parseInt(prompt('Inserisci un numero'));
    let thisnumber = userNumber[i];
    
    som += userNumber;


}
