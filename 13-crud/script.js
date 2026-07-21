
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


let dinos = []

function testar(){
    
    // localStorage.setItem('teste', 20)
    // let testeDeLeitura = localStorage.getItem('teste')
    // console.log(testeDeLeitura)

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
        id: Date.now(), //conta os milisegundos desde 1980 (vai ser necessário mais pra frente)
        nome: document.getElementById('input-nome').value,
        altura: Number(document.getElementById('input-altura').value),
        cor: document.getElementById('input-cor').value,
        custo: Number(document.getElementById('input-custo').value),
    }
 
    dinos.push(novoDino)

    console.log(dinos);

    limparFormulario()

    // document.getElementById('input-nome').value = ''
    // document.getElementById('input-altura').value = ''
    // document.getElementById('input-cor').value = ''
    // document.getElementById('input-custo').value = ''
}

//mesma coisa que usar o '' para limpar
function limparFormulario(){
    document.getElementById('input-nome').value = ''
    document.getElementById('input-altura').value = ''
    document.getElementById('input-cor').value = ''
    document.getElementById('input-custo').value = ''


    //serve para o foco do 'mouse' voltar pro ponto que quiser
    document.getElementById('input-nome').focus()
}

function mostrarTodos(){
    document.getElementById('painel-dinos').innerHTML = ''
    for(let i = 0; i < dinos.length; i++){
        //alert(dinos[i].nome)
        document.getElementById('painel-dinos').innerHTML +=
        `<div class="card-dino">
           <h2>${dinos[i].nome}</h2>
           <p>Altura: ${dinos[i].altura}</p>
           <p>Cor: ${dinos[i].cor}</p>
           <p>Custo: ${dinos[i].custo}</p>
           <p>${dinos[i].id}</p>
        </div>
        `
    }
}

function salvarDados(){
    localStorage.setItem('dinos', JSON.stringify(dinos))
    
    // let texto = JSON.stringify(dinos)
    // localStorage.setItem('dinos', texto)
}

function carregarDados(){
    dinos = JSON.pase(localStorage.getItem('dinos'))
    console.log(dinos);
}

