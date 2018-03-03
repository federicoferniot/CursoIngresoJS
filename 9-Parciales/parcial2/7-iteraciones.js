//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 7-iteraciones");
	var contador=0;
	var notaDelAlumno;
	var sexoDelAlumno;
	var acumuladorNotas=0;
	var promedioNotas;
	var notaMasBaja;
	var contadorVaronesNotaMayorOIgualASeis=0;

	while(contador<6)
	{
		contador++;

		notaDelAlumno=prompt("Ingrese la nota del alumno "+contador);
		notaDelAlumno=parseInt(notaDelAlumno);
		while(isNaN(notaDelAlumno) || notaDelAlumno>10 || notaDelAlumno<0)
		{
			notaDelAlumno=prompt("Ingrese una nota valida");
			notaDelAlumno=parseInt(notaDelAlumno);
		}

		sexoDelAlumno=prompt("Ingrese el sexo del alumno(f o m)");
		while(sexoDelAlumno!="f" && sexoDelAlumno!="m")
		{
			sexoDelAlumno=prompt("Ingrese un sexo valido");
		}

		if(contador==1)
		{
			notaMasBaja=notaDelAlumno;
		}
		else
		{
			if(notaDelAlumno<notaMasBaja)
			{
				notaMasBaja=notaDelAlumno;
			}
		}

		acumuladorNotas+=notaDelAlumno;
		if(notaDelAlumno>=6 && sexoDelAlumno=="m")
		{
			contadorVaronesNotaMayorOIgualASeis++;
		}

	}

	promedioNotas=acumuladorNotas/contador;
	alert("El promedio de las notas totales es "+promedioNotas);
	alert("La nota más baja fue "+notaMasBaja);
	alert("La cantidad de varones que su nota fue mayor o igual a 6 es "+contadorVaronesNotaMayorOIgualASeis);
	
}

