function rodarWhile(){
    let i = 0 // 1 pilar
    while(i<50){ // 2 pilar
        console.log(i)
        i++ // 3 pilar
    }
}


function rodarFor(){
    for(let i=0; i<50; i++){
        //AQUI SÓ VAI TRAMPO
        console.log(i)
    }
}


function rodarDoWhile(){
    let i = 1000
    do{

    }while(i<50)
}


function exemploDoWhile(){
    do{
        idade = Number(prompt("Digite sua idade:"))
    }while(idade<18)
        alert("Você entrou no sistema")
}


function exemploDoWhileLimitado(){
    let idade = 0
    let tentativas = 3
    do{
        idade = Number(prompt("Digite sua idade:"))
        tentativas--
        console.log(tentativas);
    }while(idade<18 && tentativas>0)
        alert("Você entrou no sistema")
}