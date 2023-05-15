var divContenido = document.querySelector(".contenido");//Apunto al div contenido
var hijosDivContenido = Array.from(divContenido.children);//Ordeno los elementos en un array
var clasesDivContenido = [];//Inicializa un array con los nombre de las clases 
for (let hijo in hijosDivContenido) {    
    clasesDivContenido[hijo] = hijosDivContenido[hijo].className;//Completo array con nombres de las clases
};
console.log(clasesDivContenido)

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
            console.log("clases divFoto: ", divFoto.classList)
        };//Agrega la animación a la foto
        if (clasesDivCon[i].substr(0, 4) == "text") {
            let divText = document.querySelector("."+clasesDivCon[i].substr(0, 8));
            divText.classList.toggle("activaText");
        };//Agrega la animación a la ficha técnica 
    }
    for (let i in clasesDivContenido) {
        if (clasesDivContenido[i] != divClick) {
            let divCon = document.querySelector("."+clasesDivContenido[i]);
            divCon.classList.toggle("displayNone");
        };//Apago los div's que no fueron seleccinados con click
    }
}