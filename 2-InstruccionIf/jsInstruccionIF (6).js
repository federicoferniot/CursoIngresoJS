function Mostrar()
{
	var edad;
//tomo la edad  
	edad = document.getElementById('edad').value;

//Comparo la edad para ver si es niño, mayor de edad o adolescente
	if(edad<13)
	{
		alert("Es niño");
	}
	else if(edad>17)
	{
		alert("Es mayor de edad");
	}
	else
	{
		alert("Es adolescente");
	}

}//FIN DE LA FUNCIÓN