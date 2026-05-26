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

let numeroDado, numeroAleatorio, resultadoGlobal = 0
    numeroDado = document.getElementById('numeroDado')
    function rolarDadosd4(){
    numeroAleatorio = Number(Math.ceil(Math.random() * 4))
    numeroDado.innerHTML = numeroAleatorio
    resultadoGlobal = resultadoGlobal + numeroAleatorio
    document.getElementById('listaDados').innerHTML += 'Lista de dados: ' + numeroAleatorio.toFixed(2) + '<br>'
    document.getElementById('totalDados').innerHTML = 'Total de dados: ' + resultadoGlobal.toFixed(2)
    console.log(numeroDado)
}
    function rolarDadosd6(){
    numeroAleatorio = Number(Math.ceil(Math.random() * 6))
    numeroDado.innerHTML = numeroAleatorio
    resultadoGlobal = resultadoGlobal + numeroAleatorio
    document.getElementById('listaDados').innerHTML += 'Lista de dados: ' + numeroAleatorio.toFixed(2) + '<br>'
    document.getElementById('totalDados').innerHTML = 'Total de dados: ' + resultadoGlobal.toFixed(2)
    console.log(numeroDado)
}
    function rolarDadosd10(){
    numeroAleatorio = Number(Math.ceil(Math.random() * 10))
    numeroDado.innerHTML = numeroAleatorio
    resultadoGlobal = resultadoGlobal + numeroAleatorio
    document.getElementById('listaDados').innerHTML += 'Lista de dados: ' + numeroAleatorio.toFixed(2) + '<br>'
    document.getElementById('totalDados').innerHTML = 'Total de dados: ' + resultadoGlobal.toFixed(2)
    console.log(numeroDado)
}
    function rolarDadosd12(){
    numeroAleatorio = Number(Math.ceil(Math.random() * 12))
    numeroDado.innerHTML = numeroAleatorio
    resultadoGlobal = resultadoGlobal + numeroAleatorio
    document.getElementById('listaDados').innerHTML += 'Lista de dados: ' + numeroAleatorio.toFixed(2) + '<br>'
    document.getElementById('totalDados').innerHTML = 'Total de dados: ' + resultadoGlobal.toFixed(2)
    console.log(numeroDado)
}
    function resetDados(){
    window.location.reload()
}





let numero_aleatorio_aposta
let valor_apostado

    function registrar_aposta(){
    valor_apostado = Number(document.getElementById("input_aposta").value)
    numero_aleatorio_aposta = Math.ceil(Math.random() * 10)
    console.log(numero_aleatorio_aposta)
}

    function botao_espinossauro(){
    if(numero_aleatorio_aposta == 1){
    valor_apostado = valor_apostado * 2
    document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }

}

    function botao_trex(){
    if(numero_aleatorio_aposta == 2){
    valor_apostado = valor_apostado * 2
    document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}

    function botao_braquiossauro(){
    if(numero_aleatorio_aposta == 3){
    valor_apostado = valor_apostado * 2
    document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}

    function botao_velociraptor(){
    if(numero_aleatorio_aposta == 4){
    valor_apostado = valor_apostado * 2
    document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}

    function botao_estegossauro(){
    if(numero_aleatorio_aposta == 5){
    valor_apostado = valor_apostado * 2
    document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}

    function botao_triceratops(){
    if(numero_aleatorio_aposta == 6){
    valor_apostado = valor_apostado * 2
    document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}

    function botao_anquilossauro(){
    if(numero_aleatorio_aposta == 7){
    valor_apostado = valor_apostado * 2
    document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}

    function botao_parassaurolofo(){
    if(numero_aleatorio_aposta == 8){
    valor_apostado = valor_apostado * 2
    document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}

    function botao_alossauro(){
    if(numero_aleatorio_aposta == 9){
    valor_apostado = valor_apostado * 2
    document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}

    function botao_carnotauro(){
    if(numero_aleatorio_aposta == 10){
    valor_apostado = valor_apostado * 2
    document.getElementById("aposta_recebida").innerHTML = ("Valor a receber: R$" + valor_apostado)
    }
}


let valorTotal, valorDoRepasse, valorFaturado, clientes = 0, descontos,faturamentoNormal = 0
    function repasseNormal(){  
    clientes++
    valorTotal = Number(document.getElementById("totalv").value)
    valorDoRepasse = valorTotal * 0.10
    valorFaturado = valorTotal - valorDoRepasse
    faturamentoNormal = valorFaturado + faturamentoNormal
    faturamentoOficina = faturamentoNormal + faturamentoSeg
    document.getElementById("valort").innerHTML = "Valor do recibo: R$" + valorTotal
    document.getElementById("repassec").innerHTML = "Valor do repasse para o Seu Celso: R$" + valorDoRepasse
    document.getElementById("desconto").innerHTML = "Valor faturado: R$" + valorFaturado
    document.getElementById("faturamenton").innerHTML = "Valor total faturado: R$" + faturamentoNormal
    document.getElementById("clientela").innerHTML = "Clientes: " + clientes
    document.getElementById('faturaof').innerHTML = 'Valor Total Faturado da oficina: R$' + faturamentoOficina
        
    if(clientes == 10){
    descontos = valorTotal * 0.05
    valorTotal = valorTotal - descontos
    document.getElementById("desconte").innerHTML = "Valor com 5% de desconto: R$" + valorTotal
    }
    else if(clientes == 11){
    clientes = 1
    document.getElementById("desconte").innerHTML = " "      
    }
            
}
    let faturamentoOficina = 0, faturamentoSeg = 0
    function repasseSeguradoras(){
    let valorSeguradoras, descontoSeg, descontosGlobal
    valorSeguradoras = Number(document.getElementById("totalv").value)
    descontoSeg = valorSeguradoras * 0.3
    descontosGlobal = valorSeguradoras - descontoSeg
    faturamentoSeg = descontosGlobal + faturamentoSeg
    faturamentoOficina = faturamentoNormal + faturamentoSeg
    document.getElementById('totals').innerHTML = "Valor Faturado por Seguradora: R$" + descontosGlobal
    document.getElementById('faturaseg').innerHTML = "Valor Total Faturado por seguradora: R$" + faturamentoSeg
    document.getElementById('faturaof').innerHTML = 'Valor Total Faturado da oficina: R$' + faturamentoOficina
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