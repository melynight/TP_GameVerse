const form = document.querySelector('#formulario');

const nombre = form.name 

const correo = form.email 

const mensaje = form.message

let errors = document.querySelector('.errors') 

form.addEventListener('submit', validar)

function validar(e) {
   
    validarNombre(e)
    validarCorreo(e)
    validarMensaje(e)

}

function validarNombre(e) {
    if (nombre.value == ''|| nombre.value == null) {
    
    alert("Falta un nombre")
    e.preventDefault()
    }
}

function validarCorreo(e) {
    if (correo.value == ''|| correo.value == null) {
    alert("ingrese mail")
     e.preventDefault() 
  }
}
  
function validarMensaje(e) {
    if (mensaje.value == ''|| mensaje.value == null) {
    alert("ingrese un mensaje")
     e.preventDefault() 
  }
}
