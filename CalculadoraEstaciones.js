let mes = prompt("Ingrese el numero de un mes comprendido entre 1 y 12");
if (mes >= 1 && mes <= 12) {

    if (mes == 12 || mes == 1 || mes == 2) {
        alert("El mes que has ingresado es invierno");
    }

    if (mes == 3 || mes == 4 || mes == 5) {
        alert("El mes que has ingresado es primavera");
    }

    if (mes == 6 || mes == 7 || mes == 8) {
        alert("El mes que has ingresado es verano");
    }

    if (mes == 9 || mes == 10 || mes == 11) {
        alert("El mes que has ingresado es otoÃ±o");
    }

} else {
    alert("El valor ingresado es invalido");
}

alert("Byron Raul Gomez Arango || 22011422")