programa {
  funcao inicio() {
    real moradia = 1400
    real agua = 67
    real luz = 72
    real internet = 130
    real gasolina = 100
    real streamings = 98
    real telefone = 64
    real outros = 250
    real salario
    real saldo
    escreva ("Qual o salário de Juca? ")
    leia (salario)
    saldo = salario - moradia - agua - luz - internet - gasolina - streamings - telefone - outros
    escreva ("O saldo total é de: " + saldo)
  }
}
