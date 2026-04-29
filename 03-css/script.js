function calcularPrecoBrique(){
    //infos
     let precoCompra, precoVenda
    //leituras
    precoCompra = Number(prompt("Preço de compra: "))
    //processamento
    precoVenda = precoCompra * 3
    //saidas
    console.log("Preço para venda: R$" + precoVenda.toFixed(2));
    alert("Preço para venda: R$" + precoVenda.toFixed(2))

    document.getElementById("resultado").innerHTML = "Preço para venda: R$" + precoVenda.toFixed(2)
}