const personagens6 = [
    "Tião",
    "Junin",
    "Padre Ernan Buco"
];

function junin(){
    personagens6.splice(1,1);
    console.log(personagens6)
}

function adicaoDupla(){
    personagens6.push('Dona Bete')
    personagens6.unshift('Mônica')
    console.log(personagens6)
}