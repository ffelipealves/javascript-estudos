function converteValor(){
    let comprimento1,comprimento2,valor1,valor2;

    comprimento1 = document.getElementById("comprimentos_1").value;
    comprimento2 = document.getElementById("comprimentos_2").value;
    valor1 = document.getElementById("valor_comprimento_1").value;
    

    //METRO->KILOMETRO, KILOMETRO->METRO
    if(comprimento1=="metro" && comprimento2=="kilometro"){
        valor1=Number(valor1)/1000
        document.getElementById('conversao').innerHTML=valor1
    }
    if(comprimento1=="kilometro" && comprimento2=="metro"){
        valor1=Number(valor1)*1000
        document.getElementById('conversao').innerHTML=valor1
    }

    //METRO --> CENTIMETRO, CENTIMETRO->METRO
    if(comprimento1=="metro" && comprimento2=="centimetro"){
        valor1=Number(valor1)*100
        document.getElementById('conversao').innerHTML=valor1
    }
    if(comprimento1=="centimetro" && comprimento2=="metro"){
        valor1=Number(valor1)/100
        document.getElementById('conversao').innerHTML=valor1
    }

    //KILOMETRO->CENTIMETRO , CENTIMETRO->KILOMETRO
    if(comprimento1=="kilometro" && comprimento2=="centimetro"){
        valor1=Number(valor1)*(1000*100)
        document.getElementById('conversao').innerHTML=valor1
    }
    if(comprimento1=="centimetro" && comprimento2=="kilometro"){
        valor1=Number(valor1)/(1000*100)
        document.getElementById('conversao').innerHTML=valor1
    }
}