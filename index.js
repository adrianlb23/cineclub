// Botón "Log" redirecciona a página de login (index -> login)
console.log("El archivo app.js ha sido cargado correctamente.");
document.getElementById("logButton").addEventListener("click", function() {
    window.location.href = "login.html";
});