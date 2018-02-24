function Mostrar()
{
	var cantidadPares=0;
	var numero=prompt("Ingrese un número");
	while(isNaN(numero))
	{
		numero=prompt("Ingrese un número");
	}
	for(i=1;i<=numero;i++)
	{
		if((i%2)==0)
		{
			cantidadPares++;
			console.log(i)
		}
	}
	console.log("La cantidad de pares es: "+cantidadPares);




}//FIN DE LA FUNCIÓN