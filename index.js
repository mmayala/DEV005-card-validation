import validator from './validator.js'

const imprimir = document.getElementById('imprimir')

// cuando el usuario hace clic se mostrara el mensaje
document.getElementById('validar').addEventListener('click', function(){
  const tarjeta = document.getElementById('tarjeta').value;

 
  //imprimir en la web si el resultado
  
  const resultadoTarjeta = validator.isValid(tarjeta);
  if (resultadoTarjeta === true){
    imprimir.innerHTML = 'tarjeta valida'
  } else {
    imprimir.innerHTML = 'tarjeta invalida'
  }


  
  //enmascarar los 12 digitos de la tarjeta
  const cc = validator.maskify(tarjeta);
  document.getElementById('ocultar').innerHTML = cc;

});
 

  
  
 
//console.log(validator);