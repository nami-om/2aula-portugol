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