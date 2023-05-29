
let endpoint = "teams"
let host = "v1.formula-1.api-sports.io"
let key = "4e4ae7c1618a9edc32616711351d2863"
let lugar = "https://" + host + "/" + endpoint

const fetchPromise = fetch(lugar, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": host,
		"x-apisports-key": key
	}
})




function verificaDatos(escuderia){
	if (escuderia.base === null || escuderia.base === undefined) {
		escuderia.base = "sin dato"
	}
	if (escuderia.name === null || escuderia.name === undefined) {
		escuderia.name = "sin dato"
	}
	if (escuderia.president === null || escuderia.president === undefined) {
		escuderia.president = "sin dato"
	}
	if (escuderia.director === null || escuderia.director === undefined) {
		escuderia.director = "sin dato"
	}
	if (escuderia.technical_manager === null || escuderia.technical_manager === undefined) {
		escuderia.technical_manager = "sin dato"
	}
	if (escuderia.first_team_entry === null || escuderia.first_team_entry === undefined) {
		escuderia.first_team_entry = "sin dato"
	}
	if (escuderia.chassis === null || escuderia.chassis === undefined) {
		escuderia.chassis = "sin dato"
	}
	if (escuderia.engine === null || escuderia.engine === undefined) {
		escuderia.engine = "sin dato"
	}
	if (escuderia.tyres === null || escuderia.tyres === undefined) {
		escuderia.tyres = "sin dato"
	}
	if (escuderia.fastest_laps === null || escuderia.fastest_laps === undefined) {
		escuderia.fastest_laps = "sin dato"
	}
	if (escuderia.pole_positions === null || escuderia.pole_positions === undefined) {
		escuderia.pole_positions = "sin dato"
	}
	if (escuderia.world_championships === null || escuderia.world_championships === undefined) {
		escuderia.world_championships = "sin dato"
	}
}




fetchPromise
	.then((response) => response.json())
	.then((data) => {
		let elementoHTML = '<ul class="grilla">' + "\n"

		for (let escuderia of data.response) {

			verificaDatos(escuderia)	

			elementoHTML +=
				`
				<li>
				<div>
				<h2>${escuderia.name}</h2>
				<img class="logo-escuderia" src="${escuderia.logo}" alt="${escuderia.name}">
				<p class="datos"> Con Base en: <span class="dato-api">${escuderia.base}</span></p>
				<p class="datos"> Presidente: <span class="dato-api">${escuderia.president}</span></p>
				<p class="datos"> Director: <span class="dato-api">${escuderia.director}</span></p>
				<p class="datos"> Director t&eacutecnico: <span class="dato-api">${escuderia.technical_manager}</span></p>
				<p class="datos"> Primera participaci&oacuten: <span class="dato-api">${escuderia.first_team_entry}</span></p>
				<p class="datos"> Nombre del chasis: <span class="dato-api">${escuderia.chassis}</span></p>
				<p class="datos"> Motor: <span class="dato-api">${escuderia.engine}</span></p>
				<p class="datos"> Neum&aacuteticos: <span class="dato-api">${escuderia.tyres}</span></p>
				<p class="datos"> Cantidad de mejores vueltas: <span class="dato-api">${escuderia.fastest_laps}</span></p>
				<p class="datos"> Cantidad pole positions: <span class="dato-api">${escuderia.pole_positions}</span></p>
				<p class="datos"> Campeonatos mundiales: <span class="dato-api">${escuderia.world_championships}</span></p>
				</div>
				</li>
				`
		}

		elementoHTML += '</ul>'

		console.log(elementoHTML)
		document.querySelector("#escuderias").innerHTML = elementoHTML
	});
