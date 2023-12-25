// Defino clase
class Gasto {

    constructor(descripcion, monto) {
    this.descripcion = descripcion;
    this.monto = monto;
}

    obtenerInfo() {
        return `Descripción: ${this.descripcion}, Monto: $${this.monto}`;
    }
}

// Función que agrega nuevo gasto al arreglo
function agregarGasto(gastos, descripcion, monto) {
    const nuevoGasto = new Gasto(descripcion, monto);
    gastos.push(nuevoGasto);
    alert(`Gasto "${descripcion}" agregado correctamente.`);
}


// Función que calcula el total de gastos
function calcularTotalGastos(gastos) {
    let total = 0;

    for (let i = 0; i < gastos.length; i++) {
        total += gastos[i].monto;
    }

    return total;
}

function gestionarGastosDiarios() {
    // Arreglo para almacenar los gastos
    const listaGastos = [];

    while (true) {
    // Muestra un menú con opciones para el usuario
    const opcion = prompt(
        'Selecciona una opción:\n1. Agregar gasto\n2. Mostrar gastos\n3. Calcular total\n4. Salir'
    );

    switch (opcion) {
        case '1':

            // Pide la descripcion y el valor de los gastos al usuario
            const descripcionGasto = prompt('Ingrese la descripción del gasto:');
            const montoGasto = parseFloat(prompt('Ingrese el valor del gasto:'));

            // Valida que el valor sea un número
            if (!isNaN(montoGasto)) {
                agregarGasto(listaGastos, descripcionGasto, montoGasto);
            } 
            else {
                alert('Por favor, ingrese un valor válido.');
            }
            break;

        case '2':
            // Muestra la lista de gastos
            if (listaGastos.length === 0) {
                alert('No hay gastos registrados.');
            } 
            else {
                let mensaje = 'Lista de gastos:\n';
                for (let i = 0; i < listaGastos.length; i++) {
                mensaje += `${i + 1}. ${listaGastos[i].obtenerInfo()}\n`;
                }
                alert(mensaje);
            }
            break;

        case '3':
            // Calcula y mustrar el total de gastos
            const totalGastos = calcularTotalGastos(listaGastos);
            alert(`Total de gastos: $${totalGastos.toFixed(2)}`);
            break;

        case '4':
            // Sale del programa
            alert('¡Hasta luego!');
            return;

        default:
            alert('Opción no válida. Por favor, selecciona una opción válida.');
            break;
        }
    }
}

gestionarGastosDiarios();
