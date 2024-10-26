/*Arnau Blanch Manero*/

function calculaimc() {
	var peso = parseInt(document.getElementById("peso").value);
	var altura = parseInt(document.getElementById("altura").value);
	var imc = peso / altura;
	switch(true){
		case (imc<18.5):
		document.getElementById("imc").innerHTML = "Peso bajo";
		break;
		
		case (imc>18.5 & imc<24.9):
		document.getElementById("imc").innerHTML = "Peso normal";
		break;
		
		case (imc>25 & imc<29.9):
		document.getElementById("imc").innerHTML = "Sobrepeso";
		break;
		
		case (imc>30 & imc<34.9):
		document.getElementById("imc").innerHTML = "Obesidad grado I";
		break;
		
		case (imc>35 & imc<39.9):
		document.getElementById("imc").innerHTML = "Obesidad grado II";
		break;
		
		case (imc>40):
		document.getElementById("imc").innerHTML = "Obesidad grado III";
		break;
		
		default:
		document.getElementById("imc").innerHTML = "Ha habido un error";
	}
}

function grados() {
	var num = parseInt(document.getElementById("centigrados").value);
	var fahr = 1.8 * num + 32;
	document.getElementById("fahrenheit").innerHTML = fahr + " ºF";
}

function multiplo() {
	var rima = 0;
	for (var i=99; i<299; i++){
		if (i%5==0){
			rima=rima+i;
		}
	}
	document.getElementById("sol").innerHTML = document.getElementById("sol").innerHTML + rima;
}

function velocidad() {
	var rapido = parseInt(prompt("¿A qué velocidad iba?",""));
	if (66<=rapido & rapido<=85){
		document.getElementById("multa").innerHTML= "Pierdes 2 puntos y 300€ de multa";
	} else {
		if (87<=rapido & rapido<=99){
			document.getElementById("multa").innerHTML= "Pierdes 3 puntos y 500€ de multa";
		} else {
			if (100<=rapido & rapido<=120){
				document.getElementById("multa").innerHTML= "Pierdes 5 puntos y 900€ de multa";
			} else {
				if (rapido>=120) {
					document.getElementById("multa").innerHTML= "Pierdes 15 puntos y 100000€ de multa. Game Over";
				} else {
					document.getElementById("multa").innerHTML= "Ibas bien :)";
				}
			}
		}
	}
}

function copia() {
	var texto = document.getElementById("copiar").value;
	document.getElementById("pegar").value = texto;
}