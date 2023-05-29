function validacion() {
	// Restablece los mensajes de error
	document.getElementById("nombreError").textContent = "";
	document.getElementById("emailError").textContent = "";
	document.getElementById("edadError").textContent = "";
	// Obtiene los valores de los campos
	let nombre = document.getElementById("nombre").value;
	let email = document.getElementById("email").value;
	let edad = document.getElementById("edad").value;
	// Validar el nombre (debe contener al menos 3 caracteres)
	if (nombre.length < 3) {
		document.getElementById("nombreError").textContent = "El nombre debe tener al menos 3 caracteres ";
	// return;
	}
	// Validar el correo electrónico (debe tener un formato válido)
	let emailValidacion = "/^\S+@\S+\.\S+$/";
	if (!emailRegex.test(email)) {
		document.getElementById("emailError").textContent = "Ingrese un correo electrónico válido";
		// return;
	}
	// Validar la edad (debe ser un número mayor o igual a 18)
	if (isNaN(edad) || edad < 18) {
		document.getElementById("edadError").textContent = "La edad debe ser un número mayor o igual a 18";
		// return;
	}
	// Si todos los campos son válidos, se puede enviar el formulario
	document.getElementById("formulario").submit();
}