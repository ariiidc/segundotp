let edad=""
do{
  edad=prompt('Ingrese su edad por favor: ')
  if(isNaN(edad)||edad<=0||edad%1!==0){
    alert('porfavor ingrese un numero valido')
  }
}while(isNaN(edad)||edad<=0||edad%1!==0)
  if(edad>18){
    alert('Es mayor de edad, puede conducir')
  }
  else{
    alert('No es mayor de edad, no puede conducir')
  }