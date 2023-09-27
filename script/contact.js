function validar(event) {
    event.preventDefault(); 

    let todo_correcto = true;

    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('message').value;
    const formulario = document.querySelector(".form_contact");

    if (nombre === '') {
        todo_correcto = false;
    }

    if (email === '' || !validarEmail(email)) {
        todo_correcto = false;
    }

    if (mensaje === '') {
        todo_correcto = false;
    }

    if (!todo_correcto) {
        alert('Puede que algunos campos esten vacios');
    } else {
        
        mostrarPopup();
        formulario.reset();

    }

    return todo_correcto;
}


function validarEmail(email) {
    const expresion_regular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return expresion_regular.test(email);
}

function mostrarPopup() {
    document.getElementById('exitoPopup').style.display = 'block';
}

function cerrarPopup() {
    document.getElementById('exitoPopup').style.display = 'none';

}
