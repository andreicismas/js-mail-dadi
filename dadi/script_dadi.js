
// array numeri per pc e umano random 
var generaNumeri = [numeroPc =Math.floor(Math.random() * 6) + 1 ,numeroUmanoide =Math.floor(Math.random() * 6)+ 1 ]
// valori in console
console.log("nr pc"+" " +numeroPc + " " +"'pc vince'"+" "+(numeroPc > numeroUmanoide ))

console.log("nr umano"+" "+ numeroUmanoide +" " + "'umano vince'"+" "+(numeroPc < numeroUmanoide +" "+(numeroPc > numeroUmanoide )))

console.log(" 'parita' "+(numeroPc === numeroUmanoide))

// i valori output html

    if(numeroPc < numeroUmanoide ){
        document.getElementById("my_text").innerHTML=("<em>umano vince con</em>" +" "+ numeroUmanoide+ " "+"nr pc " + numeroPc )
    } else if(numeroPc > numeroUmanoide){
        document.getElementById("my_text").innerHTML=("umano perde con" +" "+ numeroUmanoide+ " "+"<em>nr pc vince</em>" +" "+ numeroPc )
    }else if(numeroPc === numeroUmanoide){
        document.getElementById("my_text").innerHTML=("umano" +" "+ numeroUmanoide+ " "+"<em>partita pari</em>"+"  "+"nr pc " + numeroPc )
    }
    
   