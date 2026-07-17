const personagens2 = [
    "Lúcio Fernando",
    "Mônica",
    "Capitão Ganso",
    "Gill Bates",
    "Junin"
];

function splice(){
    personagens2.splice(2,1);
    console.log(personagens2)
}

function splice2(){
    personagens2.splice(3,1 && 4);
    console.log(personagens2)
}