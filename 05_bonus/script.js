/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
let date = new Date();

// Dichiara la funzione qui.
function timeBasedGreeting(name, hour) {
    let greeting = "";
    if (hour >= 6 && hour <= 13) {
        greeting = `Buongiorno ${name}`;
    }
    if (hour >= 14 && hour <= 17) {
        greeting = `Buon pomeriggio ${name}`;
    }
    if ((hour >= 18 && hour <= 24) || (hour >= 1 && hour <=5)) {
        greeting = `Buonasera ${name}`;
    }
    return greeting;
}



// Invoca la funzione qui e stampa il risultato in console
console.log(timeBasedGreeting(name, 18));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.