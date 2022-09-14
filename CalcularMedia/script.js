function CalcularMedia(){

    const nota1 = document.getElementById("valor1").value

    const nota2 = document.getElementById("valor2").value

    const media = (Number(nota1)+Number(nota2))/2


    document.getElementById('media').innerHTML=media
}