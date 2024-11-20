# Actividad 2 RA1 JavaScript - Venta de Entradas

## Descripción

Este proyecto implementa un sistema interactivo para la venta de entradas utilizando JavaScript y una página HTML básica. Permite al usuario seleccionar una categoría de entrada, ingresar la cantidad deseada, calcular el costo total y confirmar o cancelar la compra.

### Funcionalidades principales:
1. Validación del tipo de entrada seleccionada (general, VIP, infantil).
2. Validación de la cantidad de entradas ingresada.
3. Cálculo del costo total según la categoría seleccionada.
4. Confirmación de la compra y generación de mensajes en la consola para cada entrada.
5. Cancelación de la compra si el usuario lo decide.

## Archivos incluidos

- **actividadRA1_entradas.js**: Archivo con el código principal en JavaScript.
- **index.html**: Archivo HTML que sirve como punto de entrada para ejecutar el script.

## Requisitos

- **Navegador web**: Este proyecto se ejecuta directamente en un navegador web con soporte para JavaScript.

## Instrucciones de Ejecución

1. **Descarga los archivos**  
   Asegúrate de tener los archivos `actividadRA1_entradas.js` y `index.html` en el mismo directorio.

2. **Abrir el archivo HTML**  
   - Haz doble clic en el archivo `index.html` para abrirlo en tu navegador web.

3. **Interacción con la aplicación**  
   - Sigue las instrucciones en las ventanas emergentes:
     1. Ingresa la categoría de entrada: "general", "vip" o "infantil".
     2. Ingresa la cantidad de entradas (un número mayor que cero).
     3. Confirma o cancela la compra al ver el costo total.
   - Si confirmas, las entradas se imprimirán.

## Estructura del Código

### JavaScript
- **Funciones principales**:
  - `obtenerEntrada()`: Solicita y valida la categoría de entrada.
  - `obtenerNumEntradas()`: Solicita y valida el número de entradas.
- **Lógica principal**:
  - Valida las entradas y calcula el costo total.
  - Muestra un mensaje de confirmación y gestiona la impresión de entradas.

### HTML
- Contiene una referencia al script JavaScript (`actividadRA1_entradas.js`) que se ejecuta automáticamente al cargar la página.

## Notas adicionales

- **Errores manejados**:
  - El sistema no permite categorías de entrada no válidas.
  - Solo se aceptan cantidades de entradas mayores que cero.

- **Requerimientos**:
  - Este código no depende de herramientas externas como Node.js, ya que está diseñado para ejecutarse directamente desde un navegador.

--- 
*Desarrollado por Carlos Rondón Pérez.*
