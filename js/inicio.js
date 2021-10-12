"use strict";
//Funcion para habilitar campos de solo lectura del formulario
function editar() {
    var rut = document.getElementById('rut').disabled=false;
    var telefono = document.getElementById('telefono').disabled=false;
    var correo = document.getElementById('email').disabled=false;
    var acudientes = document.getElementById('acudientes').disabled=false;
    var nacimiento = document.getElementById('nacimiento').disabled=false;
    var direccion = document.getElementById('direccion').disabled=false;
    var botonactualizar = document.getElementById('botonactualizar').disabled=false;
}
