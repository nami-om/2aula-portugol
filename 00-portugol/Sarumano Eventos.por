programa {
  funcao inicio() {
    inteiro tempoViagem
    cadeia gripado
    escreva("Sarumano está gripado? ")
    leia(gripado)
    escreva("Tempo de viagem: ")
    leia(tempoViagem)
    se(gripado == "nao" e tempoViagem <45){
      escreva("Viagem autorizada. Rumo ao show!")
    }senao escreva("Deslocamento inviável. Melhor recusar este evento.")
  }
}
