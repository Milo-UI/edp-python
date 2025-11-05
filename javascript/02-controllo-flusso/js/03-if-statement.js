/*
    Un if statement viene usato per prendere decisioni all'interno del codice:
        la parola chiave if dice allo script di eseguire un blocco di codice che si trova tra le graffe se viene rispettata la condizione riportate tra le tonde.

    Se in una funzione si passa un booleano come condizione, la funzione eseguirà il blocco di codice dell'if se true, altrimenti eseguirà ciò che viene dopo.
*/
let age = 20;

if (age > 20) {
    console.log('Tu hai più di 20 anni');
}

// Possiamo usare un if statement per controllare dati
const students = ['Sam', 'Erica', 'Sandro'];

if (students.length > 2) {
    console.log('Abbiamo più di due studenti!!!');
}

/* --------------------------------- if else -------------------------------- */
// Grazie a else possiamo aggiungere un blocco di codice da eseguire nel caso in cui la condizione non venga rispettata
const password = 'password1';

if (password.length > 8) {
    console.log('La tua password è abbastanza lunga');
} else {
    console.log('La tua password deve essere di almeno 8 caratteri');
}

/* --------------------------------- else if -------------------------------- */
// Quando abbiamo la necessità di controllare molteplici condizioni, possiamo ricorrere all'uso di else if
const username = 'bohchenesoio!';

if (username.length > 12) {
    console.log('Lo username non deve superare i 12 caratteri');
} else if (username.length >= 8) {
    console.log('Il tuo username è perfetto!');
} else {
    console.log('Lo username deve essere di almeno 8 caratteri');
}

/* --------------------------- operatore ternario --------------------------- */
/*
    L'operatore ternario è un modo conciso di scrivere una condizione che restituisce uno dei due valori in base a una valutazione booleana. Viene usato come alternativa compatta all'istruzione if-else, ma solo quando si hanno due opzioni.

    condizione ? valoreSeVero : valoreSeFalso;
*/
let eta = 18;
let stato = (eta >= 18) ? "Maggiorenne" : "Minorenne";
console.log(stato);
