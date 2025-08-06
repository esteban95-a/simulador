function nombreCliente(){
    return "Juan Perez";
}
function numeroCliente(){
    return "1234567890";
}
function obtenerConsumo(){
  let lecturaactual1 = 256;
  let lecturaanterior1 = 200;
  let consumo = lecturaactual1 - lecturaanterior1;
  return consumo;
}
function tarifabase(){
    let tarifadiaria = 0.15;
    let tarifamesual = 4.50;
    let tarifabase = (tarifadiaria * 30) + tarifamesual;
    return tarifabase;
} 
let obtenercargofijo = function(){
    let tarifaadministrativa = 1500;
    let costomantenimiento = 2000;
    let cargofijo = tarifaadministrativa + costomantenimiento;
    return cargofijo;
}