/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(Math.random() * 100)+1;
		//alert(numeroSecreto );
	console.log(numeroSecreto);
	contadorIntentos=0;
	document.getElementById('intentos').value = contadorIntentos;

}

function verificar()
{
	var numeroIngresado;

	/* Contador, otra formas de realizarlo:
		contadorIntetos = contadoIntentos + 1;
		contadorIntentos += 1;
		++contador; (pre incremento)
	*/
	contadorIntentos++; //post incremento
	document.getElementById('intentos').value = contadorIntentos;

	if(contadorIntentos>10)
	{
		alert("Perdiste");
		return;
	}

	numeroIngresado = document.getElementById('numero').value;
	if(numeroIngresado<numeroSecreto)
	{
		alert("falta...");
	}
	else if(numeroIngresado>numeroSecreto)
	{
		alert("se pasó...");
	}
	else if(contadorIntentos!=1)
	{
		alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos");
	}
	else
	{
		numeroSecreto = Math.floor(Math.random() * 100)+1;
		console.log(numeroSecreto);
		contadorIntentos=0;
		verificar();
	}
	
}