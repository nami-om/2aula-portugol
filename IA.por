programa {
  inclua biblioteca Texto --> t

  funcao inicio() {
    inteiro cobrancaBaseToken = 5
    cadeia texto
    real custo 
    escreva ("Qual é o seu prompt? ")
    leia (texto)
    inteiro tokenPorCaractere = t.numero_caracteres(texto)
    inteiro quantidadeToTalDeToken = cobrancaBaseToken + tokenPorCaractere
    escreva ("Ele irá gastar " + quantidadeToTalDeToken + " tokens")
    escreva ("\nQuanto custa o token? ")
    leia (custo)
    inteiro custoPrompt = custo * quantidadeToTalDeToken
    escreva ("Então o prompt irá custar: " + custoPrompt + ".00")
  }
}
