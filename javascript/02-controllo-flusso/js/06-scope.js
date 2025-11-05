/*
    Lo scope (o ambito) si riferisce alla visibilità delle variabili e delle funzioni in diverse parti del codice.
*/

// Si parla di variabili GLOBALI quando dichiarate al di fuori di qualsiasi funzione o blocco di codice circoscritto e sono accessibili da qualsiasi parte del codice.
let age = 30;

if (true) {
    console.log(`Dentro al blocco: ${age}`);
}

console.log(`Fuori dal blocco: ${age}`);

// Si parla invece di variabili LOCALI quando queste vengono dichiarate all'interno di un blocco di codice (come un ciclo o un if statement) o all'interno di funzioni
if (true) {
    let varLocale = 'Sono una variabile locale';
    console.log(`Dentro al blocco: ${varLocale}`);
}

// console.log(`Fuori dal blocco: ${varLocale}`);

let email = 'mia@mail.it';

console.log(email);

if (true) {
    let email = 'ennesima@mail.it'
    console.log(email);
}