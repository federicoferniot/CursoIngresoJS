//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 6-iteraciones");
	var importe;
	var contador=0;
	var mayorImporte;
	var menorImporte;

	while(contador<7)
	{
		contador++;

		importe=prompt("Ingrese el importe del día "+contador);
		importe=parseInt(importe);
		while(importe<=0)
		{
			importe=prompt("Ingrese un importe valido");
			importe=parseInt(importe);
		}

		if(contador==1)
		{
			mayorImporte=importe;
			menorImporte=importe;
		}
		else
		{
			if(importe>mayorImporte)
			{
				mayorImporte=importe;
			}
			else if(importe<menorImporte)
			{
				menorImporte=importe;
			}
		}
	}

	document.write("El mayor importe de venta fue "+mayorImporte);
	document.write("<br>El menor importe de venta fue "+menorImporte);
}

