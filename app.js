// objetos de la pagina login
const container = document.getElementById('container');
const btnregistro = document.getElementById('register');
const btnlogin = document.getElementById('login');

btnregistro.addEventListener('click', () => {
    container.classList.add("active");
});

btnlogin.addEventListener('click', () => {
    container.classList.remove("active");
});

/* Botón no funciona

// Botón "Log" redirecciona a página de login (index -> login)
const logButton = document.getElementById("logButton");
logButton.addEventListener("click", function() {
    window.location.href = "login.html";
});

*/