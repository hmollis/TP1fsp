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
    if (typeof(Storage) !== "undefined") { 
        sessionStorage.setItem("divClick", divClick);
    } else {
        alert("Web Storage no soportado");
    };
    mostrarDivTexto = sessionStorage.getItem("divClick");
    console.log("divClick: ", mostrarDivTexto);
}

function completarConfig(divConfig) {
    // let fotoApagar = document.querySelector("."+divConfig);
    // fotoApagar.classList.add("displayNone");
    // let divOpcionales = document.querySelector(".menuOpcionales");
    // divOpcionales.style.display = "inline-flex";
    let tablaOpcionales = document.querySelector("#opcionales").innerHTML;
    document.querySelector("."+divConfig+" table").innerHTML += tablaOpcionales;
    let btnConfig = document.querySelector("#btnConfig");
    btnConfig.classList.toggle("displayNone");
    if (typeof(Storage) !== "undefined") { 
        sessionStorage.setItem("divTexto", divConfig);
    } else {
        alert("Web Storage no soportado");
    };
    divTexto = sessionStorage.getItem("divTexto");
    console.log("divTexto: ", divTexto);
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

var idConfiguracion = 0;

// var oredenesDeCompra = [];

// function guardar() {
//     let divTexto = sessionStorage.getItem("divTexto"); // Cual es el div con clase text* que tengo que clonar?
//     let fichaTecnica = document.querySelector("."+divTexto) // Aputo al div que tengo que clonar
//     let tablaFicha = fichaTecnica.cloneNode(true); // Creo el clon
//     idConfiguracion += 1;
//     const configuracion = document.createElement("div");
//     configuracion.appendChild(tablaFicha);
//     configuracion.setAttribute("id", idConfiguracion);
//     let carrito = document.querySelector(".menuLateral");
//     carrito.appendChild(configuracion);
//     let btnGuardar = document.querySelector("#btnGuardar");
//     btnGuardar.setAttribute("class", "displayNone");
// }

function guardar() {
    let divTexto = sessionStorage.getItem("divTexto"); // Cual es el div con clase text* que tengo que clonar?
    let fichaTecnica = document.querySelector("."+divTexto) // Aputo al div que tengo que clonar
    let tablaFicha = fichaTecnica.cloneNode(true); // Creo el clon
    idConfiguracion += 1;
    const configuracion = document.createElement("div");// Creo un div que muestra la ficha técnica en una ventana emergente
    configuracion.appendChild(tablaFicha); // Inserto la ficha técnica en el div
    configuracion.setAttribute("id", "ficha"+idConfiguracion); // Identifico con un id al div
    configuracion.setAttribute("class", "displayConfig displayNone"); // Apago el div
    let btnGuardar = configuracion.querySelector("#btnGuardar");
    btnGuardar.setAttribute("class", "displayNone");
    let btnColor = configuracion.querySelector("#colorCarroceria");
    btnColor.setAttribute("onclick", "");
    //contenido = document.querySelector(".contenido"); // Apunto al div contenido
    //contenido.appendChild(configuracion); // Inserto el div con ficha tecnica en el div contenido
    document.body.appendChild(configuracion);
    let refConfig = document.createElement("div");
    refConfig.innerHTML = `Configuración #${idConfiguracion}: ${autoMarca(divTexto)}`;
    refConfig.setAttribute("class", "refConfig");
    refConfig.setAttribute("id", "ref"+idConfiguracion);
    refConfig.setAttribute("onclick", `mostrarFicha(${idConfiguracion})`);
    let menuLateral = document.querySelector(".menuLateral");
    menuLateral.appendChild(refConfig);
    let divklick = sessionStorage.getItem("divClick");
    adminContenido(divklick);
}

function autoMarca(divTexto) {
    switch (divTexto) {
        case "textVelo":
            return "Lamborguini";
        case "textAcel":
            return "Ferrari";
        case "textHibr":
            return "Porsche";
        case "textElec":
            return "Tesla";
    }
}

function mostrarFicha(idConfiguracion) {
    let ficha = document.querySelector("#ficha"+idConfiguracion);
    console.log("id= "+"ficha"+idConfiguracion)
    ficha.classList.toggle("displayNone");
    console.log(ficha.innerHTML);
    let tabla = ficha.querySelector("table");
    console.log(tabla.innerHTML)
    tabla.innerHTML += `<tr id="btnFicha"><td><div class="contboton" style="display:inline;">
    <a class="boton" onclick="confirmar(idConfiguracion)" style="font-size: 20px;">Guardar</a>
    </div></td>
    <td><div class="contboton" style="display:inline;">
    <a class="boton" onclick="borrarConfig(idConfiguracion)" style="font-size: 20px;">Borrar</a>
    </div></td></tr>` 
}

function confirmar(idConfiguracion) {
    let ficha = document.querySelector("#ficha"+idConfiguracion);
    ficha.classList.toggle("displayNone");
    let btn = ficha.querySelector("#btnFicha");
    btn.remove();
}

function borrarConfig(idConfiguracion) {
    let configuracion = document.querySelector("#ficha"+idConfiguracion);
    configuracion.remove();
    let refConfig = document.querySelector("#ref"+idConfiguracion);
    refConfig.remove();
}