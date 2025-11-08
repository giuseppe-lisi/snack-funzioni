/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.
function timeBasedGreeting(name) {
    let date = new Date().getHours();
    let greeting = "";

    if (date >= 6 && date <= 13) {
        greeting = `Buongiorno ${name}`;
    }
    if (date >= 14 && date <= 17) {
        greeting = `Buon pomeriggio ${name}`;
    }
    if ((date >= 18 && date <= 24) || (date >= 1 && date <=5)) {
        greeting = `Buonasera ${name}`;
    }
    return greeting;
}



// Invoca la funzione qui e stampa il risultato in console
console.log(timeBasedGreeting(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.