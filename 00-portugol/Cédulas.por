programa {
  funcao inicio() {
    inteiro quantidadeNotas,valorTotal
    escreva ("Qual o valor? ")
    leia (valorTotal)
    //notas de 100
    quantidadeNotas = valorTotal / 100
    escreva(quantidadeNotas, " nota(s) de R$ 100,00\n")
    valorTotal = valorTotal % 100
    //notas de 50
    quantidadeNotas = valorTotal / 50
    escreva(quantidadeNotas, " nota(s) de R$ 50,00\n")
    valorTotal = valorTotal % 50
    //notas de 20
    quantidadeNotas = valorTotal / 20
    escreva(quantidadeNotas, " nota(s) de R$ 20,00\n")
    valorTotal = valorTotal % 20
    //notas de 10
    quantidadeNotas = valorTotal / 10
    escreva(quantidadeNotas, " nota(s) de R$ 10,00\n")
    valorTotal = valorTotal % 10
    //notas de 5
    quantidadeNotas = valorTotal / 5
    escreva(quantidadeNotas, " nota(s) de R$ 5,00\n")
    valorTotal = valorTotal % 5
    //notas de 2
    quantidadeNotas = valorTotal / 2
    escreva(quantidadeNotas, " nota(s) de R$ 2,00\n")
    valorTotal = valorTotal % 2
    //notas de 1
    quantidadeNotas = valorTotal / 1
    escreva(quantidadeNotas, " nota(s) de R$ 1,00\n")
    valorTotal = valorTotal % 1

  }
}
