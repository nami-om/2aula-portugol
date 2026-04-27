//infos
let salario, dias, salarioDiario
//entradas
salario = Number(prompt("Salário: "))
dias = Number(prompt("Dias trabalhados: "))
//processamentos
salarioDiario = salario / dias
//saidas
alert("Salário diário: R$" + salarioDiario.toFixed(2))