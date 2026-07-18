const personagens11 = [
    "Padre Ernan Buco",
    "GENéZio",
    "Bilu",
    "Junin"
];

function bilu(){
    inclusao = personagens11.includes("Bilu")
    console.log(inclusao)
    inclusao2 = personagens11.includes("bilu")
    console.log(inclusao2)

}

function posicaoPadre(){
    indice = personagens11.indexOf("Padre Ernan Buco")
    console.log(indice);
}
