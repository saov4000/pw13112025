//pega o valor digitado no input e guarda em nome
//declara a variável nome
let valor1;
let valor2;
let resultado;

function calcular() {
    valor1 = parseInt(document.getElementById("valor1").value);
    valor2 = parseInt(document.getElementById("valor2").value);
    resultado = valor1+valor2;
    document.getElementById("resultado").innerHTML = resultado; 
}