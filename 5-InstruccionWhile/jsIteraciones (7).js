function Mostrar()
{

	var contador=0;
	var numero;
	var acumulador=0;
	var respuesta='si';
	while(respuesta=='si')
	{
		contador++;
		numero=parseInt(prompt("Ingrese un numero"));
		acumulador=acumulador+numero;
		respuesta=prompt("Para continuar, si");
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN