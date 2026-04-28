programa {
  funcao inicio() {
    real preco,saldo
    escreva ("Qual o preço do item que queres? ")
    leia (preco)
    escreva ("E qual seu saldo? ")
    leia (saldo)
    se(saldo < preco){
      escreva("Infelizmente a compra não pode ser realizada")
    }senao{
      escreva("Parabéns sua compra foi realizada!")
    }
  }
}
