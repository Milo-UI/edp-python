/* 
    ES1 Scrivi una funzione javascript che accetti due argomenti, una stringa e una lettera. La funzione conterà il numero di occorrenze della specifica lettera nella stringa

    Es2 Scrivi una funzione javascript che accetta un “argomento” e ritorna il tipo di dato: oggetto, funzione, stringa, numero, undefined.

    Es3 Scrivi una funzione javascript che accetta una stringa come parametro e trova la parola più lunga all’interno della frase. Es (mi chiamo Massimiliano -> Massimiliano).

    Es4 Scrivi un programma che accetta (da finestra) un numero come input e inserisce un dash (-) tra due numeri pari. Es ( 823486 -> 8-234-8-6 )

    Es5 Scrivi una funzione javascript che rimuova gli elementi duplicati da un array.

    Es6 Dati due array, calcolare la somma degli elementi presenti allo stesso indice. Esempio:
    array1 = [1,0,2,4,6]
    array2 = [0,4,5,8,7]
    Output = [1,4,7,12,13]

    Es7 Scrivi una funzione che stampa a console tutti i numeri interi di un dato intervallo. Per i multipli di 3 stamperà *Zoom! mentre per i multipli di 5 stamperà *Boom!. Controlla anche il caso in cui il numero è divisibile sia per 3 che per 5.
*/
/* ----------------------------------- ES1 ---------------------------------- */
function contaOccorrenze(stringa, lettera) {
    // Controlla se la lettera è un singolo carattere
    if (lettera.length !== 1) {
        return "Devi fornire una sola lettera.";
    }

    let conteggio = 0;

    for (let i = 0; i < stringa.length; i++) {
        // Incrementiamo il conteggio se la lettera corrente è uguale alla lettera
        if (stringa[i] === lettera) {
            conteggio++;
        }
    }

    return `La lettera "${lettera}" si ripete ${conteggio} volte nella parola "${stringa}"`;
}

let risultato = contaOccorrenze("banana", "a");
console.log(risultato);

/* ----------------------------------- ES2 ---------------------------------- */
function trovaTipoDato(dato) {
    // Controllo se il dato è null
    if (dato === null) {
        return "Questo dato è di tipo null";
    }

    // Usiamo typeof per determinare il tipo
    let tipo = typeof dato;

    return `Questo dato è di tipo ${tipo}`;
}

console.log(trovaTipoDato(42));
console.log(trovaTipoDato('Ciao'));
console.log(trovaTipoDato(true));
console.log(trovaTipoDato(trovaTipoDato));
console.log(trovaTipoDato(undefined));
console.log(trovaTipoDato(null));
console.log(trovaTipoDato({}));
console.log(trovaTipoDato([]));

/* ----------------------------------- ES3 ---------------------------------- */
function parolaPiuLunga(frase) {
    // Divido la frase in parole usando uno spazio come delimitatore
    let parole = frase.split(' ');

    // Inizializzo una variabile per contenere la parola più lunga
    let parolaMax = '';

    for (let i = 0; i < parole.length; i++) {
        // Controllo se la lunghezza della parola corrente è maggiore della parolaMax
        if (parole[i].length > parolaMax.length) {
            parolaMax = parole[i];
        }
    }

    return parolaMax;
}

let parolaLunga = parolaPiuLunga('mi chiamo Massimiliano');
console.log(`La parola più lunga nella frase è "${parolaLunga}"`);

/* ----------------------------------- ES4 ---------------------------------- */
function inserisciDash(numero) {
    // Converto il numero in una stringa
    let numeroStr = numero.toString();
    let risultato = '';

    // Itero attraverso ogni carattere della stringa
    for (let i = 0; i < numeroStr.length; i++) {
        // Aggiungo il carattere corrente al risultato
        risultato += numeroStr[i];

        // Controllo se il carattere corrente e quello successivo sono numeri pari
        if (numeroStr[i] % 2 === 0 && numeroStr[i + 1] % 2 === 0) {
            risultato += '-';
        }
    }

    return risultato;
}

// let input = prompt('Inserisci un numero:')
let numeroSuddiviso = inserisciDash(8674524982);
console.log(numeroSuddiviso); // 8-67452-498-2

/* ----------------------------------- ES5 ---------------------------------- */
function rimuoviDuplicati(array) {
    // Creo nuovo array per memorizzare i valori unici
    let senzaDuplicati = [];

    for (let i = 0; i < array.length; i++) {
        // Controllo se l'elemento non è già presente nel nuovo array
        if (!senzaDuplicati.includes(array[i])) {
            senzaDuplicati.push(array[i])
        }
    }

    return senzaDuplicati;
}

let arrayOriginale = [1, 2, 2, 3, 4, 4, 5];
let arraySenzaDuplicati = rimuoviDuplicati(arrayOriginale);
console.log(arraySenzaDuplicati); // Output: [1, 2, 3, 4, 5]

/* ----------------------------------- ES6 ---------------------------------- */
function sommaArray(array1, array2) {
    // Creo un nuovo array per memorizzare i risultati
    let somma = [];

    for (let i = 0; i < array1.length; i++) {
        somma.push(array1[i] + array2[i]);
    }

    return somma;
}

let array1 = [1, 0, 2, 4, 6]
let array2 = [0, 4, 5, 8, 7]
let arraySommati = sommaArray(array1, array2);
console.log(arraySommati);

/* ----------------------------------- ES7 ---------------------------------- */
function stampaZoomBoom(inizio, fine) {
    for (let i = inizio; i <= fine; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("*ZoomBoom!");
        } else if (i % 3 === 0) {
            console.log("*Zoom!");
        } else if (i % 5 === 0) {
            console.log("*Boom!");
        } else {
            console.log(i); // Stampa il numero se non è multiplo di 3 o 5
        }
    }
}

stampaZoomBoom(1, 15);