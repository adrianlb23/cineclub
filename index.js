// Botón "Log" redirecciona a página de login (index -> login)
console.log("El archivo app.js ha sido cargado correctamente.");
document.getElementById("logButton").addEventListener("click", function() {
    window.location.href = "login.html";
});

//Slider de posters
let currentIndex = 0;
const sliderItems = document.querySelectorAll('.slider-item');
const totalItems = sliderItems.length;

// Mostrar la primera imagen al cargar la página
sliderItems[currentIndex].classList.add('active');

document.getElementById('prevButton').addEventListener('click', () => {
    sliderItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    sliderItems[currentIndex].classList.add('active');
});

document.getElementById('nextButton').addEventListener('click', () => {
    sliderItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    sliderItems[currentIndex].classList.add('active');
});
