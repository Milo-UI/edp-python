/*
    Gli array ci permettono di memorizzare una collezione di valori correlati tra loro.
    Sono oggetti 0-based, cioè a ogni elemento viene assegnato un indice partendo da 0.

    - Le parentesi quadre indicano l'inizio e la fine di un array
    - Ogni elemento è separato da virgola
*/
let studenti = ['Agamennone', 'Achille', 'Penelope', 'Ettore', 'Paride', 'Cassandra'];

console.log(studenti);

// Si può estrarre un singolo elemento specifico utilizzando la bracket notation, andando a richiamare l'indice dell'elemento nell'array
let primoStudente = studenti[0];
let terzoStudente = studenti[2];

/* ---------------------------- Proprietà length ---------------------------- */
// Possiamo riaslire alla lunghezza di un array, ovvero al numero di elementi al suo interno, tramite la proprietà length
let numeroStudenti = studenti.length;
console.log(numeroStudenti);

/* -------------------------------------------------------------------------- */
/*                             Metodi degli array                             */
/* -------------------------------------------------------------------------- */

/* --------------------------- Aggiungere elementi -------------------------- */
// Si possono aggiungere elementi alla FINE di un array con il metodo push()
studenti.push('Menelao', 'Odisseo');
console.log(studenti);

// Se invece si volesse aggiungere un elemento all'INIZIO di un array, si può fare con il metodo unshift()
studenti.unshift('Patroclo');
console.log(studenti);

/* --------------------------- Rimuovere elementi --------------------------- */
// Si può rimuovere l'ULTIMO elemento con pop()
studenti.pop();
console.log(studenti);

// Per rimuovere il PRIMO elemento uso shift()
studenti.shift();
console.log(studenti);

/* --------------------------------- join() --------------------------------- */
// join() prende gli elementi di un array e li unisce all'interno di una STRINGA separati dal carattere che gli passiamo tra le parentesi
let tuttiStudenti = studenti.join(', ');
console.log(tuttiStudenti);

/* -------------------------------- indexof() ------------------------------- */
// Come per le stringhe, possiamo risalire all'indice di un elemento
console.log(studenti.indexOf('Cassandra'));

/* -------------------------------- concat() -------------------------------- */
// Il metodo concat() prende un array e ne concatena un altro
let studentiAggiornato = studenti.concat(['Tersite', 'Circe']);
console.log(studentiAggiornato);

/* -------------------------------------------------------------------------- */
/*                                  ESERCIZIO                                 */
/* -------------------------------------------------------------------------- */
/*
    Lista della spesa:
    - Creare due array
        - Il primo contiene la lista dei prodotti da comprare
        - Il secondo i prezzi dei prodotti
    - Stampare in console il secondo elemento dell'array e il suo prezzo
    
    - Popolare la lista della spesa che ha id lista con un list item per ogni prodotto che contenga il nome del prodotto e il suo costo

    - Costruire un elemento html P nel quale verrà stampato il subtotale, cioè il costo senza iva
    - Costruire un altro elemento P nel quale verrà stampata l'iva (22%)
    - Calcolare il totale dei prezzi dei prodotti compreso d'iva e scriverlo nel paragrafo con id totale

    MINIMO 8 PRODOTTI
*/
let prodotti = ['Pane', 'Nutella', 'Biscotti', 'Pasta', 'Carne', 'Insalata', 'Birra', 'Latte'];
let prezzi = [1.80, 5.66, 2.00, 0.75, 12, 0.90, 2.45, 1];

console.log(prodotti[1], prezzi[1]);

// document.getElementById() recupero una porzione di HTML
let lista = document.getElementById('lista'); // HTMLElement
let subTotale = document.getElementById('subTot');
let iva = document.getElementById('iva');
let totale = document.getElementById('totale');

// Variabile di supporto, inizializzata a 0, che verrà incrementata dal ciclo for
let sommaPrezzi = 0;

for (let i = 0; i < prodotti.length; i++) {
    console.log(prodotti[i], prezzi[i]);

    lista.innerHTML += `<li>${prodotti[i]} ${prezzi[i].toFixed(2)}€</li>`;

    sommaPrezzi += prezzi[i];
}

subTotale.innerHTML = `Subtotale: ${sommaPrezzi.toFixed(2)}€`;

let ivaPagata = sommaPrezzi * 0.22;

iva.innerHTML = `Costo Iva(22%): ${ivaPagata.toFixed(2)}€`;

totale.innerHTML = `<strong>TOTALE: ${((sommaPrezzi + ivaPagata).toFixed(2))}€</strong>`;