/*
    Quando lavoriamo sul DOM e editiamo, cambiamo o eliminiamo contenuti da una pagina web, il primo passo da fare è decidere quali elementi vogliamo selezionare per aggiungergli/rimuovergli contenuti o per cambiarli in qualche modo ed 'entrare' nel DOM per ottenere un riferimento a quegli elementi. Questo è chiamato 'querying del DOM.'

    Salvando in una variabile il riferimento all'elemento HTML che ci interessa, possiamo poi farne ciò che vogliamo. Per farlo richiamiamo l'oggetto document e usiamo il metodo querySelector().
    
    querySelector() va a recuperare la prima occorrenza dell'elemento selezionato tramite il selettore passatogli come argomento. Questo selettore è scritto con sintassi CSS.
*/
// Recupera il primo <p> che incontra nel documento
const paragrafo = document.querySelector('p');

console.log(paragrafo);

// Se volessimo un <p> specifico a cui è stata assegnata una classe:
const errorMessage = document.querySelector('.error');

console.log(errorMessage);

// Se però volessimo un altro elemento che non sia il P, ma che ha anche lui classe error:
const errorMessage2 = document.querySelector('div.error');

console.log(errorMessage2);

/*
    Se però volessimo selezionare tutti gli elementi <p> presenti nella pagina, dobbiamo ricorrere al metodo querySelectorAll(). Questo metodo crea un riferimento a una NodeList che conterrà tutti gli elementi <p> della pagina.

    Una NodeList assomiglia molto a un array, ma non lo è. Però possiamo utilizzare la bracket notation per selezionare un determinato elemento al suo interno (0-based). Come gli array, possiede il metodo forEach().
*/
const paragrafi = document.querySelectorAll('p');

console.log(paragrafi);
console.log(paragrafi[1]);
console.log(paragrafi[2]);

paragrafi.forEach(paragrafo => {
    console.log(paragrafo);
});

const errori = document.querySelectorAll('.error');

console.log(errori);
