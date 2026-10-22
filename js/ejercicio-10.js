let filas=0
let columnas=0
let celdas=0
let resultado=""
do{
   filas=prompt("Elija el numero de filas")
  if(isNaN(filas)||filas%1!==0||filas<0){
    alert("Por favor ingrese un numero valido")
  }
}while(isNaN(filas)||filas%1!==0||filas<0)
do{
   columnas=prompt("Elija el numero de columnas")
  if(isNaN(columnas)||columnas%1!==0||columnas<0){
    alert("Por favor ingrese un numero valido")
  }
}while(isNaN(columnas)||columnas%1!==0||columnas<0)

celdas=filas*columnas

 resultado=resultado+'<table>'

  for(i=1;i<=filas;i++){
    resultado=resultado+'<tr>'
    for(x=1;x<=columnas;x++){
      resultado=resultado+"<td>"+celdas+"</td>" 

      celdas--
    }
     resultado=resultado+'</tr>'
  }

  resultado=resultado+'</table>'
  document.getElementById("ejercicio-10").innerHTML+=resultado


