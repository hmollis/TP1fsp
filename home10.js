var divContenido = document.querySelector(".contenido");//Apunto al div contenido
var hijosDivContenido = Array.from(divContenido.children);//Ordeno los elementos en un array
var clasesDivContenido = [];//Inicializa un array con los nombre de las clases 
for (let hijo in hijosDivContenido) {    
    clasesDivContenido[hijo] = hijosDivContenido[hijo].className;//Completo array con nombres de las clases
};
console.log("clasesDivContenido: ", clasesDivContenido)

function adminContenido(divClick) {
    console.log(divClick, typeof(divClick))
    let divCon = document.querySelector("."+divClick);//Apunto al div sobre el que se hizo click
    let hijosDivCon = Array.from(divCon.children);//Ordeno los elementos en un array
    let clasesDivCon = [];//Inicializo un array con los nombres de las clases
    for (let i in hijosDivCon) {
        clasesDivCon[i] = hijosDivCon[i].className;//Completo el array con los nombres de las clases
    }
    console.log(clasesDivCon)
    for (let i in clasesDivCon) {
        if (clasesDivCon[i].substr(0, 4) == "foto") {
            let divFoto = document.querySelector("."+clasesDivCon[i].substr(0, 8));
            divFoto.classList.toggle("activaFoto");
            console.log("divFoto: ", divFoto.classList)
        };//Agrega la animación a la foto
        if (clasesDivCon[i].substr(0, 4) == "text") {
            let divText = document.querySelector("."+clasesDivCon[i].substr(0, 8));
            console.log("divText: ", divText.classList)
            divText.classList.toggle("activaText");
            console.log("divText: ", divText.classList)          
        };//Agrega la animación a la ficha técnica
    }
    for (let i in clasesDivContenido) {
        if ((clasesDivContenido[i] != divClick) && (clasesDivContenido[i] != "menuOpcionales") && (clasesDivContenido[i] != "colores")) {
            let divCon = document.querySelector("."+clasesDivContenido[i]);
            divCon.classList.toggle("displayNone");
        };//Apago los div's que no fueron seleccinados con click
    }
}

function completarConfig(divConfig) {
    // let fotoApagar = document.querySelector("."+divConfig);
    // fotoApagar.classList.add("displayNone");
    // let divOpcionales = document.querySelector(".menuOpcionales");
    // divOpcionales.style.display = "inline-flex";
    let tablaOpcionales = document.querySelector("#opcionales").innerHTML;
    document.querySelector("."+divConfig+" table").innerHTML += tablaOpcionales;
    let btnConfig = document.querySelector("#botonConfig");
    btnConfig.classList.toggle("displayNone");
}

function elegirColor() {
    let divColores = document.querySelector(".colores");
    divColores.style.display = "inline-flex";       
}
function colorElegido(color) {
    let divCuadro = document.querySelector("."+color);
    let estilo = divCuadro.getAttribute("style");
    console.log("estilo: ", estilo);
    estilo = estilo + " margin = 'auto';";
    let divColorCarroceria = document.querySelector("#colorCarroceria");
    divColorCarroceria.setAttribute("style", estilo);
    divColorCarroceria.textContent = "";
    let divColores = document.querySelector(".colores");
    divColores.style.display = "none";
}

