programa {
  funcao inicio() {
    //informacoes
    inteiro numePecaUm,codPecaUm,codPecaDois,numePecaDois
    real uniPecaUm,uniPecaDois,valorPecaDois,valorSerPago,valorPecaUm
    //leitura
    escreva ("POR FAVOR, ESCREVA O CÓDIGO DA PEÇA 1 QUE DESEJA: ")
    leia (codPecaUm)
    escreva ("E QUANTAS PEÇAS GOSTARIA? ")
    leia (numePecaUm)
    escreva ("A UNIDADE DA PEÇA 1 ESTÁ R$ ")
    leia (uniPecaUm)
    valorPecaUm = uniPecaUm * numePecaUm
    escreva ("E QUAL É O CÓDIGO DA PEÇA 2 QUE DESEJA? ")
    leia (codPecaDois)
    escreva ("E QUANTAS PEÇAS GOSTARIA? ")
    leia (numePecaDois)
    escreva ("A UNIDADE DA PEÇA 2 ESTÁ R$ ")
    leia (uniPecaDois) 
    valorPecaDois = uniPecaDois * numePecaDois
    valorSerPago = valorPecaDois + valorPecaUm
    escreva ("VALOR TOTAL A PAGAR: R$ " + valorSerPago)

  }
}
