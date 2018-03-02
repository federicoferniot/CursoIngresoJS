//ingresar 3 numeros y mostrar el mayor con if

function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var mayorNumero;

	numeroUno = prompt("Ingrese el primero número");
	numeroUno = parseInt(numeroUno);

	mayorNumero = numeroUno;

	numeroDos = prompt("Ingrese el segundo número");
	numeroDos = parseInt(numeroDos);
	numeroTres = prompt("Ingrese el tercer número");
	numeroTres = parseInt(numeroTres);

	if(numeroDos>mayorNumero && numeroDos>numeroTres)
	{
		mayorNumero=numeroDos;
	}
	else if(numeroTres>mayorNumero)
	{
		mayorNumero=numeroTres;
	}

	document.write(mayorNumero);
}

