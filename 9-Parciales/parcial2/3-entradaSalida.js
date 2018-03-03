//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var metrosDeAlambre;
	var cantidadHilosDeAlambre=6;
	//alert("Funciona 3-EntradaSalida");

	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);
	largo=document.getElementById('largo').value;
	largo=parseInt(largo);

	perimetro=ancho*2+largo*2;
	metrosDeAlambre=perimetro*cantidadHilosDeAlambre;

	alert("Se necesitan "+metrosDeAlambre+"m");
}

