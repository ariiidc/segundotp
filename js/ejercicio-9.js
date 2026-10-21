let numeros=0;
  for(numeros=1;numeros<=500;numeros++){
    document.getElementById("ejercicio-9").innerHTML+=numeros
    if(numeros%5==0){
      document.getElementById("ejercicio-9").innerHTML+= "<br><hr>"
    }
    else if(numeros%4==0){
      document.getElementById("ejercicio-9").innerHTML+= "(Multiplo de 4)"
    }
    else if(numeros%9==0){
      document.getElementById("ejercicio-9").innerHTML+= "(Multiplo de 9)"
    }
    document.getElementById("ejercicio-9").innerHTML+="<br>"
  }
