/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const namesInitials = [];


// Dichiara la funzione qui.
function getInitials (namesArray) {
    for (let i = 0; i < namesArray.length; i++) {
        namesInitials.push(names[i][0]);
    }
    return namesInitials;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getInitials(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]