let resultado=""
let numUsuario=0
do{
  numUsuario=prompt("Dime un numero igual o menor a 50 y mayor que 1")
  if(numUsuario>50||numUsuario<=1||isNaN(numUsuario)){
    alert("Por favor ingrese un numero que cumpla lo pedido")
  }
}while(numUsuario>50||numUsuario<=1||isNaN(numUsuario))

for(numero=1;numero<=numUsuario;numero++){
for(cantidad=1;cantidad<=numero;cantidad++){
  document.getElementById("ejercicio-8").innerHTML=
  resultado+=cantidad
}
  document.getElementById("ejercicio-8").innerHTML=
  resultado+="<br></br>"
}