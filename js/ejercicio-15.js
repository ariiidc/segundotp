let frase=""
let contador=0
let vocal=""
do{
  frase=prompt("Dime una frase: ")
  if(!isNaN(frase)){
    alert("Por favor ingrese una frase")
  }
}while(!isNaN(frase))
  frase=frase.toUpperCase()

  for(i=0;i<=frase.length;1++){
    if(frase=="A"||"E"||"I"||"O"||"U"){
      vocal++
      }
  }
alert("Las vocales de tu palabra son: "+vocal)