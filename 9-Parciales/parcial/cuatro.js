function Mostrar()
{
	var numeroUno, numeroDos, resultado;

	numeroUno = parseInt(prompt("Ingrese el primer número"));
	numeroDos = parseInt(prompt("Ingrese el segundo número"));

	if(numeroUno == numeroDos)
	{
		resultado = numeroUno*numeroDos;
		//document.write(numeroUno*numeroDos);
	}
	else if(numeroUno > numeroDos)
	{
		resultado = numeroUno-numeroDos;
		//document.write(numeroUno-numeroDos);
	}
	else
	{
		resultado = numeroUno+numeroDos;
		//document.write(numeroUno+numeroDos);
	}

	//Escribo el resultado
	document.write(resultado);
}
