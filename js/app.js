console.log("Mini Games iniciado");

// ====================
// JUEGOS
// ====================

// Juego 1: Piedra Papel Tijera
function jugarPiedraPapelTijera() {
    alert("Entraste a Piedra, Papel o Tijera");
}

// Juego 2: Cara o Cruz
function jugarCaraOCruz() {
    alert("Entraste a Cara o Cruz");
}

// Juego 3: Adivina el Número
function jugarAdivinaNumero() {
    alert("Entraste a Adivina  el Número");

    const numeroAzar = Math.floor(Math.random() * 10) + 1;

let numeroUsuario = Number(prompt("Intenta adivinar el número del 1 al 10"));

while (numeroUsuario !== numeroAzar) {

    alert("Ese no es el número");

    if (numeroUsuario < numeroAzar) {

        alert("El número que elegiste es menor al número que debes adivinar. Sigue intentando!");
        numeroUsuario = Number(prompt("Vuelve a elegir un número del 1 al 10"));
        
    } else {

        alert("El número que elegiste es mayor al número que debes adivinar. Sigue intentando!");
        numeroUsuario = Number(prompt("Vuelve a elegir un número del 1 al 10"));
    }    
} 

alert("¡Acertaste!");
}

// Juego 4: Playlist
function crearPlaylist() {
    alert("Entraste a Crear una Playlist");

    const playlist = prompt("Ingrese el nombre de la playlist");

let cantidad = Number(prompt("¿Cuántas canciones desea agregar?"));

const canciones = [];

for (let i = 0; i < cantidad; i++) {

    const cancion = prompt("Ingresa una canción:");

    canciones.push(cancion);

    const faltan = cantidad - (i + 1);

    if (faltan > 0) {
        alert(`Te quedan ${faltan} canciones por agregar`);
    } else {
        alert("Ya agregaste todas las canciones");
    }

    alert(`Playlist actual: ${canciones}`);
}

alert(`Tu playlist es: ${playlist}
con las siguientes canciones:
${canciones.join(", ")}`);
}

// ====================
// MENÚ PRINCIPAL
// ====================

let opcion = "";

while (opcion !== "5") {

    opcion = prompt(`
    ===== MINI GAMES =====

    1 - Piedra Papel Tijera
    2 - Cara o Cruz
    3 - Adivina el Número
    4 - Playlist
    5 - Salir
    `);

    switch (opcion) {

        case "1":
            jugarPiedraPapelTijera();
            break;

        case "2":
            jugarCaraOCruz();
            break;

        case "3":
            jugarAdivinaNumero();
            break;

        case "4":
            crearPlaylist();
            break;

        case "5":
            alert("¡Gracias por jugar!");
            break;

        default:
            alert("Opción inválida");
    }
}