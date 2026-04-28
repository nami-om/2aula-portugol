programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    inteiro distancia
    real consumoMedio,combustivel
    escreva ("Qual a distância total percorrida? ")
    leia (distancia)
    escreva ("Quanto de combustível foi gasto? ")
    leia (combustivel)
    consumoMedio = distancia / combustivel
    consumoMedio = mat.arredondar(consumoMedio, 3)
    escreva ("O consumo médio foi de: " + consumoMedio + "km/l")
  }
}
