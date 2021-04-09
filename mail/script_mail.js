// lista array mail's

var mailList = ["nmurazik@hotmail.com" ,"deckow.alexie@bins.biz","alisha65@hammes.org","konopelski.layla@pouros.org","doyle.flavie@yahoo.com","dominic.kunde@adams.net","evans.walker@gmail.com","homenick.flo@hotmail.com","telly.stroman@smith.org","flatley.curt@robel.com" ];
console.log(mailList)

// add  outher item to arrray
mailList.push("andrei_cismas@yahoo.it")
console.log(mailList)

// add client mail-
var yourMail =prompt("inserisci la tua mail " );

//  boolean valeu  false/true
var mailPresente = false

// cycle for
for (var i = 0; i < mailList.length; i++){
    var mailListLog = mailList[i]

    if(mailListLog === yourMail){
        mailPresente =true
        console.log("la tua mail e corretta" +i)
        document.getElementById("my_text").innerHTML=("Bravo hai caricato la mail giusta")
    }
}

// alert mail error

if(!mailPresente){
    alert("mail non valida -prova- (andrei_cismas@yahoo.it)")
}


