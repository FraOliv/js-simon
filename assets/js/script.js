/* js-simon
Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzae il programma.
Daje, che la foza sia con voi */

var RandomNumbersList = [];
var NumeriUtenteList = [];
var numeroUtentePrompt;
var RandomNum;

for ( var i = 0; i <5 ; i++) {
    RandomNum = genRandomNumbers(1,500);
    console.log(RandomNum);
    RandomNumbersList.push(RandomNum);
}
console.log(RandomNumbersList);
alert ("Ciao cerca di memorizzare questi cinque numeri, hai 30 secondi da adesso per farlo." + " " + RandomNumbersList)


function genRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
