programa {
  funcao inicio() {
    inteiro minimoMarujo = 10, numeroMarujo
    real alimenMarujo = 1.5, quantidadeAlimento, comidaMinima
    escreva ("Quantos marujos estão a bordo? ")
    leia(numeroMarujo)
    escreva ("Quanto há de comida para cada marujo? ")
    leia(quantidadeAlimento)
    comidaMinima = alimenMarujo * numeroMarujo
    se(numeroMarujo >= 10 e comidaMinima >= 15){
      escreva("Provisões suficientes. Rumo ao horizonte!")
    }senao se(numeroMarujo < 10 e comidaMinima < 15){
      escreva("Algo está errado. Posseidom não quer ninguém no mar hoje.")
    }
  }
  }
