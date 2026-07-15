
// C  >>  Create  >> Cadastrar
// R  >>  Read  >> Ler 
// U  >>  Update  >> Alterar/atualizar/editar/etc
// D  >>  Delete  >> Deletar/apagar/excluir/etc


// const nomes = []
// const alturas = []


// const dino = { //o que não pode mexer é no "dino"
//     nome: "Astroleptos",
//     altura: 60,
//     cor: "laranja",
//     custo: 320
// }

// console.log(dino);


const dinos = []

function testar(){
const novoDino = {
    nome: "Astroleptos",
    altura: 60,
    cor: "laranja",
    custo: 320
}

   dinos.push(novoDino)
   console.log(dinos)
}

function cadastrarDino(){
    const novoDino = {
        id: 0,
        nome: document.getElementById('input-nome').value,
        altura: document.getElementById('input-altura').value,
        cor: document.getElementById('input-cor').value,
        custo: document.getElementById('input-custo').value
    }
    for (let i = 0; i < dinos.length; i++){
        novoDino.id++
    }
    dinos.push(novoDino)
    console.log(dinos);
}