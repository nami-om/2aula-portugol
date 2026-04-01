programa {
  funcao inicio() {
    real bombas = 7
    real valorBomba = 22
    real valorTotalBomba
    real shows
    real bombasTotal
    escreva ("Quantos shows Sarumano tem marcado? ")
    leia (shows)
    bombasTotal = shows * bombas
    escreva ("Ao todo é necessário comprar " + bombasTotal + " bombas")
    escreva ("\nQuanto ele deverá gastar para comprá-las? ")
    valorTotalBomba = bombasTotal * valorBomba
    escreva ("\nO total que ele irá gastar é: " + valorTotalBomba)
  }
}
