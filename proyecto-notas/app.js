const readline = require("readline-sync");

const aprendices = [
 { nombre: "Ana", nota: 4.5, programa: "ADSO" },
 { nombre: "Luis", nota: 2.8, programa: "ADSO" },
 { nombre: "Marta", nota: 3.7, programa: "Diseño Web" },
 { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
 { nombre: "Sofía", nota: 5.0, programa: "Diseño Web" }
];



//  Map + Sort en una sola línea
const resultado = aprendices
  .map(a => ({ ...a, nombre: a.nombre.toUpperCase() }))
  .sort((a, b) => a.nombre.localeCompare(b.nombre));

// Mostrar resultado
resultado.forEach(a =>
  console.log(`${a.nombre} - Nota: ${a.nota}`)
);


const aprobados = aprendices.filter(aprendiz => aprendiz.nota >= 3.0);
console.log("\nAprendices aprobados:");
aprobados.forEach(aprendiz => console.log(`${aprendiz.nombre} - Nota: ${aprendiz.nota} - Programa: ${aprendiz.programa}`));

const reprobados = aprendices.filter(aprendiz => aprendiz.nota < 3.0);
console.log("\nAprendices reprobados:");
reprobados.forEach(aprendiz => console.log(`${aprendiz.nombre} - Nota: ${aprendiz.nota}- Programa: ${aprendiz.programa}`));


const promedio = aprendices.reduce((acc, aprendiz) => acc + aprendiz.nota, 0) / aprendices.length;
console.log(`Promedio de notas: ${promedio.toFixed(2)}`);
promedio >= 3.0 ? console.log("El programa tiene un buen desempeño.") : console.log("El programa necesita mejorar.");

aprendices.sort((a, b) => b.nota - a.nota);
console.log("\nAprendices ordenados por nota (de mayor a menor):");
aprendices.forEach(aprendiz => console.log(`${aprendiz.nombre} - Nota: ${aprendiz.nota} - Programa: ${aprendiz.programa}`));

const nota = 50;
let mensaje = "";

switch (true) {
  case (nota >= 1.0 && nota < 3.0):
    mensaje = "Bajo";
    break;
  case (nota >= 3.0 && nota < 4.0):
    mensaje = "Básico";
    break;
  case (nota >= 4.0 && nota <= 4.9):

    mensaje = "Alto";
    break;
    case (nota === 5.0):
    mensaje = "Superior";
    break;
    default:
    mensaje = "Nota fuera de rango";
}
console.log(`La nota ${nota} es considerada: ${mensaje}`);

 let menu="Bienvenido al sistema de gestión de notas"
 let opcion = ""; // declarar 

 while (opcion !== "5") {
  console.log("\n" + menu);
  console.log("1. Ver aprendices ordenados por nombre");
  console.log("2. Ver aprendices aprobados");
  console.log("3. Ver aprendices reprobados");
  console.log("4. Ver promedio de notas");
  console.log("5. Salir");

    let opcion = readline.question("Seleccione una opcion: ");
    switch (opcion) {
        case "1":
            console.log("\nAprendices ordenados por nombre:");
            aprendices.forEach(aprendiz => console.log(`${aprendiz.nombre} - Nota: ${aprendiz.nota} - Programa: ${aprendiz.programa}`));
            break;
        case "2":
            console.log("\nAprendices aprobados:");
            aprobados.forEach(aprendiz => console.log(`${aprendiz.nombre} - Nota: ${aprendiz.nota} - Programa: ${aprendiz.programa}`));
            break;
        case "3":            console.log("\nAprendices reprobados:");
            reprobados.forEach(aprendiz => console.log(`${aprendiz.nombre} - Nota: ${aprendiz.nota} - Programa: ${aprendiz.programa}`));
            break;
        case "4":
            console.log(`Promedio de notas: ${promedio.toFixed(2)}`);
            promedio >= 3.0 ? console.log("El programa tiene un buen desempeño.") : console.log("El programa necesita mejorar.");
            break;
        case "5":
            console.log("Saliendo del sistema. ¡Hasta luego!");
            break;  
        default:
            console.log("Opción no válida. Por favor, seleccione una opción del 1 al 5.");
    }
}