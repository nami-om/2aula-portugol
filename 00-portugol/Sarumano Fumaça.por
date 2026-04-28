programa {
  funcao inicio() {
    inteiro criancas
    real velocidade
    escreva("Há quantas criançãs pequenas por perto? ")
    leia(criancas)
    escreva("Velocidade do vento: ")
    leia(velocidade)
    se(criancas == 0 e velocidade >=0.5){
      escreva("Fumaça liberada. Que comecem os mistérios!")
    }senao escreva("Fumaça bloqueada. Aguardar condições ideais.")
  }
}
