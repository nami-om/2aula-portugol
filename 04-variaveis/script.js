function incrementarContagem(){
    let cont = 0
    document.getElementById('p-contagem')
}







let global = 'Eu sou uma variavel global'
function funcao1(){
    let local = 'Sou uma variável local'
    console.log(local);
    console.log(global);
}
function funcao2(){
    console.log(global);
    //console.log(local);
}

funcao1()
funcao2()