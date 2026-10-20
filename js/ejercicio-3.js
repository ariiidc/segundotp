let frase=""
let continuar=true
do{
  
  let palabra =prompt('Dime una frase o palabra')
  frase= frase+"-"+palabra
  if(confirm("Deseas agregar mas?")==false){
    alert("Tu frase es: "+frase)
    continuar=false
  }
}while(continuar==true)