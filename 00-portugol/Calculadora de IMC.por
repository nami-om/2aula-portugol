programa {
  funcao inicio() {
    real imc,peso,altura
    escreva ("Qual seu peso? ")
    leia (peso)
    escreva ("E qual a sua altura? ")
    leia (altura)
    imc = peso / (altura * altura)
    se(imc < 25){
      escreva ("Seu índice está abaixo de 25")
    }senao{
      escreva ("Seu índice está acima de 25")
    }
  }
}