/*function Mostrar()
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
}*/


//Ingresar 2 numeros, si son == concatenar si primero > que segundo multiplicamos, si primero < que segundo restamos


function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensajeEsPar="";

	numeroUno = prompt("Ingrese el primer numero");
	numeroDos = prompt("Ingrese el segundo numero");
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	if(numeroUno>numeroDos)
	{
		resultado = numeroUno*numeroDos;
		if(resultado%2==0 && numeroDos!=0)
		{
			mensajeEsPar=" Es par";
		}
	}
	else if(numeroUno<numeroDos)
	{	
		resultado = numeroUno-numeroDos;
	}
	else
	{
		resultado = ""+numeroUno+numeroDos;
	}

	document.write(resultado+mensajeEsPar);
}