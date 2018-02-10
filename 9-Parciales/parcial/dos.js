function Mostrar()
{
  var importe;
  var importeFinal;

  importe = parseInt(prompt("Ingrese el importe"));

  importeFinal = importe + (importe*21/100);
  document.getElementById('importeFinal').value = importeFinal;
}
