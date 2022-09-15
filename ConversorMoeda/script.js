function Converte(){
     
    var valorMoeda = parseFloat(document.getElementById("moeda").value)

    var valorEmReais=(valorMoeda/5.24).toFixed(2)

    var conversaoTexto = document.getElementById("convertido")

    conversaoTexto.innerHTML = "Seu valor em reais eh "+valorEmReais+" R$"


    //document.getElementById
    //basicamente esse cara pega o que for do html que tenha o ID especificado

    //innerHTML
    //eh literalmente entre o HTML vai usar o que foi pegue pelo getElement manipular o que tem dentro da tag/ID referido

}