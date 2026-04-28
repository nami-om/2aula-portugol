programa {
  funcao inicio() {
    real a,b,c,notaFinal
    escreva ("Qual a nota do primeiro trimestre? ")
    leia (a)
    escreva ("Qual a nota do segundo trimestre? ")
    leia (b)
    escreva ("Qual a nota do terceiro trimestre? ")
    leia (c)
    notaFinal = (a * 2 + b * 3 + c * 5) / 10
    escreva ("MÉDIA = " + notaFinal)
  }
}
