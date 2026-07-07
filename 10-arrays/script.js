let idades = [24, 13, 8, 42, 10, 17, 23, 16, 11, 20]
let precos = []
let diasSemana = ["segunda","terça", "quarta", "quinta", "sexta", "sábado", "domingo"]
let listaNPares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
let frutas = ['banana', 'maçã', 'uva']
let nomes = ['Alice', 'Bob', 'Charlie']
let nomes2 = ['Dave', 'Eva', 'Frank']
let idadesAmigos = [21, 19, 20, 24, 16, 17, 19]
let listaItens = ['Maçãs', 'Pão', 'Leite']
let listaItens2 = ['Ovos', 'Arroz']
let vazio = []
let cidades = ['Paris', 'Londres', 'Nova York']



const produtos = [
    "Notebook", "Smartphone", "Teclado Mecânico", "Mouse Gamer", "Monitor 4K",
    "Fone de Ouvido Bluetooth", "Caixa de Som", "Roteador Wi-Fi 6", "SSD 1TB", "Memória RAM 16GB",
  "Placa de Vídeo", "Processador Intel", "Placa-Mãe", "Fonte 750W", "Gabinete Gamer",
  "Water Cooler", "Cadeira Ergonômica", "Mesa Digitalizadora", "Webcam Full HD", "Microfone Condensador",
  "Smart TV 55\"", "Console PlayStation 5", "Controle Xbox", "Óculos VR", "Carregador Portátil",
  "Hub USB-C", "Suporte para Monitor", "Filtro de Linha", "Teclado Touchpad", "Mousepad Extended",
  "Impressora Multifuncional", "Projetor Portátil", "HD Externo 2TB", "Pendrive 128GB", "Cartão de Memória",
  "Smartwatch", "Smartband", "Balança Digital", "Lâmpada Inteligente", "Tomada Inteligente",
  "Câmera de Segurança", "Fechadura Eletrônica", "Robô Aspirador", "Cafeteira Elétrica", "Air Fryer",
  "Liquidificador", "Micro-ondas", "Mini Processador", "Aspirador de Pó Vertical", "Ventilador de Mesa"
];

function criarProdutos(){
    for(let i=0; i<produtos.length; i++){ 
        console.log(produtos[i]);
        document.getElementById('lista-precos').innerHTML += 
        '<p class="produtos">' + produtos[i] + '</p>'
        
    }
}

function array00(){
    //let i = 0
    //console.log("Idade: " + idades[i]);
    //console.log(idades.length);
    //console.log(idades[4]);
    //console.log("Idade: " + idades[0]);
    
    //for (let i=0; i<5; i++){
        //    console.log("Idade: " + idades[i]);
        //}
        
        //for (let i=0; i<idades.length; i++){
            //    console.log(idades[i]);
            //}
}
        
function addPrecos(){
    let n = Math.ceil(Math.random() * 100) 
        precos.push(n)
            
        //console.log(precos);  
        document.getElementById('lista-precos').innerHTML = " "
            for(let i=0; i<precos.length; i++){ 
                console.log(precos[i]);
                document.getElementById('lista-precos').innerHTML += precos[i] + ' - '
                
    }
}
        
function diasDaSemana(){
    console.log(diasSemana)
}

function criarFeriado(){
    diasSemana.push("Feriado")
    
}

function removerDia(){
    diasSemana.pop()
}

function listaPares(){
    console.log(listaNPares)
}

function subsNumero(){
    listaNPares[2] = 12
}

function listaFrutas(){
    console.log(frutas)
}

function addMorango(){
    frutas.push("Morango")
}

function removerFruta(){
    frutas.splice(1, 1)
}

function listaNomes(){
    console.log(nomes)
}

function addNomes(){
    let i = 0
    while(i < nomes2.length){
        nomes.push(nomes2[i])
        i++
    }
}

function listaAmigos(){
    console.log(idadesAmigos)
}

function somaAura(){
    let i = 0, resposta = 0
    while( i < 2){
        resposta = resposta + idadesAmigos[i]
        i++
    }
    console.log(resposta)
}

function mediaAura(){
    let soma = 0, resposta = 0
    for(let i = 0; i < idadesAmigos.length; i++){
        soma = soma + idadesAmigos[i]
    }
    
    resposta = soma / idadesAmigos.length
    
    console.log(resposta.toFixed(4))
}

// soma de tudo
// let soma = 0
//     for(let i = 0; i < idadesAmigos.length; i++){
    //         soma = soma + idadesAmigos[i]
    //     }
    // }
    
    //divisao
    
function listaCompras(){
        console.log(listaItens)
}
    
function addItens(){
        for(let i = 0; i < 2; i++){
            listaItens.push(listaItens2[i])
        }
}
    
 function removerItem(){
        listaItens.splice(2, 1)
}
    
function verificarItem(){
        for(let i = 0; i < listaItens.length; i++){
            if (listaItens[i] === "Pão") {
                console.log("true")
            }
        }
}
    
function arrayVazio(){
        
        for(let i = 0; i < 10; i++){
        if(i%2 != 0){
            vazio.push(i)
        }
    }
    
    console.log(vazio)
}

function multiplicarArray(){
    for(let i = 0; i < vazio.length; i++){
        vazio[i] = vazio[i] * 2
        
    }
    
    console.log(vazio)
}
    
function addCidades(){
    console.log("Eu adoraria visitar " + cidades[1] + " e " + cidades[2])
}