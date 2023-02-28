const numeroTarjeta = '4446461513462752'; // no es necesaria porque tu tienes el parametros
const nuevoArr= numeroTarjeta.split("").reverse();

for(let i = 0; i < nuevoArr.length; i++){
  nuevoArr[i]=parseInt(nuevoArr[i])
}

//console.log(nuevoArr)

let suma=0
for (let i = 0; i < nuevoArr.length; i++) {
  if ((i + 1) % 2 === 0) {
    nuevoArr[i] = nuevoArr[i] * 2;
    if (nuevoArr[i] > 9) {
      const dividido=nuevoArr[i].toString().split("");
      const sumandoDigitos= parseInt(dividido[0]) + parseInt(dividido[1]);
      nuevoArr[i] = sumandoDigitos;     
    }
  }
}
// sumamos elementos fuera del for
for(let i = 0; i < nuevoArr.length; i++){
  suma=suma+nuevoArr[i]
}
///console.log(suma)
if (suma % 10 === 0) {
  // aqui va el return true
  // console.log('tarjeta valida');
} else {
  // aqui el return false
  //console.log('tarjeta invalida');
}
