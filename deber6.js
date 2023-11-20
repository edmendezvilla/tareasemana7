


function multiplicar(multiplicador, multiplicando) {
    let suma = 0;

    for(let i=0;i<multiplicador; i++) {
        suma =suma + multiplicador;

    }

    return suma;
}
let multiplicando= Number(prompt("Ingresar primer valor."));
let multiplicador = Number(prompt("Ingresar segundo valor"));
// Ejemplo de uso
let resultado = multiplicar(multiplicar,multiplicando);
alert(resultado);

