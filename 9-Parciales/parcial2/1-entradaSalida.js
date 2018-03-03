//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{	
	var lado;
	var perimetro;
	//alert("Funciona 1-EntradaSalida");
	lado = document.getElementById('lado').value;
	lado = parseInt(lado);

	perimetro = lado*3;
	alert("El perimetro es "+perimetro);
}

