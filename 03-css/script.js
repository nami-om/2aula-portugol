function calcularPrecoBrique(){
     let precoCompra, precoVenda
    precoCompra = Number(prompt("Preço de compra: "))
    precoVenda = precoCompra * 3
    console.log("Preço para venda: R$" + precoVenda.toFixed(2));
    alert("Preço para venda: R$" + precoVenda.toFixed(2))
    document.getElementById("resultado").innerHTML = "Preço para venda: R$" + precoVenda.toFixed(2)
}

 let resposta = document.getElementById('resultado')
 function verificarIdade(){
 let idade
 idade = Number(prompt("Digite sua idade: "))
 if(idade >= 18){
    resposta.innerHTML = "Você é maior de idade"
 }else{
    resposta.innerHTML = "Você é menor de idade"
 }
 }

function salarioHoras(){
 let id, horasTrabalhadas, valorHora, salario
 id = Number(prompt("Id funcionário: "))
 horasTrabalhadas = Number(prompt("Quantidade de horas trabalhadas: "))
 valorHora = Number(prompt("Valor hora: "))
 salario = horasTrabalhadas * valorHora
 console.log("NUMBER = " + id.toFixed(2))
 console.log("Sálario é: R$" + salario.toFixed(2))
 document.getElementById("resultado").innerHTML = "<br>Salario: R$ " + salario.toFixed(2) + "<br>ID: " + id.toFixed()
}

function salarioBonus(){
    let salario, total, vendas, comissao
    comissao = 15/100
    salario = Number(prompt("Nos informe o salário base dele: "))
    vendas = Number(prompt("Quantas vendas foram realizadas por ele no mês? "))
    total = vendas * comissao + salario
    console.log("TOTAL: R$ " + total.toFixed(2))
    document.getElementById("resultado").innerHTML = "Total: R$" + total.toFixed(2)
}

function mostrarDiaDaSemana(){
    let numero, dia
    numero = Number(prompt("Digite o número: "))
    if(numero == 1){
        dia = "Domingo"
    }else if(numero == 2){
        dia = "Segunda"
    }else if(numero == 3){
        dia = "Terça"
    }else if(numero == 4){
        dia = "Quarta"
    }else if(numero == 5){
        dia = "Quinta"
    }else if(numero == 6){
        dia = "Sexta"
    }else if(numero == 7){
        dia = "Sábado"
    }else{
        dia = "Erro #404, dia não existente"
    }
    document.getElementById('resultado').innerHTML = dia
}

function adivinharNumero(){
    let numero = Math.ceil(Math.random()*3)
    let chute = Number(prompt("Fale um número: "))
    if(chute == numero){
        resposta.innerHTML = "Acertou!"
    }else{
        resposta.innerHTML = "Errou!"
    }
}

function numeroImparEPar(){
    numero = Number(prompt("Digite o número: "))
    if(numero%2 == 0){
        alert("é par")
    }else{
        alert("é impar")
    }
}

function calculoDasPecas(){
    let numePecaUm, codPecaUm,codPecaDois,numePecaDois, uniPecaUm,uniPecaDois,valorPecaDois,valorSerPago,valorPecaUm
    codPecaUm = Number(prompt("POR FAVOR, ESCREVA O CÓDIGO DA PEÇA 1 QUE DESEJA: "))
    numePecaUm = Number(prompt("E QUANTAS PEÇAS GOSTARIA? "))
    uniPecaUm = Number(prompt("A UNIDADE DA PEÇA 1 ESTÁ R$ "))
    codPecaDois = Number(prompt("E QUAL É O CÓDIGO DA PEÇA 2 QUE DESEJA? "))
    numePecaDois = Number(prompt("E QUANTAS PEÇAS GOSTARIA? "))
    uniPecaDois = Number(prompt("A UNIDADE DA PEÇA 2 ESTÁ R$ "))
    valorPecaDois = numePecaDois * uniPecaDois
    valorPecaUm = numePecaUm * uniPecaUm
    valorSerPago = valorPecaDois + valorPecaUm
    console.log("TOTAL: R$ " + valorSerPago.toFixed(2))
    document.getElementById("resultado").innerHTML = "Total: R$" + total.toFixed(2)
}

function revelarRecreio(){
    document.getElementById('resultado').innerHTML = '<br>Início: 20:30</br>' + '<br>Fim: 20:45</br>' + '<br>Chamada: 20:50</br>'
}

function consumoCombustivel(){
    let distancia, combustivel, consumoMedio
    distancia = Number(prompt("Qual a distância total percorrida? "))
    combustivel = Number(prompt("Quanto de combustível foi gasto? "))
    consumoMedio = distancia / combustivel
    console.log("Consumo médio: " + consumoMedio.toFixed(3))
    document.getElementById('resultado').innerHTML = "Consumo médio total: " + consumoMedio.toFixed(3)
}

function cedulas(){
    let valorTotal100,valorTotal50,valorTotal20, valorTotal10,valorTotal5,valorTotal2,valorTotal1,valorTotal
    valorTotal = Number(prompt("Qual o valor? "))
    //notas de 100
    valorTotal100 = valorTotal / 100
    valorTotal = valorTotal % 100
    //notas de 50
    valorTotal50 = valorTotal / 50
    valorTotal = valorTotal % 50
    //notas de 20
    valorTotal20 = valorTotal / 20
    valorTotal = valorTotal % 20
    //notas de 10
    valorTotal10 = valorTotal / 10
    valorTotal = valorTotal % 10
    //notas de 5
    valorTotal5 = valorTotal / 5
    valorTotal = valorTotal % 5
    //notas de 2
    valorTotal2 = valorTotal / 2
    valorTotal = valorTotal % 2
    //notas de 1
    valorTotal1 = valorTotal / 1
    valorTotal = valorTotal % 1
    document.getElementById('resultado').innerHTML = "Cédulas de 100: " + valorTotal100 + "Cédulas de 50: " + valorTotal50 + "Cédulas de 20: " + valorTotal20 + "Cédulas de 10: " + valorTotal10 + "Cédulas de 5: " + valorTotal5 + "Cédulas de 2: " + valorTotal2 + "Cédulas de 1: " + valorTotal1
}
