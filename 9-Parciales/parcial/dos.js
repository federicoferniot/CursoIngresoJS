/*function Mostrar()
{
  var importe;
  var importeFinal;

  importe = parseInt(prompt("Ingrese el importe"));

  importeFinal = importe + (importe*21/100);
  document.getElementById('importeFinal').value = importeFinal;
}*/


//Se ingresa un porcentaje de descuento y el importe, mosrtar cuanto se debe pagar


function Mostrar()
{
	var descuento;
	var importe;
	var importeFinal;

	while(isNaN(descuento))
	{
		descuento = prompt("Ingrese un porcentaje de descuento");
	}
	while(isNaN(importe))
	{
		importe = prompt("Ingrese el importe");
	}

	importe=parseInt(importe);
	descuento=parseInt(descuento);
	importeFinal=importe-(importe*descuento/100);
	
	document.getElementById('importeFinal').value = importeFinal;
}