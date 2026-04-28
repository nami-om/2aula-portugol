programa {
  funcao inicio() {
    inteiro idade
    cadeia saberNadar, recomendacao
    escreva ("Sabe nadar? ")
    leia (saberNadar)
    escreva ("Qual a idade? ")
    leia (idade)
    escreva ("Tem carta de recomendação? ")
    leia (recomendacao)
    se(idade >16 e saberNadar == "sim" e recomendacao == "sim"){
    escreva("Aprovado para o navio!")
    }senao se(saberNadar == "nao" e recomendacao == "sim" e idade >=14){
      escreva("Aprovado sob recomendação. Monitorar nas primeiras viagens.")
    }senao escreva("Reprovado. Volte quando estiver mais preparado para o mar.")
 } 
}
