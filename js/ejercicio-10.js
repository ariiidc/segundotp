let filas=0
let columnas=0
let celdas=0
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
  for(i=1;i>=columnas;i++){
    for(x=1;x>=celdas;x++){

      celdas++
    }
    document.getElementById("ejercicio-9").innerHTML+= "(Multiplo de 9)"
  }

