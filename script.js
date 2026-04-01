console.log('Hola desde JavaScript!');

let nombre = 'Yael';
let edad = 20;
let estaAprendiendo = true;
const curso = 'Code 101';
const maxIntentos = 10;

console.log(nombre);
console.log(edad);
console.log(estaAprendiendo);
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof estaAprendiendo);
console.log("Hola soy", nombre);
console.log(curso);
console.log(maxIntentos);

// --- Entrada del usuario ---

let nombreUsuario = prompt('Como te llamas?');
let edadUsuario = Number(prompt('Cual es tu edad?'));

// --- Salida al usuario ---

alert("Hola " + nombreUsuario + ", tienes " + edadUsuario + " años.");

console.log('Nombre:', nombreUsuario);
console.log('Edad:', edadUsuario);

console.log(typeof nombreUsuario);
console.log(typeof edadUsuario);

// --- Operadores aritméticos ---

let a = 20;
let b = 7;

console.log('Suma:', a + b);
console.log('Resta:', a - b);
console.log('Multiplicacion:', a * b);
console.log('Division:', a / b);
console.log('Modulo:', a % b);

// Forma 1: Concatenación con +

let saludo1 = 'Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años.';
console.log(saludo1);

// Forma 2: Template literals con `` (backticks)

let saludo2 = `Hola ${nombreUsuario}, tienes ${edadUsuario} años.`;
console.log(saludo2);

// --- Calculadora de edad ---

let anioActual = 2026;
let anioNacimiento = anioActual - Number(edadUsuario);

console.log(`Hola ${nombreUsuario}, naciste aproximadamente en ${anioNacimiento}.`);

// --- Primer Reto ---

let ciudad = prompt("En que ciudad vives?");

alert(`Hola ${nombreUsuario}, tienes ${edadUsuario} años y vives en ${ciudad}.`)

console.log(`Hola ${nombreUsuario}, tienes ${edadUsuario} años y vives en ${ciudad}.`);

// --- Segundo Reto ---

let edadNum = parseInt(edadUsuario);
let anio100 = anioActual + (100 - edadNum);

console.log(`Cumpliras 100 años en el año ${anio100}.`);

// --- Tercer Reto ---

if (edadNum >= 18) {
    console.log("Acceso Concedido. Eres mayor de edad.");
} else {
    console.log("Acceso Restringido. Eres menor de edad.");
}