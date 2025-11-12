// Seleziono l'elemento con ID 'demo'
let elemento = document.getElementById('demo');

// Modifico il contenuto dell'elemento
// elemento.innerHTML = 'IL MIO TESTO È CAMBIATO';

// Modifica il contenuto dell'elemento al click di un bottone
function cambiaTesto() {
    elemento.innerHTML = 'IL MIO TESTO È CAMBIATO';
}

let btn = document.getElementById('btn');

// Facciamo si che il bottone registri l'azione del click dell'utente per lanciare una funzione
btn.addEventListener('click', cambiaTesto)