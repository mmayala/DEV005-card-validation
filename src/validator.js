const validator = {
  isValid: function (numeroTarjeta) {
    //numero inverso
    const nuevoArr = numeroTarjeta.split("").reverse();
    
    for (let i = 0; i < nuevoArr.length; i++){
      nuevoArr[i]=parseInt(nuevoArr[i])
    }
    //console.log(nuevoArr);

    //se itera sobre cada elemento del ciclo for identificando los numeros en posiones pares
    let suma =0;
    for (let i = 0; i < nuevoArr.length; i++) {
      if ((i + 1) % 2 === 0) { 
        //los numeros en posiciones pares se multiplica por dos 
        nuevoArr[i] = nuevoArr[i] * 2;
        //console.log(nuevoArr[i]);
        //Si el resultado es > a 9 se suman los dos digitos
        if (nuevoArr[i] > 9) {
          const cadena = nuevoArr[i].toString().split('');
          const sumandoDigitos = parseInt(cadena[0]) + parseInt(cadena[1]);
          nuevoArr[i] = sumandoDigitos;
        
        }
        
      }
    }
    //se itera en otro ciclo for para sumar los elementos del arrary
    for (let i = 0; i < nuevoArr.length; i++) {
      suma = suma+nuevoArr[i];
    }
    //console.log(suma);
    //si el residuo es 0 devuelve un booleano
    if (suma % 10 === 0){
      return true;
    } else {
      return false;
    }
  },



  maskify: function (cc){
    return cc.slice (0,-4).replace(/./g, "#")+
  cc.slice(-4);
  }  
};
export default validator;
