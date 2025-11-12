/*
    Le arrow function sono funzioni scritte in maniera più moderna e concisa, rendendo il codice più breve e leggibile
*/
// const calcArea = function (raggio) {
//     return 3.14 * raggio ** 2;
// };

// Non abbiamo bisogno della parola chiave, ma aggiungiamo una freccia dopo i parametri
// const calcArea = (raggio) => {
//     return 3.14 * raggio ** 2;
// };

// Se abbiamo un solo parametro, possiamo omettere le parentesi tonde. Sono OBBLIGATORIE quando abbiamo più parametri o quando non ne abbiamo proprio
// const calcArea = raggio => {
//     return 3.14 * raggio ** 2;
// };

// Possiamo anche liberarci della parola chiave return e delle parentesi graffe, portando il blocco di codice sulla stessa linea della dichiarazione, ma solo quando abbiamo un semplice return statement
const calcArea = raggio => 3.14 * raggio ** 2;

const area = calcArea(5);
console.log(`L'area è di: ${area}`);

// Altro esempio
// const saluta = function() {
//     return 'Ciaaaaaao!';
// }

const saluta = () => 'Ciaaaaaao!';
const saluto = saluta();
console.log(saluto);

