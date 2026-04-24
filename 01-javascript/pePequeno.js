//infos
let preco, quantidade
let valorTotal
//leituras
quantidade = Number(prompt("Quantidade: "))
preco = Number(prompt("Preço:"))
//processamentos
valorTotal = quantidade * preco
//saidas
console.log("Valor a receber: R$" + valorTotal.toFixed(2))