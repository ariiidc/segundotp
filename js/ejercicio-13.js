let frase=""
do{
  frase=prompt("Dime una frase: ")
  if(!isNaN(frase)){
    alert("Por favor ingrese una frase")
  }
}while(!isNaN(frase))


mayuscula=frase.toUpperCase()
alert("Tu frase es: "+mayuscula)