function Mostrar()
{
	var cantidadDivisores=0;
	var numero=prompt("Ingrese un número");
	while(isNaN(numero))
	{
		numero=prompt("Ingrese un número");
	}
	for(i=1;i<=numero;i++)
	{
		if((numero%i)==0)
		{
			cantidadDivisores++;
			console.log(i)
		}
	}
	console.log("La cantidad de divisores es: "+cantidadDivisores);



}//FIN DE LA FUNCIÓN