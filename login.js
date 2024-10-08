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

function validarUsuario(){
    if (verificarNombre()){
        alert("Usuario creado correctamente");
    }
}
