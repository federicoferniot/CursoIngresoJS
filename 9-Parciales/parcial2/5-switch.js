//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 5-Switch");
	var mes;

	mes=prompt("Ingrese un mes del año");
	mes=mes.toLowerCase();

	switch(mes)
	{
		case "enero":
		case "febrero":
			alert("Veranito!!!");
			break;
		default:
			alert("extraño enero y febrero!!!");
	}
	
}

