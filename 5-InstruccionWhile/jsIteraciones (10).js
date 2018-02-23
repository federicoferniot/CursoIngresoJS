function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var negativos=0;
	var positivos=0;
	var respuesta="si";
	var cantidadCeros=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;



	while(respuesta!="no")
	{
		numero = parseInt(prompt("Ingrese un número"));
		while(isNaN(numero))
		{
			numero=parseInt(prompt("Ingrese un número"));
		}

		if(numero>0)
		{	
			cantidadPositivos++;
			positivos+=numero;
		}
		else if(numero<0)
		{
			cantidadNegativos++;
			negativos+=numero;
		}
		else
		{
			cantidadCeros++;
		}
		//Cuento los números pares
		if((numero%2)==0)
		{
			cantidadPares++;
		}
		respuesta=prompt("Para continuar, ingrese si");
	
	}

	promedioPositivos=positivos/cantidadPositivos;
	promedioNegativos=negativos/cantidadNegativos;
	diferencia=positivos-negativos;
	//Muestro resultados
	document.write("<br> Suma de negativos: "+negativos);
	document.write("<br> Suma de positivos: "+positivos);
	document.write("<br> Cantidad de positivos: "+cantidadPositivos);
	document.write("<br> Cantidad de negativos: "+cantidadNegativos);
	document.write("<br> Cantidad de ceros: "+cantidadCeros);
	document.write("<br> Cantidad de pares: "+cantidadPares);
	document.write("<br> Promedio de Positivos: "+promedioPositivos);
	document.write("<br> Promedio de Negativos: "+promedioNegativos);
	document.write("<br> Diferencia entre positivos y negativos: "+diferencia);

}//FIN DE LA FUNCIÓN