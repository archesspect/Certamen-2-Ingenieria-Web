"use strict";
//Región + Comuna
var region = document.getElementById("region");
region.addEventListener("change", actualizarComunas);
var comuna = document.getElementById("comuna");
function actualizarComunas() {
    while (comuna.firstChild) {
        comuna.removeChild(comuna.firstChild);
    }
    ;
    switch (region.value) {
        case "0": // vacio
            var opcion_1 = document.createElement("option");
            opcion_1.innerHTML = 'seleciona una comuna';
            comuna.appendChild(opcion_1);
            break;
        case "1": // Valparaiso
            var valparaiso = document.createElement("option");
            valparaiso.innerHTML = 'Valparaíso';
            comuna.appendChild(valparaiso);
            var quilpue = document.createElement("option");
            quilpue.innerHTML = 'Quilpue';
            comuna.appendChild(quilpue);
            var quillota = document.createElement("option");
            quillota.innerHTML = 'Quillota';
            comuna.appendChild(quillota);
            var va = document.createElement("option");
            va.innerHTML = 'Villa Alemana';
            comuna.appendChild(va);
            break;
        case "2": { //Santiago
            var renca = document.createElement("option");
            renca.innerHTML = 'Renca';
            comuna.appendChild(renca);
            var pudahuel = document.createElement("option");
            pudahuel.innerHTML = 'Pudahuel';
            comuna.appendChild(pudahuel);
            var quilicura = document.createElement("option");
            quilicura.innerHTML = 'Quilicura';
            comuna.appendChild(quilicura);
            break;
        }
    }
}
function ValidarRut(valor) {
    var tmp = valor.split('-');
    var digito = tmp[1];
    var rut = tmp[0];
    if (digito == 'K')
        digito = 'k';
    var M = 0, S = 1;
    for (; rut; rut = Math.floor(rut / 10))
        S = (S + rut % 10 * (9 - M++ % 6)) % 11;
    console.log(S ? S - 1 : 'k');
    var verificador = S ? S - 1 : 'k';
    if (verificador == tmp[1]) {
        console.log("true");
        return true;
    }
    else {
        console.log("false");
        return false;
    }
}
var form = document.getElementById("1");
form.addEventListener('submit', function (event) { event.preventDefault(); submitForm(); });
function submitForm() {
    var rut = document.getElementById("rut").value;
    ValidarRut(rut);
}
var campos = [{
        "id": "",
        "rut": "",
        "telefono": "",
        "email": "",
        "acudientes": "",
        "direccion": ""
    }
];
function desbloquear() {
    document.getElementById("botondesbloqueo").hidden = false;
    document.getElementById("rut").hidden = false;
    document.getElementById("rutinicial").hidden = true;
    document.getElementById("telefono").hidden = false;
    document.getElementById("telefonoinicial").hidden = true;
    document.getElementById("email").hidden = false;
    document.getElementById("emailinicial").hidden = true;
    document.getElementById("acudientes").hidden = false;
    document.getElementById("acudientesinicial").hidden = true;
    document.getElementById("direccion").hidden = false;
    document.getElementById("direccioninicial").hidden = true;
    document.getElementById("actualizar").hidden = false;
}
function agregarcampo() {
    document.getElementById("asignatura").hidden = false;
    document.getElementById("objetivos").hidden = false;
    document.getElementById("nota").hidden = false;
    document.getElementById("crear").hidden = false;
}
