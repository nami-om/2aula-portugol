programa {
  funcao inicio() {
    cadeia som, figurino
    escreva("O som está funcionando? ")
    leia(som)
    escreva("O figurino está completo? ")
    leia(figurino)
    se(som == "sim" e figurino == "sim"){
      escreva("Palco liberado para Sarumano! Luzes, câmera, ilusão!")
    }senao se(som == "nao" e figurino == "sim"){
      escreva("Sem som. Realizar apresentação alternativa no salão.")
    }senao se(som == "nao" e figurino == "nao"){
      escreva("Apresentação cancelada. Hora da mágica de desaparecer…")
    }senao se(som == "sim" e figurino == "nao"){
      escreva("Faltando parte do figurino. Te vira no improviso!")
    }
  }
}
