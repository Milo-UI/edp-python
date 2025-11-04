/*
    Per non incorrere in errori, problemi di concatenazione tra stringhe e numeri e per semplificarci il lavoro, possiamo utilizzare i template literal.
    Questi ci permettono di iniettare variabili direttamente nelle stringhe senza doverne uscire per concatenarle con +

    Per utilizzarli, invece di usare apici singoli o doppi, scriviamo la stringa all'interno di una coppia di backtick. Se poi vogliamo inserire una variabile all'interno, ci basta richiamarla tra parentesi graffe precedute dal simbolo del dollaro.
    ${nomeVariabile}
*/
let title = 'I migliori giochi del 2025';
let author = 'Mario';
let likes = 30;

// metodo concatenazione
let conc = "L'articolo si chiama '" + title + "', è stato scritto da " + author + " e finora ha raggiunto " + likes + " like.";
console.log(conc);

// template literal
let template = `L'articolo si chiama "${title}", è stato scritto da ${author} e ha raggiunto ${likes} like.`;
console.log(template);

// I template literal sono perfetti per creare template HTML con contenuti dinamici
let htmlTemplate = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>Questo articolo ha ${likes} like</span>`;

console.log(htmlTemplate);
document.write(htmlTemplate);