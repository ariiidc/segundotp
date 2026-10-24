let frase=""
let contador=0
let vocal=""
let letra=""
do{
  frase=prompt("Dime una frase: ")
  if(!isNaN(frase)){
    alert("Por favor ingrese una frase")
  }
}while(!isNaN(frase))
  frase=frase.toUpperCase()

  for(i=0;i<=frase.length;i++){
    letra=frase.charAt(i)
    
    if(letra=="A"||letra=="E"||letra=="I"||letra=="O"||letra=="U"){
      vocal=vocal+letra
      contador++
      }
  }
alert("Las vocales de tu palabra son: "+vocal+" "+contador)