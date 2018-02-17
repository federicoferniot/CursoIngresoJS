function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

//alert (laHora);
	//El switch hace una comparación estricta (Compara también el tipo de datos)
	switch(laHora)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			alert("Es de mañana");
	}



}//FIN DE LA FUNCIÓN