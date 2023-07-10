/////
const readlineSync = require("readline-sync")


const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const obtenerNumeroUsuario = () => {
    return readlineSync.question("Ingrese un numero: ")
}

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado == numeroSecreto){
        console.log("Adivinaste el numero");
    } else if(numeroAdivinado > numeroSecreto) {
        console.log("El numero secreto es menor ...");
    } else{
        console.log("El numero secreto es mayor ...");
    }
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log(numeroSecreto);
    console.log("Intena adivinar el numero del 1 al 100");
    while (numeroAdivinado != numeroSecreto){
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
};

juegoAdivinanza();