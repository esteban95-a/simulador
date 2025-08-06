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
    let tarifabas = (tarifadiaria * 30) + tarifamesual;
    return tarifabas;
} 
let obtenercargofijo = function(){
    let tarifaadministrativa = 1500;
    let costomantenimiento = 2000;
    let cargofijo = tarifaadministrativa + costomantenimiento;
    return cargofijo;
}
let valoriva = function(){
    let base = 10;
    let iva = base * 0.19;
    return iva;
}
let calcularsubtotal = () => {
    let consumosubtotal = obtenerConsumo();
    let tarifa = tarifabase();
    let subtotal = consumosubtotal * tarifa;
    return subtotal;
}   
let calcularvaloriva = () => {
    let sbtotal = calcularsubtotal();
    let iva2 = valoriva();
    let ttal = sbtotal * iva2 / 100;
    return ttal;
}
let calcularTotalPagar = () => {
    let subtotalfinal = calcularsubtotal();
    let ivafinal = calcularvaloriva();
    let cargofinal = obtenercargofijo();
    let totalpagar = subtotalfinal + ivafinal + cargofinal;
    return totalpagar;
}
function mostrarFactura(){
    console.log("Nombre del Cliente: " + nombreCliente());
    console.log("Número de Cliente: " + numeroCliente());
    console.log("Consumo (kWh): " + obtenerConsumo() + " kWh");
    console.log("Tarifa Base: $" + tarifabase().toFixed(2));
    console.log("Cargo Fijo: $" + obtenercargofijo().toFixed(2));
    console.log("Subtotal: $" + calcularsubtotal().toFixed(2));
    console.log("IVA: $" + calcularvaloriva().toFixed(2));
    console.log("Total a Pagar: $" + calcularTotalPagar().toFixed(2));
}
mostrarFactura();
