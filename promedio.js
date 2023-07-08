const calcularPromedio = (numeros) => {
    let suma = 0;

    let cantidadNumeros = numeros.length;

    for (let i = 0; i < cantidadNumeros; i++){
        suma += numeros[i];
    }

    let promedio = suma / numeros.length;

    return promedio;

}

let numeros = [2, 15, 7, 25, 4];

let resultado = calcularPromedio(numeros);

console.log(resultado);