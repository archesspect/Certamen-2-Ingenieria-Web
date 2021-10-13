//Región + Comuna
let region:any=document.getElementById("region");
  region.addEventListener("change", actualizarComunas);
  let comuna:any=document.getElementById("comuna");
  function actualizarComunas():void {
      while (comuna.firstChild){comuna.removeChild(comuna.firstChild);};
      switch (region.value) {
          case "0":// vacio
              let opcion_1:any=document.createElement("option");
              opcion_1.innerHTML = 'seleciona una comuna';
              comuna.appendChild(opcion_1);
              break;
          case "1": // Valparaiso
              let valparaiso:any=document.createElement("option");   valparaiso.innerHTML = 'Valparaíso';  comuna.appendChild(valparaiso);
              let quilpue:any=document.createElement("option"); quilpue.innerHTML = 'Quilpue'; comuna.appendChild(quilpue);
              let quillota:any=document.createElement("option"); quillota.innerHTML = 'Quillota'; comuna.appendChild(quillota);              
              let va:any=document.createElement("option"); va.innerHTML = 'Villa Alemana'; comuna.appendChild(va);
              break;
          case "2":{ //Santiago
              let renca:any=document.createElement("option");   renca.innerHTML = 'Renca';  comuna.appendChild(renca);
              let pudahuel:any=document.createElement("option"); pudahuel.innerHTML = 'Pudahuel'; comuna.appendChild(pudahuel);
              let quilicura:any=document.createElement("option"); quilicura.innerHTML = 'Quilicura'; comuna.appendChild(quilicura);
              break;
          }
      }
  }

function ValidarRut(valor:any){
    var tmp=valor.split('-');
    let digito=tmp[1];
    let rut=tmp[0];
    if(digito=='K') digito='k';
    var M=0,S=1;
    for(;rut;rut=Math.floor(rut/10))
      S=(S+rut%10*(9-M++%6))%11;
      console.log(S?S-1:'k');

    let verificador=S?S-1:'k';
    if(verificador == tmp[1]){
        console.log("true")
        return true
    }else{
        console.log("false")
        return false
    }
}

const form:any = document.getElementById("1")
form.addEventListener('submit', (event:any) => {event.preventDefault(); submitForm();});


function submitForm(){
    let rut:any = (<HTMLInputElement> document.getElementById("rut")).value;
    if (!ValidarRut(rut)) {
        window.alert("Rut invÃ¡lido");
        return;
    } else {
        let telefono:any = (<HTMLInputElement> document.getElementById("telefono")).value;
        let email:any = (<HTMLInputElement> document.getElementById("email")).value;
        let acudientes:any = (<HTMLInputElement> document.getElementById("acudientes")).value;
        let direccion:any = (<HTMLInputElement> document.getElementById("direccion")).value;
        let nacimiento:any = (<HTMLInputElement> document.getElementById("nacimiento")).value;
        let region:any = (<HTMLInputElement> document.getElementById("region")).value;
        let comuna:any = (<HTMLInputElement> document.getElementById("comuna")).value;

        let ficha:any = {
            rut,
            telefono,
            email,
            acudientes,
            direccion,
            nacimiento,
            region,
            comuna,
        };
        console.log(ficha);  

        (<HTMLInputElement> document.getElementById("rutinicial")).hidden = false;
        (<HTMLInputElement> document.getElementById("rutinicial")).textContent = rut;
        (<HTMLInputElement> document.getElementById("rut")).hidden = true;
        (<HTMLInputElement> document.getElementById("telefonoinicial")).hidden = false;
        (<HTMLInputElement> document.getElementById("telefonoinicial")).textContent = telefono;
        (<HTMLInputElement> document.getElementById("telefono")).hidden = true;
        (<HTMLInputElement> document.getElementById("emailinicial")).hidden = false;
        (<HTMLInputElement> document.getElementById("emailinicial")).textContent = email;
        (<HTMLInputElement> document.getElementById("email")).hidden = true;
        (<HTMLInputElement> document.getElementById("acudientesinicial")).hidden = false;
        (<HTMLInputElement> document.getElementById("acudientesinicial")).textContent = acudientes;
        (<HTMLInputElement> document.getElementById("acudientes")).hidden = true;
        (<HTMLInputElement> document.getElementById("direccioninicial")).hidden = false;
        (<HTMLInputElement> document.getElementById("direccioninicial")).textContent = direccion;
        (<HTMLInputElement> document.getElementById("direccion")).hidden = true;
    }
}

function desbloquear(){
    (<HTMLInputElement> document.getElementById("botondesbloqueo")).hidden = false;
    (<HTMLInputElement> document.getElementById("rut")).hidden = false;
    (<HTMLInputElement> document.getElementById("rutinicial")).hidden = true;
    (<HTMLInputElement> document.getElementById("telefono")).hidden = false;
    (<HTMLInputElement> document.getElementById("telefonoinicial")).hidden = true;
    (<HTMLInputElement> document.getElementById("email")).hidden = false;
    (<HTMLInputElement> document.getElementById("emailinicial")).hidden = true;
    (<HTMLInputElement> document.getElementById("acudientes")).hidden = false;
    (<HTMLInputElement> document.getElementById("acudientesinicial")).hidden = true;
    (<HTMLInputElement> document.getElementById("direccion")).hidden = false;
    (<HTMLInputElement> document.getElementById("direccioninicial")).hidden = true;
    (<HTMLInputElement> document.getElementById("actualizar")).hidden = false;
}

function agregarcampo(){
    (<HTMLInputElement> document.getElementById("asignatura")).hidden = false;
    (<HTMLInputElement> document.getElementById("objetivos")).hidden = false;
    (<HTMLInputElement> document.getElementById("nota")).hidden = false;
    (<HTMLInputElement> document.getElementById("crear")).hidden = false;
}


