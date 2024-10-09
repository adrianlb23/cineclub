// objetos de la pagina login
const container = document.getElementById('container');
const btnregistro = document.getElementById('register');
const btnlogin = document.getElementById('login');
const btnregistro2 = document.getElementById('register-button');

btnregistro.addEventListener('click', () => {
    container.classList.add("active");
});


btnlogin.addEventListener('click', () => {
    container.classList.remove("active");
});

btnregistro2.addEventListener('click', (event) => {
    event.preventDefault();
    validarUsuario();
});

// Lógica para verificar campos
function verificarNombre() {
    let nombre = document.getElementById('nombre').value;
    let errorElement = document.getElementById('nombre-error');

    // Limpia cualquier mensaje de error previo
    errorElement.textContent = '';

    if (nombre.length > 14) {
        errorElement.textContent = "El nombre no puede tener más de 14 caracteres";
        return false;
    }
    return true;
}

function verificarContraseña() {
    let password = document.getElementById('password').value;
    let errorElement = document.getElementById('password-error');

    // Limpia cualquier mensaje de error previo
    errorElement.textContent = '';

    if (password.length > 20 ||  password.length < 6) {
        errorElement.textContent = "La contraseña debe tener entre 6 a 20 carácteres";
        return false;
    }
    return true;
    
}

function verificarRut() {
    let rut = document.getElementById('rut').value;
    let errorElement = document.getElementById('rut-error');

    // Limpia cualquier mensaje de error previo
    errorElement.textContent = '';

    if (rut.length != 9) {
        errorElement.textContent = "Rut incorrecto, ingrese rut sin puntos ni guión";
        return false;
    }
    return true;
    
}

function validarUsuario(){
    if (verificarNombre() && verificarContraseña() && verificarRut()) {
        alert("Usuario creado correctamente");
        
        // Borrar campos luego de usuario validado
        document.getElementById('nombre').value = '';
        document.getElementById('password').value = '';
        document.getElementById('email').value = '';
        document.getElementById('rut').value = '';
    }
}
