const personagens = ["Rivaldo Jesus","Kowalski","Genezio","Waltdisney"];

const seletor = document.getElementById("seletor")

for(i = 0; i<personagens.length; i++){
    document.getElementById("lista").innerHTML += "<br>" + personagens[i]
    // let sel = document.getElementById("opc").textContent += personagens[i]
    // console.log(sel)

    const opt = document.createElement("option");
    opt.value = personagens[i];
    opt.textContent = personagens[i];
    seletor.appendChild(opt)
    

    //  document.getElementById("listadados").innerHTML += numeroAleatorio + "<br>"
    // document.getElementById("seletor"). += opt.value
    console.log(seletor)
// seletor.appendChild(opt);
}
function buscarIndice() {
    
    let p = document.getElementById("seletor").value
    let valor = personagens.indexOf(p)
    if(valor != -1){
    document.getElementById("texto-p").innerHTML = p + " está no indice " + valor
}
else{
        document.getElementById("texto-p").innerHTML = "Esse personagem não existe!"
    }
}