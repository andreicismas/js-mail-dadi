// // <!-- Mail
// // Chiedi all’utente la sua email,
//  controlla che sia nella lista di chi può accedere,
// //   stampa un messaggio appropriato sull’esito del controllo. -->

var userMail = prompt("Inserisci la tua mail")

var listaMail = [];

listaMail.push(userMail)


if (userMail === "") {
    alert("non hai inserito nulla")
} else if (!isNaN(userMail)) {
    alert("numeri non ammessi")
} else {
    for (var i = 0; i < listaMail.length; i++) {
        var lista = listaMail[i];

        if (userMail === lista) {
            document.getElementById("my_text").innerHTML = "<em>Bravo hai caricato la mail giusta</em>" + " " + userMail
        }

    }
}