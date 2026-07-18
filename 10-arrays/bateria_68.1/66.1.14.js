const personagens7 = [
    "Rivaldo Jesus",
    "Kowalski",
    "GENéZio",
    "Waldisney"
];

function remocaoDupla(){
    personagens7.pop()
    personagens7.shift()
    console.log(personagens7)
}

function genezio(){
    indice = personagens7.indexOf("GENéZio")
    console.log(indice);
}

function capitao(){
    inclusao = personagens7.includes("Capitão Ganso")
    console.log(inclusao)
}