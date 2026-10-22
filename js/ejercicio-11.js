let edad1=0
let edad2=0
let edad3=0
let nombre1=""
let nombre2=""
let nombre3=""
let resultado=""
do{
   nombre1=prompt("Dime tu nombre: ")
  if(!isNaN(nombre1)){
    alert("Ingrese un nombre correcto porfavor")
  }
}while(!isNaN(nombre1))
do{
  edad1=prompt("Dime tu edad "+nombre1)
  if(isNaN(edad1)||edad1%1!==0||edad1<0){
    alert("Ingrese una edad valida por favor")
  }
  
  
}while(isNaN(edad1)||edad1%1!==0||edad1<0)

do{
   nombre2=prompt("Dime tu nombre: ")
  if(!isNaN(nombre2)){
    alert("Ingrese un nombre correcto porfavor")
  }
}while(!isNaN(nombre2))
do{
  edad2=prompt("Dime tu edad "+nombre2)
  if(isNaN(edad2)||edad2%1!==0||edad2<0){
    alert("Ingrese una edad valida por favor")
  }
  
  
}while(isNaN(edad2)||edad2%1!==0||edad2<0)

do{
   nombre3=prompt("Dime tu nombre: ")
  if(!isNaN(nombre3)){
    alert("Ingrese un nombre correcto porfavor")
  }
}while(!isNaN(nombre3))
do{
  edad3=prompt("Dime tu edad "+nombre3)
  if(isNaN(edad3)||edad3%1!==0||edad3<0){
    alert("Ingrese una edad valida por favor")
  }
  
  
}while(isNaN(edad3)||edad3%1!==0||edad3<0)

let mayor=Math.max(edad1, edad2, edad3)
if(mayor==edad1){
  resultado=resultado+" "+nombre1
}
if(mayor==edad2){
  resultado=resultado+" "+nombre2
}
if(mayor==edad3){
  resultado=resultado+" "+nombre3
}
alert("La/s persona/s mayor/es: "+resultado)
