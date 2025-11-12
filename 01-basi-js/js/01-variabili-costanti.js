console.log(1);
console.log(2);

/* -------------------------------- VARIABILI ------------------------------- */
/*
    Le variabili ci permettono di salvare dei valori, come un nome, un  numero o una mail, e di utilizzare quel valore ogni volta che vogliamo.
    Ci sono diversi modi di creare una variabile:
*/
// let è una parola chiave per indicare una variabile e impedisce di dichiarare due variabili con lo stessono nome.
let age = 25;
let year = 2025;

console.log(age, year);

// È possibile sovrascrivere il valore di una variabile, di cambiarlo.
age = 34;

console.log(age);

// Posso anche dichiarare una variabile e assegnarle un valore in un secondo momento
let firstName;
firstName = 'Milo';

/* -------------------------------- COSTANTI -------------------------------- */
/*
    Se vogliamo creare una variabile con un valore che non deve mai cambiare, allora ci serve una costante.
    Per crearla, utilizziamo la parola chiave const e per convenzione il nome sara scritto in all-caps.
*/
const POINTS = 100;

// Se proviamo a cambiarne il valore, il codice ci impedirà di farlo e la console ci retituirà un errore
// POINTS = 50;

console.log(POINTS);

/*
    Esiste una terza keyword per creare variabili: var, che NON impedisce di dichiarare due variabili con lo stesso nome. Sta cadendo ormai in disuso, grazie all'arrivo di let e const.
*/
var score = 75;

/* -------------------------- NOMI DELLE VARIABILI -------------------------- */
/*
    i nomi delle variabili seguono delle regole precise e delle convenzioni che aiutano a rendere il codice leggibile da chiunque:
        - niente spazi (errore)
        - possiamo usare il camel-case (myAge)
        - può contenere solo lettere, numeri, underscore o $, ma non possono mai cominciare con un numero (errore)
        - non possiamo usare le keyword adottate da JS come let, const, e var
        - il nome deve avere un senso, deve far capire all'istante cosa viene salvato in quella variabile, così da rendere il codice leggibile e comprensibile
*/

// let nomeUtente = prompt('Come ti chiami?');

// console.log("L'utente ha detto di chiamarsi " + nomeUtente);

/* -------------------------------------------------------------------------- */
/*                                  ESERCIZIO                                 */
/* -------------------------------------------------------------------------- */
/*
    In un file js, dichiara e assegna un valore alle seguenti variabili:
    nome, cognome, eta, citta, paese.
    Una volta assegnati i valori, stampale in console.
*/
let nome = 'Milo';
let cognome = 'Spandre';
let eta = 34;
let citta = 'Torino';
let paese = 'Italia';

console.log(nome, cognome, eta, citta, paese);
console.log("Mi chiamo " + nome, cognome + " ho " + eta + " anni e vivo a " + citta + " in " + paese + ".");
