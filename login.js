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
