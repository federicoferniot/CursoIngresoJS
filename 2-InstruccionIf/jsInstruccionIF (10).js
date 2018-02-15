function Mostrar()
{
	var notaExamen;
	//Genero el número RANDOM entre 1 y 10 
	notaExamen = Math.floor(Math.random() * 10) + 1;
	
	//Comparo las notas para saber que mensaje mostrar
	if(notaExamen >= 9)
	{
		alert("Excelente");
	}
	else if(notaExamen >= 4)
	{
		alert("Aprobó");
	}
	else
	{
		alert("Vamos, la próxima se puede");
	}
	

}//FIN DE LA FUNCIÓN