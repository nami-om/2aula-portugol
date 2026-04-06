programa {
  funcao inicio() {
    inteiro precoKiloRacao = 10
    inteiro precoGramaRacao 
    real pesoGrama
    real pesoKilo = 1000
    escreva ("Quantas gramas gostaria? ")
    leia (pesoGrama)
    precoGramaRacao = pesoGrama / 10 / precoKiloRacao
    escreva ("Então fica no valor de R$ " + precoGramaRacao)

  }
}
