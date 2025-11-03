/*
    JavaScript usa più tipi di dato:

    - Number:       numeri di tutti i tipi (1, 2, 3, 100, 3.14)
    - String:       serie di caratteri compresi tra apici ('hello world' "mail@iel.it")
    - Boolean:      sono un valore speciale che indica vero o falso (true / false)
    - Null:         lo utilizziamo per indicare esplicitamente che una variabile non ha un valore
    - Undefined:    come null, ma per variabili non ancora definite e viene assegnato dal browser
    - Object:       strutture di dati complesse con più proprietà e funzioni (Array, Date, Literal...)

    Una variabile può contenere qualsiasi tipo di dato e in JavaScript non siamo obbligati a specificare di che tipo di dato si tratti. Possiamo anche sovrascrivere il valore di una variabile con un diverso tipo di dato.
    JavaScript è un linguaggio debolmente tipizzato, cioè conosce benissimo i tipi di dato, ma non siamo obbligati a dichiararli.
*/
let nomeDocente = 'Milo'; // string
let cognomeDocente = 'Spandre';
let etaDocente = 33; // number
let nomeCorso = null;
let presenza = true; // boolean
let materia = 'JavaScript';

// Quando in dubbio sul tipo di un dato, possiamo utilizzare l'operatore typeof seguito dalla variabile di cui ci interessa sapere il tipo e stampare in console
console.log(typeof presenza);
console.log(typeof nomeCorso);
console.log(typeof PI);

let presentazione = "Ciao, mi chiamo " + nomeDocente + " " + cognomeDocente + " ho " + etaDocente + " anni. Insegno " + materia + " nel corso " + nomeCorso + " e oggi sono " + presenza;

console.log(presentazione);
