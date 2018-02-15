function Mostrar()
{
	var edad;
	var estadoCivil;
//tomo la edad  
	edad = document.getElementById('edad').value;
	estadoCivil = document.getElementById('estadoCivil').value;

	if (edad >= 18 && estadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor");
	}

	


}//FIN DE LA FUNCIÓN