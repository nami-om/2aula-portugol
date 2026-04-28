programa {
  funcao inicio() {
    cadeia nome
    real salario,total,vendas
    real comissao = 15/100 
    escreva ("Digite o primeiro nome do funcionário: ")
    leia (nome)
    escreva ("Nos informe o salário base dele: ")
    leia (salario)
    escreva ("Quantas vendas foram realizadas por ele no mês? ")
    leia (vendas)
    total = vendas * comissao + salario
    escreva ("TOTAL: R$ " + total)
  }
}
