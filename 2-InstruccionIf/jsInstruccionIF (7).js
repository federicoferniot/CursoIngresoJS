function Mostrar()
{
	var edad;
	var estadoCivil;
//tomo la edad  
	edad = document.getElementById('edad').value;
	estadoCivil = document.getElementById('estadoCivil').value;

//Comparo edad y estado civil
	if(edad<18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}


}//FIN DE LA FUNCIÓN