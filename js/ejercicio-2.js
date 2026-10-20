let valor=""
do{
valor = parseInt(prompt('Ingrese una nota del 1 al 10'))
if (valor>10||valor<0){
  alert('Su numero es erroneo')
}
else if (isNaN(valor)){
  alert('Introduce un número válido')
}
}while(valor>=10||valor<=0||isNaN(valor))
switch(valor){
  case 0:
  case 1:
  case 2:
    alert('Muy deficiente')
    break;
  case 3:
  case 4:
    alert('Insuficiente')
    break;
  case 5:
  case 6:
    alert('Suficiente')
    break;
  case 7:
    alert(' Bien')
    break;
  case 8:
  case 9:
    alert('Notable')
    break;
  case 10:
    alert('Sobresaliente')
    break;
}