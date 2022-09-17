function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
////////////////////////////////////////////////////
var sonicNumero
var tentativas
var resposta = document.getElementById("resposta")
var elementoTentativa = document.getElementById('tentativas')
var elementoChute = document.getElementById('chute')
document.getElementById("resetar").style.display='none'
////////////////////////////////////////////////////


function sonicPensaNumero(){
    sonicNumero=getRandomInt(3)
}


function iniciaJogo(){
    
    sonicPensaNumero()
    tentativas = 5
    document.getElementById("iniciar").style.display='none'
    document.getElementById("telaprincipal").style.display='block'
    elementoTentativa.innerHTML="Tentativas "+tentativas

}

function chutaNumero(){

    
    
    var chute= parseInt(document.getElementById("chute").value)
    if(chute>sonicNumero){
        resposta.innerHTML="Dica: Tente um numero menor"
    }else if(chute<sonicNumero){
        resposta.innerHTML="Dica: Tente um numero maior"
    }else{
        resposta.innerHTML=""
    }

    if(chute == sonicNumero){
        fimDeJogo(tentativas)
    }else{
        tentativas-=1
    }
    if(tentativas==0){
        fimDeJogo(tentativas)
    }
    elementoChute.value=''
    elementoTentativa.innerHTML="Tentativas "+tentativas
}

function fimDeJogo(x){

    if(x==0){
        resposta.style.color="red"
        resposta.innerHTML="VC PERDEU, Reposta sonic: "+sonicNumero
        document.getElementById("chute").style.display='none'
        document.getElementById("botao_chute").style.display='none'
        elementoTentativa.style.color="black"
        elementoTentativa.innerHTML="Quer jogar novamente ?"
        document.getElementById("resetar").style.display='block'
    }else{
        resposta.style.color="green"
        resposta.innerHTML="VC ACERTOU Reposta sonic: "+sonicNumero
        document.getElementById("chute").style.display='none'
        document.getElementById("botao_chute").style.display='none'
        elementoTentativa.style.color="black"
        elementoTentativa.innerHTML="Quer jogar novamente ?"
        document.getElementById("resetar").style.display='block'
    }
}

