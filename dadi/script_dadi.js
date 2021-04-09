

var generaNumeri = [numeroPc =Math.floor(Math.random() * 6) + 1 ,numeroUmanoide =Math.floor(Math.random() * 6)+ 1 ]
console.log("nr pc"+" " +numeroPc)
console.log("nr umano"+" "+ numeroUmanoide)



    if(numeroPc < numeroUmanoide ){
        document.getElementById("my_text").innerHTML=("umano vince con" +" "+ numeroUmanoide+ " "+"nr pc " + numeroPc )
    } else if(numeroPc > numeroUmanoide){
        document.getElementById("my_text").innerHTML=("umano perde con" +" "+ numeroUmanoide+ " "+"nr pc vince" + numeroPc )
    }else if(numeroPc === numeroUmanoide){
        document.getElementById("my_text").innerHTML=("umano" +" "+ numeroUmanoide+ " "+"parita"+" "+"nr pc " + numeroPc )
    }
    
   