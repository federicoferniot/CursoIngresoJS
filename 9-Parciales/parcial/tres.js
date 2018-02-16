function Mostrar()
{
	var largo, ancho, perimetro;

	largo = parseInt(document.getElementById('alrgo').value);
	ancho = parseInt(document.getElementById('ancho').value);

	perimetro = (largo*2)+(ancho*2);

	alert("Se necesitan "+(perimetro*3)+"m de alambre");
}
