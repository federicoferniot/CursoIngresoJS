function Mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var numero;
	var respuesta='si';

	while(respuesta!='no')
	{	
		//Pido el número al usuario y valido que haya ingresado un número
		numero = parseInt(prompt("Ingrese un número"));
		while(isNaN(numero))
		{
			numero = parseInt(prompt("Ingrese un número"));
		}

		//En la primer iteración, seteo el máximo y mínimo con numero ingresado
		if(contador==0)
		{
			maximo=numero;
			minimo=numero;
		}

		//Comparo número ingresado para ver si es un nuevo máximo o mínimo
		if(numero>maximo)
		{
			maximo=numero;
		}
		else if(numero<minimo)
		{
			minimo=numero;
		}

		contador++;
		respuesta = prompt("Para continuar, ingrese si");
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN