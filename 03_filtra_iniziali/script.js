/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
namesInitials = [];

// Dichiara la funzione qui.
// Restituisce solo i nomi che iniziano con l'iniziale passata alla funzione
function getInitials (namesArray, initial) {
    for (let i = 0; i < namesArray.length; i++) {
        if (namesArray[i][0] === initial) {
            namesInitials.push(namesArray[i][0]);
        }
    }
    return namesInitials;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getInitials(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]