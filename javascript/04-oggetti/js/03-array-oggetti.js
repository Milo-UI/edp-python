/*
    Negli array possiamo salvare valori di tutti i tipi, quindi possiamo anche creare degli array di oggetti.

    Quando otteniamo dati da un database, nella maggior parte dei casi riceveremo un array di oggetti. Per esempio, se richiediamo a un database una lista di film, questo ci restituirà un array di oggetti film che avranno le loro proprietà (titolo, durata, anno, attori, refista, ecc ecc).
*/
let user = {
    nome: 'Mario',
    eta: 30,
    email: 'mario@idraulico.it',
    paese: 'Italia',
    post: [
        {
            title: 'Perché saltare in testa ai goomba?',
            likes: 30
        },
        {
            title: 'Come salvare una principessa in 10 passi',
            likes: 50
        }
    ],

    login: function () {
        console.log("L'utente è loggato");
    },
    logout: function () {
        console.log("L'utente non è loggato");
    },
    stampaPost() {
        console.log(`L'utente ${this.nome} ha scritto i seguenti post:`);
        this.post.forEach(post => {
            console.log(post.title, post.likes);
        });
    }
};

user.stampaPost();

/* ------------------------------- esercizio 1 ------------------------------ */
/* 
    Progettare l'array di oggetti canzone, ognuna con le proprietà titolo, band e anno. Fare inserire all'utente una nuova canzone attraverso un prompt. Stampare a console il nuovo oggetto così costruito
*/
let canzoni = [
    {
        titolo: 'Stairway to Heaven',
        band: 'Led Zeppelin',
        anno: '1971'
    },
    {
        titolo: 'Wish You Were Here',
        band: 'Pink Floyd',
        anno: '1975'
    }
];

console.log(canzoni);

// canzoni.push({
//     titolo: prompt('Titolo canzone'),
//     band: prompt('Band canzone'),
//     anno: prompt('Anno canzone')
// });

console.log(canzoni);
console.log(canzoni[canzoni.length - 1]);

/* ------------------------------- Esercizio 2 ------------------------------ */
/*
    Progettare un array di automobili che contiene alcuni oggetti, con le proprietà marca, modello, colore, alimentazione, anno e cavalli.

    - Visualizzare tutti i dati in console
    - Cancellare da tutte le auto la proprietà cavalli (operatore delete)
    - Modificare la proprietà anno solo nelle auto di colore bianco, impostandolo a 2023

    Facoltativo
    - Rimuovere dall'array tutte le macchine di marca Fiat
*/