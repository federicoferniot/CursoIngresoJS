function Mostrar()
{

	var contador=0;
	var numero;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	while(respuesta=='si')
	{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero))
		{
			numero = parseInt(prompt("Ingrese un número"));
		}
		if(numero>0)
		{
			positivo=positivo+numero;
		}
		if(numero<0)
		{
			negativo=negativo*numero;
		}
		respuesta=prompt("Para continuar, si");
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN