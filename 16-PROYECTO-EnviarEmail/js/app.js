// variables
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const btnEnviar = document.querySelector('#enviar');
const formularioEnviar = document.querySelector('#enviar-mail');
const resetBtn = document.querySelector('#resetBtn');

// event Listener

eventListeners();

function eventListeners() {
    // Inicio de la aplicación y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    // Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // Boton de enviar en el submit
    formularioEnviar.addEventListener('submit', enviarEmail);

    // Boton de reset
    resetBtn.addEventListener('click', resetFormulario);
}



// funciones
function inicioApp() {
    // deshabilitar el envio
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}


// Valida que el campo tengo algo escrito

function validarFormulario(e) {

    if(e.target.value.length > 0 ) {
        const errors = document.querySelector('p.error');
        if (errors){
            errors.remove();
        }
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500')
    } else {
        e.target.classList.remove('border', 'border-green-500')
        e.target.classList.add('border', 'border-red-500');
        mostrarerror("Todos los campos son obligatorios");
    }


    // Validar unicamente el email
    if(e.target.type === 'email') {

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        if(re.test(e.target.value) ) {
            const errors = document.querySelector('p.error');
            if(errors){
                errors.remove();
            }
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500')
        } else {
            e.target.classList.remove('border', 'border-green-500')
            e.target.classList.add('border', 'border-red-500');
            mostrarerror("Email no válido")
        }
    }

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '' ) {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

//error function
function mostrarerror(mensaje){
    const mensajeError = document.createElement('p')
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error')
    if (errores.length === 0) {
        formularioEnviar.appendChild(mensajeError);
    }
}


// Resetear el formulario 
function resetFormulario(e) {
    //console.log("Formulario Borrado")
    formularioEnviar.reset();
    
    inicioApp();
}

// Cuando se envia el correo
function enviarEmail(e) {

    e.preventDefault();


    // Spinner al presionar Enviar
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';


    // Ocultar Spinner y mostrar gif de enviado
    setTimeout( () => {
        spinner.style.display = 'none';

        // Gif que envia email
        const enviado = document.createElement('p');
        enviado.textContent = 'Mensaje Enviado Correctamente';
        enviado.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase')

        //Inserta el mensaje antes del spiner
        formularioEnviar.insertBefore(enviado, spinner)
        setTimeout( () => {
            enviado.remove();
            resetFormulario();
        }, 5000)
    }, 3000);

  
}


/*
function validarEmail(campo) {
    const mensaje = campo.value;

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if( re.test(mensaje.toLowerCase()) ) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
        mostrarerror("Email no válido")
    }
}
*/