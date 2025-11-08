/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function getNumOfVowels(str) {
    let vocali = ['a', 'e', 'i', 'o', 'u'];
    let vowelNum = 0;
    for (let i = 0; i < str.length; i++) {
        if (vocali.includes(str[i])) {
            vowelNum++;
        }
    }
    return vowelNum;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getNumOfVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)