// Array para almacenar las calificaciones
const calificaciones = [];

// Función para agregar calificaciones
function agregarCalificacion() {
    const calificacion = parseFloat(prompt("Ingresa una calificación (entre 0 y 10):"));

    // Validar que la calificación sea un número válido
    if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
        alert("Por favor, ingresa un número válido entre 0 y 10.");
        return;
    }

    // Agregar la calificación al array
    calificaciones.push(calificacion);
    alert(`Calificación ${calificacion} agregada correctamente.`);
    console.log("Calificaciones actuales:", calificaciones);
}

// Función para calcular el promedio
function calcularPromedio() {
    if (calificaciones.length === 0) {
        alert("No hay calificaciones registradas. Agrega al menos una calificación.");
        return;
    }

    // Sumar todas las calificaciones
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }

    // Calcular el promedio
    const promedio = suma / calificaciones.length;
    return promedio;
}

// Función para mostrar el resultado
function mostrarResultado() {
    const promedio = calcularPromedio();

    if (promedio === undefined) {
        return; // Si no hay calificaciones, no se muestra nada
    }

    // Determinar si el usuario aprobó o no
    const promedioMinimo = 6; // Promedio mínimo para aprobar
    const resultado = promedio >= promedioMinimo ? "Aprobado" : "Reprobado";

    // Mostrar el resultado al usuario
    const mensaje = `
    === RESULTADO ===
    Promedio: ${promedio.toFixed(2)}
    Estado: ${resultado}
    `;
    alert(mensaje);
    console.log(mensaje);
}

// Función principal para mostrar el menú
function mostrarMenu() {
    const opcion = prompt(`
        Selecciona una opción:
        1. Agregar calificación
        2. Calcular promedio
        3. Mostrar resultado
        4. Salir
    `);

    switch (opcion) {
        case "1":
            agregarCalificacion();
            break;
        case "2":
            const promedio = calcularPromedio();
            if (promedio !== undefined) {
                alert(`El promedio actual es: ${promedio.toFixed(2)}`);
                console.log(`Promedio actual: ${promedio.toFixed(2)}`);
            }
            break;
        case "3":
            mostrarResultado();
            break;
        case "4":
            alert("¡Gracias por usar el simulador!");
            return;
        default:
            alert("Opción inválida. Por favor, selecciona una opción del menú.");
    }

    // Volver a mostrar el menú
    mostrarMenu();
}

// Iniciar el simulador
console.log("¡Bienvenido al Simulador de Promedios!");
mostrarMenu();