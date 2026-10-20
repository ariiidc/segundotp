let suma=0
let numeros=0
let continuar=true
do{
  numeros=parseInt(prompt("Dime un numero y lo sumaremos"))
  if(isNaN(numeros)){
    alert("Incorrecto ponga un numero")
  }
  else{
    suma=suma+numeros
  }
  
    if(confirm("Desea seguir sumando?")==false){

    alert("Tu suma es: "+suma)
    continuar=false
  }
  
  
}while(continuar==true)