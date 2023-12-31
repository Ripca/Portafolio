const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");

//Le asignamos el elemento styles del documento a la constante rootStyles para luego poder cambiar el valor de la variable principal
const rootStyles = document.documentElement.style;

//Seteamos la propiedad, que es nuestra variable al color que el usuario coloque cuando haga clic en alguno de los cuadros de los colores
toggleColors.addEventListener("click", (e) => {
    rootStyles.setProperty("--primary-color", e.target.dataset.color);
});

//Funcion para cambiar el toggle-theme (los colores principales, el icono y los textos)
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (toggleIcon.src.includes("moon.svg")) {
        toggleIcon.src = "assets/icons/sun.svg";
        toggleText.textContent = "Light Mode";
    } else {
        toggleIcon.src = "assets/icons/moon.svg";
        toggleText.textContent = "Dark Mode";
    }
});
