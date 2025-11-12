/*
    I parametri di una funzione sono dei segnaposto che verranno poi valorizzati quando la funzione viene chiamata
*/
const saluta = function (name) { // variabile locale che possiamo usare nel blocco della funzione
    console.log(`Buongiorno ${name}!`);
};

saluta('Dario'); // Passo il valore di name quando richiamo la funzione -> argomento

const salutaMeglio = function (name, time) { // Separiamo i parametri con le virgole
    console.log(`${time} ${name}!`);
};

salutaMeglio('Dario', 'Buonasera'); // L'ordine è importante

// Se richiamiamo una funzione che richiede dei parametri senza passrle degli argomenti, i parametri assumono il valore di undefined. Per evitare che succeda, possiamo assegnare dei valori di default
const salutaSicuro = function (name = 'Utente', time = 'Salve') {
    console.log(`${time} ${name}!`);
};

salutaSicuro(); // Se non passiamo argomenti, la funzione assegnerà i valori di default
salutaSicuro("Paola", 'Buon pomeriggio'); // Se passo degli argomenti, questi sovrascriveranno quelli di default

/*
    - Un parametro è la variabile elencata tra parentesi tonde nella dichiarazione della funzione (fa parte della dichiarazione).
    - Un argomento è il valore passato alla funzione quando viene chiamata (fa parte della chiamata)
*/