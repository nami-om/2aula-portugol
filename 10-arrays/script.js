let idades = [18,20,12,35,14,15,38]
let precos = []



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
        
