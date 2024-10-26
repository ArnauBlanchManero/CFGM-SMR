function calcularEtapa() {
	
	var campoEdad,
		campoResultado,
		valorEdad;
	
	campoResultado = document.getElementById('Resultado');
	campoEdad = document.getElementById('Edad');
	valorEdad = parseInt(campoEdad.value);
	switch(valorEdad) {
		case 1:
		case 2:
		case 3:
		case 4:
			campoResultado.innerHTML = "No puedes jugar";
			break;
		default:
		campoResultado.innerHTML = "Estás lesionado";
	}
}