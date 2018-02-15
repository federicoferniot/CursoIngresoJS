/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precioUno;
var precioDos;
var precioTres;
var suma;
var resultado;

function Sumar () 
{
	precioUno = parseInt(document.getElementById('PrecioUno').value);
	precioDos = parseInt(document.getElementById('PrecioDos').value);
	precioTres = parseInt(document.getElementById('PrecioTres').value);

	resultado = precioUno + precioDos + precioTres;

	alert(resultado);
}
function Promedio () 
{
	precioUno = parseInt(document.getElementById('PrecioUno').value);
	precioDos = parseInt(document.getElementById('PrecioDos').value);
	precioTres = parseInt(document.getElementById('PrecioTres').value);

	resultado = (precioUno + precioDos + precioTres)/3;

	alert(resultado);
}
function PrecioFinal () 
{
	precioUno = parseInt(document.getElementById('PrecioUno').value);
	precioDos = parseInt(document.getElementById('PrecioDos').value);
	precioTres = parseInt(document.getElementById('PrecioTres').value);

	suma = precioUno + precioDos + precioTres;
	resultado = (suma*21/100) + suma;

	alert(resultado);

}