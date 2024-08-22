const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operação");
const botao = document.querySelector("#igual");
let resposta = document.querySelector("#resposta");

botao.addEventListener("click",calcular);



function calcular(){

    
    const valor1 = parseInt(campo1.value);
    const valor2 = parseInt(campo2.value);
    const operação = seletor.value;

    

        if(operação==="somar")
            resposta.innerHTML = valor1+valor2;
        if(operação==="subtrair")
            resposta.innerHTML = valor1-valor2;
        if(operação==="multiplicar")
            resposta.innerHTML = valor1*valor2;
        if(operação==="dividir")
            resposta.innerHTML = valor1/valor2;
}


