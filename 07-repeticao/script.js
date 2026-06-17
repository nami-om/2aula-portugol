//let contador = 0

//while(contador < 10){ //inicializacao
    //alert("Contador: " + contador) //condicao de repeticao
    
    //contador++ //contagem
//}//voltar e testar novamente 

//lert ("Não é menor")

// let peso


// let contador = 0
// while(contador < 10){
//     peso = Number(prompt("Digite o peso:"))
//     if(peso>1.1 || peso<0.9){
//         alert("Fora tolerancia do peso")
//     }
//     contador++
// }

// let i = 0 // inicializacao
// while(i <  3){ // condicao de repeticao
//     i++ // contagem
//     let preco = Number(prompt("Digete o preço: " + i + "° produto:"))
// }

let i = 0
function exercicio1(){
let contador = 0
while(contador < 10){
    contador++
    alert("Ao quadrado: " + contador)
    i = contador * contador
    alert(i)
}
}

function exercicio2(){
let contador = 11
while(contador > 0){
    contador--
    alert("Valor: " + contador)
}
}

function exercicio3(){
let soma = 0
while(i < 100){
    i++
    soma = soma + i
    console.log(soma);
    alert(soma)
}
}

function exercicio4(){
let tabuada = 5
let contador = 0, total
while(contador < 10){
    contador++
    total = tabuada * contador
    alert(total)
}
}

function exercicio5(){
let tabuada = 0
let contador = 0, total
tabuada = Number(prompt("Escreva o número que deseja: "))
while(contador < 10){
    contador++
    total = tabuada * contador
    alert(total)
}
}

function exercicio6(){
    let i = 1
while(i < 20){
    console.log(i);
    i+=2
}
}

function exercicio7(){
let contador = 11
while(contador > 0){
    contador--
    alert("Valor: " + contador)
}
}
