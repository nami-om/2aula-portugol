const personagens15 = [
    "Gill Bates",
    "Kowalski",
    "GENéZio",
    "Padre Ernan Buco",
    "Heitor Tuga"
];

function multiplos2(){
    inclusao = personagens15.includes("Kowalski")
    console.log(inclusao)
    indice = personagens15.indexOf("Padre Ernan Buco")
    console.log(indice);
    personagens15.splice(2,1)
    personagens15.reverse()
    console.log(personagens15)
}
