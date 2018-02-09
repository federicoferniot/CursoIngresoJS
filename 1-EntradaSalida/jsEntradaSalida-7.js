/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

//Declaro variables globales
var numeroUno;
var numeroDos;
var resultado;

function sumar()
{	

	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);

	resultado = numeroUno + numeroDos;

	alert("La suma es " + resultado);
}

function restar()
{

	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);

	resultado = numeroUno - numeroDos;

	alert("La resta es " + resultado);
}

function multiplicar()
{ 

	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);

	resultado = numeroUno * numeroDos;

	alert("La multiplicacion es " + resultado);
}

function dividir()
{

	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);

	resultado = numeroUno / numeroDos;

	alert("La multiplicacion es " + resultado);
}

