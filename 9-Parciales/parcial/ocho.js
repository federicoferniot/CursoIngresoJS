/*
	Pedir 3 datos hasta que el cliente quiera, son nombre del animal, peso del animal(mayor a 0),
	 y la temperatura del habitat(entre -40 y +40). Informar
	 1) el nombre del animal mas pesado
	 2) el nombre del animal de la temperatura mas baja
	 3) la cantidad de temperaturas pares ingresadas
	 4) el promedio del peso de todos los animales
	 5) la temperatura maxima y la minima
*/
function Mostrar()
{
	var nombreDelAnimal;
	var pesoDelAnimal;
	var temperaturaDelHabitat;
	var quiereContinuar='si';
	var acumuladorPeso=0;
	var cantidadTemperaturasPares=0;
	var pesoMayor;
	var nombreAnimalMasPesado;
	var nombreAnimalTemperaturaMasBaja;
	var promedioPesoAnimales;

	var contador=0;
	var temperaturaMaxima;
	var temperaturaMinima;

	while(quiereContinuar=='si')
	{
		nombreDelAnimal=prompt("Ingrese el nombre del animal");

		pesoDelAnimal=prompt("Ingrese el peso del animal");
		pesoDelAnimal=parseInt(pesoDelAnimal);
		while(isNaN(pesoDelAnimal) || pesoDelAnimal<=0)
		{
			pesoDelAnimal=prompt("Ingrese el peso del animal");
			pesoDelAnimal=parseInt(pesoDelAnimal);
		}

		temperaturaDelHabitat=prompt("Ingrese la temperatura del habitat del animal");
		temperaturaDelHabitat=parseInt(temperaturaDelHabitat);
		while(isNaN(temperaturaDelHabitat) || (temperaturaDelHabitat<-40 || temperaturaDelHabitat>40))
		{
			temperaturaDelHabitat=prompt("Ingrese la temperatura del habitat del animal");
			temperaturaDelHabitat=parseInt(temperaturaDelHabitat);
		}

		if(contador==0)
		{
			pesoMayor=pesoDelAnimal;
			nombreAnimalMasPesado=nombreDelAnimal;
			nombreAnimalTemperaturaMasBaja=nombreDelAnimal;
			temperaturaMaxima=temperaturaDelHabitat;
			temperaturaMinima=temperaturaDelHabitat;
		}
		else
		{	
			if(pesoDelAnimal>pesoMayor)
			{
				nombreAnimalMasPesado=nombreDelAnimal;
			}
			if(temperaturaDelHabitat>temperaturaMaxima)
			{
				temperaturaMaxima=temperaturaDelHabitat;
			}
			else if(temperaturaDelHabitat<temperaturaMinima)
			{
				temperaturaMinima=temperaturaDelHabitat;
				nombreAnimalTemperaturaMasBaja=nombreDelAnimal;
			}
		}

		if(temperaturaDelHabitat%2==0 && temperaturaDelHabitat!=0)
		{
			cantidadTemperaturasPares++;
		}

		contador++;
		quiereContinuar = prompt("Para continuar,ingrese si");
	}

	document.write(nombreAnimalMasPesado+"<br>");
	document.write(nombreAnimalTemperaturaMasBaja+"<br>");
	document.write(cantidadTemperaturasPares+"<br>");
	document.write(acumuladorPeso/contador+"<br>");
	document.write(temperaturaMaxima+"<br>");
	document.write(temperaturaMinima+"<br>");
}
