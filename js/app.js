console.log("Mini Games iniciado");

function jugarPiedraPapelTijera() {
    alert("Entraste a Piedra, Papel o Tijera");
}

function jugarCaraOCruz() {
    alert("Entraste a Cara o Cruz");
}

function jugarAdivinaNumero() {
    alert("Entraste a Adivina  el Número");
}

function crearPlaylist() {
    alert("Entraste a Crear una Playlist");
}

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