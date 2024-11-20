// Carlos Rondón Pérez / RA1, Actividad 2: Fundamentos de JavaScript. Control de Flujo.

// Definimos constantes y variables
const tipoEntradas = ["general", "vip", "infantil"]; 
let entradaUser, numEntradas, costo; 

// Función donde el usuario selecciona la categoría de su entrada 
function obtenerEntrada() {
  let entrada = window.prompt(
    "Ingrese la categoría de entrada (General, VIP, Infantil): "
  );
  
  // Si el usuario presiona "Cancelar", se asigna una cadena vacía
  if (entrada === null) {
    entrada = "";
  }
  
  // Convertimos la entrada a minúsculas y eliminamos espacios adicionales
  return entrada.toLowerCase().trim();
}

// Función donde el usuario selecciona el número de entradas que desea comprar
function obtenerNumEntradas() {
  let entrada;

  do {
    entrada = window.prompt("Ingrese la cantidad de entradas: ");
    
    // Validamos que el usuario haya ingresado un número entero positivo
    if (entrada === null || entrada.trim() === "" || !entrada.match(/^\d+$/) || +entrada <= 0) {
      entrada = ""; // Si no es válido, asignamos una cadena vacía para repetir el bucle
    }
  } while (entrada === "");
  
  return +entrada;
}

// Bucle para asegurar que el usuario seleccione una categoría de entrada válida
do {
  entradaUser = obtenerEntrada();
} while (!tipoEntradas.includes(entradaUser)); 

// Obtenemos la cantidad de entradas
numEntradas = obtenerNumEntradas();

// Determinamos el costo unitario de la entrada según la categoría seleccionada
switch (entradaUser) {
  case "general":
    costo = 50; 
    break;
  case "vip":
    costo = 100; 
    break;
  case "infantil":
    costo = 25; 
    break;
}

// Calculamos el costo total multiplicando el costo unitario por el número de entradas
costo *= numEntradas; 

let confirmacion;

// Bucle para confirmar la compra
do {
  confirmacion = window.prompt(
    `El costo total es de ${costo}. ¿Desea confirmar la compra? (Si/No): `
  );
  
  // Si el usuario presiona "Cancelar", se asigna una cadena vacía
  if (confirmacion === null) {
    confirmacion = "";
  }
  
  // Convertimos la confirmación a minúsculas y eliminamos espacios adicionales
  confirmacion = confirmacion.toLowerCase().trim();
} while (confirmacion !== "si" && confirmacion !== "no"); 

// Si el usuario confirma la compra imprimimos un mensaje para cada entrada adquirida
if (confirmacion === "si") {
  for (let i = 1; i <= numEntradas; i++) {
    window.alert(`Entrada ${i} impresa.`);
  }
  
  // Mostramos un mensaje de éxito o cancelación al finalizar la compra
  window.alert("¡¡¡Compra realizada con éxito!!!");
} else {
  window.alert("Compra cancelada.");
}
