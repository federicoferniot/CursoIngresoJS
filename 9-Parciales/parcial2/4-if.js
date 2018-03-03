//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 4-if");
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Ingrese el primer número");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("Ingrese el segundo número");
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		resultado=numeroUno*numeroDos;
	}
	else if(numeroUno>numeroDos)
	{
		resultado=numeroUno-numeroDos;
	}
	else
	{
		resultado=numeroUno+numeroDos;
	}
	
	document.write(resultado);
}

