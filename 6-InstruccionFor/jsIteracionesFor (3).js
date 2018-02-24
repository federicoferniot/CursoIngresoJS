function Mostrar()
{

	var repeticiones = prompt("ingrese el número de repeticiones");
	while(isNaN(repeticiones))
	{
		repeticiones=prompt("Ingrese el número de repeticiones");
	}

	for(var i=0;i<repeticiones; i++)
	{
		console.log("Hola UTN FRA")
	}

}//FIN DE LA FUNCIÓN