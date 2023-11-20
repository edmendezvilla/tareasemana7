
    'use strict'

function resta (fechaactual,fechanacimineto) {
    let resta =(fechaactual-fechanacimineto)
    return resta;

}
let fechaactual = Number (prompt("ingresefechaactual"));
let fechanacimineto = Number(prompt("ingresefechanacimineto"));
let calcularedad = resta (fechaactual,fechanacimineto);
alert("su edad actual es :"+calcularedad +".")