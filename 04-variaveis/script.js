let cont = 0
function implementarContagem(){
    //cont = cont + 1
    //cont += 1
cont++
document.getElementById('p-contagem').innerHTML = cont
}

function diminuirContagem(){
    //cont = cont - 1
    //cont -= 1
cont--
document.getElementById('p-contagem').innerHTML = cont
}

function resetContagem(){
window.location.reload()
// cont = 0
// document.getElementById('p-contagem').innerHTML = cont

}

    //Valor da venda R$  
    let total = 0
    function registrarVenda(){
    let valor = Number(document.getElementById('inputVenda').value)
    //registrar venda no total
    total = total + valor
    //atualizar total na página
    document.getElementById('totalVendido').innerHTML = 'Total de vendas: R$' + total.toFixed(2) 
    //lista de vendas
    document.getElementById('listaVendas').innerHTML += 'R$' + valor.toFixed(2) + '<br>'
    document.getElementById('inputVenda').value = ''
    document.getElementById('inputVenda').focus()
    console.log(valor)

}

let numeroDado, numeroAleatorio
function rolarDadosd4(){
    let numeroDado = document.getElementById('numeroDado')
    numeroAleatorio = Number(Math.ceil(Math.random() * 4))
    document.getElementById('numeroAleatorio').innerHTML + numeroDado
}

    function rolarDadosd4(){
    numeroDado = document.getElementById('numeroDado')
    numeroAleatorio = Number(Math.ceil(Math.random() * 4))
}

    function rolarDadosd4(){
    numeroDado = document.getElementById('numeroDado')
    numeroAleatorio = Number(Math.ceil(Math.random() * 4))
}

    function rolarDadosd4(){
    numeroDado = document.getElementById('numeroDado')
    numeroAleatorio = Number(Math.ceil(Math.random() * 4))

}












//let global = 'eu sou uma variavel global :>'
//function funcao1(){
    //let local = 'Sou uma variavel local :D'
    //console.log(local);
    //console.log(global);
//}
//function funcao2(){
    //console.log(global);
    // console.log(local);
//}