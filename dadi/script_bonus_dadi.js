// <!-- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? -->

// array vuoto
var numeriGenerati = [];
// nr utente random 
var numeroUtente = Math.ceil(Math.random() * 6);
// nr pc random 
var numeroPc = Math.ceil(Math.random() * 6);
// push in array numeriGenerati
numeriGenerati.push("nr utente" + " " + numeroUtente, "nr pc" + " " + numeroPc);

console.log(numeriGenerati);

// var vincitore = false

var risultato = numeroUtente + numeroPc
console.log(risultato);

for (var i = 0; i < numeriGenerati.length; i++) {

    if (numeroPc > numeroUtente) {
        console.log("il PC ha vinto  con il nr " + " " + numeroPc);
        document.getElementById("my_text").innerHTML="il PC ha vinto  con il nr " + " " + numeroPc
    } else if (numeroPc < numeroUtente) {
        console.log("L'utente ha vinto  con il nr " + " " + numeroUtente);
        document.getElementById("my_text").innerHTML ="L'utente ha vinto  con il nr " + " " + numeroUtente

    } else {
        console.log("Pareggio!! " + " " + numeroUtente + " " + numeroPc);
        document.getElementById("my_text").innerHTML="Pareggio!! " + " " + numeroUtente + " " + numeroPc

    }

}



