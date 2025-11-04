/* 
    Usiamo le stringhe per salvare una serie di lettere, numeri o altri caratteri, come un nome o un indirizzo email.
    Per assegnare una stringa come valore di una variabile, bisogna metterla tra virgolette (o apici)
*/
let stringa = "Sono una stringa!";
console.log(stringa);

// Se la stringa deve contenere a sua volta degli apici (o apostrofi), bisogna far capire che quegli apici fanno parte della stringa e non sono attinenti al codice.
// Un modo è quello di usare il backslash (\), che è un carattere di escape, prima di ogni apertura e chiusura di apici
let url = '<a href="https://www.youtube.com/">Vai a YouTube</a>';
let nomeLibro = "L'uomo del boh";
console.log(url, nomeLibro);

/*
    ALTRI UTILIZZI DEL CARATTERE DI ESCAPE
    \'  apostrofo o apice singolo
    \"  apici doppi
    \\  backslash
    \r  a capo
*/

/*
    Se volessimo unire più stringhe tra loro, possiamo usare quella che si chiama concatenazione e per farlo usiamo l'operatore di concatenazione +
*/
let ourString = "Io vengo prima. " + "Io vengo dopo.";
console.log(ourString);

// Possiamo usare l'operatore += per concatenare stringhe
let stringaConc = "Io vengo prima. ";
stringaConc += "Io vengo dopo."
console.log(stringaConc);

// Si possono quindi anche ottenere delle stringhe concatenando solo le variabili che contengono stringhe
let aggettivo = "fantastico!!";
let intro = "JavaScript è ";
console.log(intro += aggettivo);

// È possibile calcolare la lunghezza di una stringa utilizzando la proprietà .length
let firstNameLength = 0;
let firstName = 'Agamennone';

firstNameLength = firstName.length; // Dot notation
console.log(firstNameLength);
console.log(typeof firstNameLength);

// Se invece volessimo ricavare la prima lettera di una stringa possiamo utilizzare la bracket notation
let firstLetterOfFirstName = firstName[9] // le stringhe sono 0-based, quindi si inizia a contare da 0 e non da 1. Se avessimo voluto prendere la terza lettera, avremmo dovuto scrivere firstName[2]
console.log(firstLetterOfFirstName);

// Se invece volessimo trovare l'ultimo carattere di una stringa anche se non ne conosciamo la lunghezza esatta:
let nome = 'Daniele';
let lastLetterOfName = nome[nome.length - 1] // -1 perché si parte a contare da 0
console.log(lastLetterOfName);

/* ----------------------------- Metodi stringhe ---------------------------- */
let txt = "Oggi ho svolto 12 ore di lezione";

// Metodi di ricerca
let search1 = txt.indexOf('12') // restituisce l'indice in cui la parola inizia
console.log(search1);

let search2 = txt.lastIndexOf('e'); // restituisce l'indice dell'ultima occorrenza
console.log(search2);

let search3 = txt.charAt(3); // restituisce il carattere in quella posizione
console.log(search3);

let search4 = txt.indexOf("s"); // restituisce l'indice e se il carattere non esiste -1
console.log(search4);

// Metodi per il taglio
let testo = 'Sono le 19:30 e tutto va bene';

// I metodi slice() e substring() estraggono una sezione della stringa e la restituiscono come una nuova stringa senza modificare l'originale
let taglio1 = testo.slice(4, 10);
console.log(taglio1);

let taglio2 = testo.substring(4, 10);
console.log(taglio2);

// Metodi per sostituzione
let affermazione = 'Il miglior browser del mondo è Internet Explorer';

// Il metodo replace() restituisce una nuova stringa rimpiazzando tutte le ricorrenze del pattern dato con una sostituzione
let sost = affermazione.replace('Internet Explorer', 'Google Chrome');
console.log(sost);

// Il metodo toUpperCase() converte tutti i caratteri in maiuscolo
let upp = affermazione.toUpperCase();
console.log(upp);

// Il metodo toLowerCase() converte tutti i caratteri in minuscolo
let low = affermazione.toLowerCase();
console.log(low);

// Il metodo split() divide una stringa in una lista ordinata di sotto-stringhe, le raggruppa in un array e restituisce questo array. La divisione avviene cercando un pattern fornito come argomento tra le parentesi del metodo e indica dove il metodo dene andare a separare.
let frase = 'Ciao mi chiamo Milo!';

// Fornendo come pattern una stringa vuota, il metodo separa ogni singolo carattere, spazi compresi
let arr1 = frase.split('');
console.log(arr1);

// Se come pattern si fornisce uno spazio, il metodo separerà ogni volta che trova uno spazio (parola per parola)
let arr2 = frase.split(' ');
console.log(arr2);

// Se si parte invece da un array di stringhe, con il metodo join() è possibile ottenere una stringa  unica che concatena tutti gli elementi dell'array separati da virgole oppure dal carattere specificato come argomento del metodo
let arr3 = ['M', 'I', 'L', 'O'];


// join('') ha come parametro una stringa vuota, quindi restituirà una stringa che concatena gli elementi dell'array senza alcun tipo di separazione
let string = arr3.join('');
console.log(string);

/* -------------------------------------------------------------------------- */
/*                                  ESERCIZI                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- Esercizio 1 ------------------------------ */
// Salvare un nome in una variabile e stamparlo in console senza l'iniziale
let mioNome = "Milo";
console.log(mioNome.substring(1));

/* ------------------------------- Esercizio 2 ------------------------------ */
// Data una stringa, stamparla in console al contrario
// Punti in più se risolta in 2 righe massimo, compreso il console.log()
let strEs = "Itopi non avevano nipoti";
let fraseAlContrario = strEs.split("").reverse().join("");
console.log(fraseAlContrario);

/* ------------------------------- Esercizio 3 ------------------------------ */
// Elabora uno script per estrarre l'estensione di un file indipendentemente dalla sua lunghezza
// "immagineBG.jpg" -> "L'estensione del file è: jpg"
let nomeFile = "immagine.min.css";

console.log("L'estensione del file è: " + nomeFile.slice(nomeFile.lastIndexOf('.')));

let estensione = nomeFile.split('.').pop();
console.log("L'estensione del file è: " + estensione);

/* ------------------------------- Esercizio 4 ------------------------------ */
// Elabora uno script per fare la seguente manipolazione:
// oggi sono a lezione -> Oggi Sono A Lezione
// Uppercase della prima lettera di ogni singola parola
let sentence = 'oggi sono a lezione';

let fraseArray = sentence.split(' ');
let nuovaFrase = "";

for (let i = 0; i < fraseArray.length; i++) {
    let inizialeMaiusc = fraseArray[i][0].toUpperCase();

    let restoParola = fraseArray[i].substring(1);

    nuovaFrase += inizialeMaiusc + restoParola + ' ';
}

console.log(nuovaFrase);