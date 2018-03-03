//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{	
	var importe;
	var importeFinal;
	var iva=21/100;
	//alert("Funciona 2-EntradaSalida");

	importe = prompt("Ingrese el importe");
	importe = parseInt(importe);
	
	importeFinal=importe+importe*iva;

	document.getElementById('importe').value=importeFinal;
}	

