programa {
  funcao inicio() {
    inteiro denisCobra = 500
    inteiro juninCobra = 500
    inteiro porHora = 350
    real horaTrabalhada
    real deveCobrar
    real lucro
    escreva ("Quantas horas foram trabalhas? ")
    leia (horaTrabalhada)
    deveCobrar = horaTrabalhada * porHora
    escreva ("Então deve ser cobrado R$ " + deveCobrar + ".00")
    lucro = deveCobrar - denisCobra
    escreva ("\nO lucro de Junin é R$ " + lucro + ".00")

  }
}
