function advinhaNumero(){
    var sonicNumero=getRandomInt(4000000)

    var chute= document.getElementById("chute").value
    chute = parseInt(chute)

    var resposta = document.getElementById("resposta")

    if(chute == sonicNumero){
        resposta.innerHTML="VC ACERTOU Reposta sonic: "+sonicNumero
    }else{
        resposta.innerHTML="VC ERROU, Reposta sonic: "+sonicNumero
    }

    

    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  
  // expected output: a number from 0 to <1