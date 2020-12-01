/* js-simon


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



//Un alert espone 5 numeri casuali diversi.
while (RandomNumbersList.length < 5) {
    //inserisco solo se il numero non è già presente nell'array
    RandomNum = genRandomNumbers(1, 500);
    var cerca = presenteInArray(RandomNumbersList, RandomNum);
    if (cerca == false) {
      RandomNumbersList.push(RandomNum);
    }
  }


console.log(RandomNumbersList);
document.getElementById("NumeriDaRicordare").innerHTML = "Ciao cerca di memorizzare questi cinque numeri, hai 30 secondi da adesso per farlo." + " " + RandomNumbersList;





//Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
$("#NumeriDaRicordare").hide(50000);
setTimeout(Timer, 30000);


function Timer() {
    for ( var i = 0; i <5 ; i++) {
//chiedo all'utente di inserire i numeri che si ricorda
  
    numeroUtentePrompt = Number(prompt("inserisci i numeri che ricordi"));
    for (var x = 0; x < RandomNumbersList.length; x++) {
//se il numero dell'utente è uguale a uno dei numeri presenti nell'array dei RandomNumbersList allora lo inserisco nell'array.
        if (numeroUtentePrompt == RandomNumbersList[x]) {

    NumeriUtenteList.push(numeroUtentePrompt);
    console.log(NumeriUtenteList)
}
}
}
alert("Hai indovinato " + NumeriUtenteList.length + " numeri. Esattamente i numeri: " + NumeriUtenteList)
console.log(listaNumeriPrompt)
}







//  !!!!!!!  Funzioni generiche per l'esercizio  !!!!!!!

//Funzione che genera numeri random
function genRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

//funzione che cerca in un array

function presenteInArray(array, element) {
    var i = 0;
    var result = false;
    while (i < array.length && result == false) {
      if (array[i] == element) {
        result = true;
      }
      i++;1
    }
    return result;
  
  }