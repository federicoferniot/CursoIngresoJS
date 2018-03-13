function Mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var pesoMaximo;
	var pesoMinimo;
	var marcaMasPesado;
	var contadorTemperaturasPares=0;
	var contadorMenosCeroGrados=0;
	var promedioPeso;
	var acumuladorPeso=0;
	var respuesta="si";
	var contador=0;

	while(respuesta=="si")
	{
		contador++;

		marca = prompt("Ingrese la marca");

		peso = prompt("Ingrese el peso");
		peso = parseInt(peso);
		while(peso<1 || peso>100)
		{
			peso = prompt("Ingrese un peso valido");
			peso = parseInt(peso);
		}

		temperatura = prompt("Ingrese la temperatura");
		temperatura = parseInt(temperatura);
		while(temperatura<-30 || temperatura>30)
		{
			temperatura = prompt("Ingrese una temperatura valida");
			temperatura = parseInt(temperatura);
		}

		if(contador==1)
		{
			pesoMaximo = peso;
			pesoMinimo = peso;
			marcaMasPesado = marca;
		}
		else
		{
			if(peso>pesoMaximo)
			{
				pesoMaximo = peso;
				marcaMasPesado = marca;
			}
			else if(peso<pesoMinimo)
			{
				pesoMinimo = peso;
			}
		}

		if(temperatura%2==0 && temperatura!=0)
		{
			contadorTemperaturasPares++;
		}

		if(temperatura<0)
		{
			contadorMenosCeroGrados++;
		}

		acumuladorPeso = acumuladorPeso + peso;

		respuesta = prompt("para continuar ingrese si");
	}

	promedioPeso=acumuladorPeso/contador;

	document.write("<br>La cantidad de temperaturas pares es "+contadorTemperaturasPares);
	document.write("<br>La marca del producto mas pesado es "+marcaMasPesado);
	document.write("<br>La cantidad de productos que se conservan a menos de 0 grados es "+contadorMenosCeroGrados);
	document.write("<br>El promedio de los pesos es "+promedioPeso);
	document.write("<br>El peso máximo es "+pesoMaximo+" y el minimo es "+pesoMinimo);
}