//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 8-iteraciones");
	var contador=0;
	var numeroPositivo;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta="si";
	var acumuladorNumeros=0;
	var promedio;
	var contadorNumerosPares=0;

	while(respuesta=="si")
	{
		numeroPositivo=prompt("Ingrese un número positivo");
		numeroPositivo=parseInt(numeroPositivo);
		while(isNaN(numeroPositivo) || numeroPositivo<=0)
		{
			numeroPositivo=prompt("Error, ingrese un número positivo");
			numeroPositivo=parseInt(numeroPositivo);
		}
		if(contador==0)
		{
			numeroMaximo=numeroPositivo;
			numeroMinimo=numeroPositivo;
		}
		else
		{
			if(numeroPositivo>numeroMaximo)
			{
				numeroMaximo=numeroPositivo;
			}
			else if(numeroPositivo<numeroMinimo)
			{
				numeroMinimo=numeroPositivo;
			}
		}

		if(numeroPositivo%2==0)
		{
			contadorNumerosPares++;
		}

		acumuladorNumeros+=numeroPositivo;

		contador++;
		respuesta=prompt("Para continuar, ingrese si");
	}

	promedio=acumuladorNumeros/contador;

	document.write("La cantidad de números pares es "+contadorNumerosPares+"<br>");
	document.write("El promedio de todos los numeros es "+promedio+"<br>");
	document.write("La suma de todos los números es "+acumuladorNumeros+"<br>");
	document.write("El número máximo es "+numeroMaximo+" y el mínimo es "+numeroMinimo+"<br>");
	
}

