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

   return S?S-1:'k';
}

// function enviar(e:any){
//     e.preventDefault();
//     console.log("hola mundo")
// }

let campos=[{
    "id": "",
    "rut":"",
    "telefono":"",
    "email":"",
    "acudientes":"",
    "direccion":""
    }
]


// form.addEventListener('submit', (event:any) => {event.preventDefault(); this.submitForm()});
// elementFirst.innerHTML = 'email: ' + document.getElementById('loginForm')[0].value;
// document.getElementById('loginForm').appendChild(elementFirst);

// elementSecond.innerHTML = 'password: ' + document.getElementById('loginForm')[1].value;
// document.getElementById('loginForm').appendChild(elementSecond);






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


