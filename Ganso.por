programa {
  funcao inicio() {
    real gasto = 4900
    inteiro ingressos = 3700
    inteiro itens = 4100
    real lucroR
    real lucroP
    lucroR = - gasto + ingressos + itens
    escreva ("\nO lucro obtido em reais é R$ " + lucroR)
    lucroP = (lucroR / gasto) * 100
    escreva ("\nO lucro percentual é de " + lucroP + " %")
  }
}
