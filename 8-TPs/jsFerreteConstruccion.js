/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var largo;
var ancho;
var radio;
var perimetro;
var resultado;

function Rectangulo () 
{
	largo = parseInt(document.getElementById('Largo').value);
	ancho = parseInt(document.getElementById('Ancho').value);

	//Calculo el perimetro
	perimetro = (largo * 2) + (ancho * 2);

	//Muestro metros de alambre a comprar
	alert("Se necesitan "+perimetro * 3+"m de alambre");

}
function Circulo ()
{
	radio = parseInt(document.getElementById('Radio').value);

	//Calculo el perimetro
	perimetro = Math.floor(2 * Math.PI * radio);

	//Muestro metros de alambre a comprar
	alert("Se necesitan "+perimetro * 3+ "m de alambre")	
}
function Materiales () 
{
	var area;
	var cemento;
	var cal;

	largo = parseInt(document.getElementById('Largo').value);
	ancho = parseInt(document.getElementById('Ancho').value);

	area = largo * ancho;
	cemento = area*2
	cal = area*3

	alert("Se necesitan "+ cemento +" bolsas de cemento y "+ cal +" bolsas de cal.")
}