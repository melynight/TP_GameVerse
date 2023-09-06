//Creando base de datos


// const IDBrequest = indexedDB.open("Contactos", 1);
const IDBrequest = indexedDB.open("Contactos", 1);

//si el resultado es correcto la base de datos va ser igual idbrequest.result
IDBrequest.addEventListener("upgradeneeded", () => {
    const baseDeDatos = IDBrequest.result;
    //Creamos el almacen de objetos dentro de la base de datos
    baseDeDatos.createObjectStore("Informacion", {
        //si queremos identificar un contacto lo vamos a hacer mediante un numero en especifico
        autoIncrement: true
    })
    console.log("se creo el almacen de objetos con el nombre " + baseDeDatos.objectStoreNames[0] + " en la base de datos " + IDBrequest.result.name)
})

const agregarUsuario = (usuario) => {
    const baseDeDatos = IDBrequest.result;
    const transaccion = baseDeDatos.transaction("Informacion", "readwrite");
    const objStore = transaccion.objectStore("Informacion");
    objStore.add(usuario);
    transaccion.addEventListener("success", () => {
        console.log("usuario agregado")
    })
}

const leerUsuarios = () => {
    const baseDeDatos = IDBrequest.result
    const fragmento = document.createDocumentFragment();
    const transaccion = baseDeDatos.transaction("Informacion", "readonly");
    const objStore = transaccion.objectStore("Informacion");
    const cursor = objStore.openCursor();//cursor nos lee los datos
    const divContainer = document.querySelector(".comentarios")
    cursor.addEventListener("success", () => {
        if (cursor.result) {
            let comentario = createDiv(cursor.result.key, cursor.result.value.nombre, cursor.result.value.comentarios);
            console.log(cursor.result.value.nombre)
            fragmento.appendChild(comentario);
            divContainer.appendChild(fragmento);
            cursor.result.continue();
        }
    })
}

const crearUsuario = (nombre, apellido, email, mensaje) => {
    let usuario = {
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        comentarios: mensaje.value
    }
    return usuario;
}



const createDiv = (id, nombre, comentario) => {
    const contenedorComentarios = document.createElement("DIV")
    const nombreUsuario = document.createElement("H4")
    const comentarioUsuario = document.createElement("P")

    contenedorComentarios.classList.add(".comentarios-usuarios");
    nombreUsuario.classList.add(".nombre-usuario");
    comentarioUsuario.classList.add(".comentario-Usuario");
    nombreUsuario.innerHTML = nombre;
    comentarioUsuario.innerHTML = comentario;
    contenedorComentarios.appendChild(nombreUsuario);
    contenedorComentarios.appendChild(comentarioUsuario);

    return contenedorComentarios;
}

/*----Variables----*/

const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const mensaje = document.getElementById("comentarios")
const btnEnviar = document.getElementById("enviar")
const inputs = document.querySelectorAll(".input")
const placeholders = [];


/* Focus In out Form */

const focusIn = () => {
    for (let i = 0; i < inputs.length; i++)
        inputs[i].addEventListener("focusin", () => {
            placeholders[i] = inputs[i].getAttribute("placeholder");
            inputs[i].setAttribute("placeholder", "");
            inputs[i].style.backgroundColor = "#555";
            inputs[i].style.color = "#fff";
            inputs[i].style.outline = "none";
            inputs[i].style.borderBottom = "2px solid #0f7";
            inputs[i].style.boxSizing = "border-box";

        })
}

const focusOut = () => {
    for (let i = 0; i < inputs.length; i++)
        inputs[i].addEventListener("focusout", () => {
            inputs[i].setAttribute("placeholder", placeholders[i]);
            inputs[i].style.backgroundColor = "transparent";
            inputs[i].style.color = "#fff";
            inputs[i].style.border = "none";
            inputs[i].style.magin = "10px 10px";
            inputs[i].style.padding = "10px";
            inputs[i].style.boxSizing = "border-box";
        })
}

setTimeout(focusIn, 10);
setTimeout(focusOut, 10);

btnEnviar.addEventListener("click", (e) => {
    e.stopPropagation();
    agregarUsuario(crearUsuario(nombre, apellido, email, mensaje));
})

console.log()

