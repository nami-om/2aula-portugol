programa {
  funcao inicio() {
    cadeia manutencao, emergencia
    escreva("Há alguma manutenção ativa? ")
    leia(manutencao)
    escreva("Há alguma emergencia no parque? ")
    leia(emergencia)
    se(manutencao == "nao" e emergencia == "nao"){
      escreva("Transporte liberado para uso.")
    }senao se(manutencao == "sim" ou emergencia == "sim"){
      escreva("Transporte indisponível por motivo de segurança.")
    }
  }
}
