'use strict'

var numbers = [];
document.getElementById('llamar').onclick = llamar;
document.getElementById('colgar').onclick = colgar;
document.getElementById('marcar').onclick = marcar;
document.getElementById('contactos').onclick = contactos;

function marcar() {
    document.getElementById("formulario").style.display = "none";
    document.getElementById("teclado").style.display = "block";
    numeros.innerHTML = "";
    numbers = [];
}

function contactos() {

    document.getElementById("teclado").style.display = "none";
    document.getElementById("formulario").style.display = "block";
    numeros.innerHTML = "";
    numbers = [];
}

const saveNumber = (evento) => {
    let numero = evento.innerHTML;
    if (numbers.length >= 9) {
        alert('El maximo de numeros debe ser 9');
    } else {
        numbers.push(numero);
        viewNumbers();
    }
}

const viewNumbers = () => {
    let n = numeros.innerHTML = numbers.join('');
    return n;
}


function llamar() {
    if (numbers.length === 9) {
        document.getElementById("teclado").style.display = "none";
        document.getElementById("divM").style.display = "none";
        document.getElementById("colgar").style.display = "block";
        var mensaje = `Llamando al número <br> ${numbers[0]} ${numbers[1]}${numbers[2]}${numbers[3]} ${numbers[4]}${numbers[5]}${numbers[6]} ${numbers[7]}${numbers[8]}`;
        numeros.innerHTML = mensaje;
    } else {
        alert('Debe ingresar 9 numeros');
    }
}

function colgar() {
    document.getElementById("teclado").style.display = "block";
    document.getElementById("divM").style.display = "block";
    document.getElementById("colgar").style.display = "none";
    numeros.innerHTML = "";
    numbers = [];
}

const deleteNumber = () => {
    if (numbers.length === 0) {
        alert('Debe ingresar al menos un numero para borrar');
    } else {
        numbers.pop();
        viewNumbers();
    }
}
