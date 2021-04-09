var mailList = ["nmurazik@hotmail.com" ,"deckow.alexie@bins.biz","alisha65@hammes.org","konopelski.layla@pouros.org","doyle.flavie@yahoo.com","dominic.kunde@adams.net","evans.walker@gmail.com","homenick.flo@hotmail.com","telly.stroman@smith.org","flatley.curt@robel.com" ];
console.log(mailList)

mailList.push("andrei_cismas@yahoo.it")

console.log(mailList)

var yourMail =prompt("inserisci la tua mail " );
// console.log("questa e la mail del cliente " +" "+  yourMail)

// if (yourMail === "" || yourMail < 1 || yourMail > mailList.length){
//     alert("inserisci una mail valore valida ")
// }

var mailPresente = false

for (var i = 0; i < mailList.length; i++){
    var mailListLog = mailList[i]

    if(mailListLog === yourMail){
        mailPresente =true
        console.log("la tua mail e corretta" +i)
        document.getElementById("my_text").innerHTML=("Bravo hai caricato la mail giusta")
    }
}

if(!mailPresente){
    alert("mail non valida -prova- (andrei_cismas@yahoo.it)")
}


