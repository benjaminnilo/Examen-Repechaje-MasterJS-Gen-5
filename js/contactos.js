'use strict'
const formulario = document.getElementById('form');
let nombre="";
let apellido="";
let telefono="";
let objet = {};

const contactosTel = [{
    nombre: 'Benjamín',
    apellido: 'Nilo',
    tel: '123456789',
}]

document.getElementById('label-cont-1').innerHTML = `${contactosTel[0].nombre} ${contactosTel[0].apellido}: ${contactosTel[0].tel} <br> `;

function saveContact() {
    nombre = formulario[0].value;
    apellido = formulario[1].value;
    telefono = formulario[2].value;

    if (contactosTel.length === 3) {
        alert('Capacidad de disco insuficiente');
    } else {
        if (nombre == "" || apellido == "" || telefono == "") {
            alert('Verificar que todos los campos tengan su valor');
        } else {
            objet = {
                nombre: nombre,
                apellido: apellido,
                tel: telefono,
            }
            if (validaciones(objet)) {
                contactosTel.push(objet);
                alert('Contacto agregado con exito');
                document.getElementById('label-cont-2').innerHTML = `${contactosTel[1].nombre} ${contactosTel[1].apellido}: ${contactosTel[1].tel} <br>`;
                document.getElementById("eli2").style.display = "block";
            
               
                document.getElementById('label-cont-3').innerHTML = `${contactosTel[2].nombre} ${contactosTel[2].apellido}: ${contactosTel[2].tel} <br>`;
                document.getElementById("eli3").style.display = "block";

            } else {
                alert('Teléfono existente, favor ingresar otro');
            }
        }
    }

}

const validaciones = (cont) => {
    for (let i = 0; i < contactosTel.length; i++) {
        if (cont.tel == contactosTel[i].tel) {
            return false;
        } else {
            return true;
        }
    }
}