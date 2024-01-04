const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");

//Le asignamos el elemento styles del documento a la constante rootStyles para luego poder cambiar el valor de la variable principal
const rootStyles = document.documentElement.style;

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

//Cambiamos el texto con esta funcion llamando al archivo JSON correspondiente al idioma que eligio el usuario
const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`);
    texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
};

//Evento que cambia el idioma dependiendo de si se presiona una u otra etiqueta
flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.dataset.language);
});

//Seteamos la propiedad, que es nuestra variable al color que el usuario coloque cuando haga clic en alguno de los cuadros de los colores
toggleColors.addEventListener("click", (e) => {
    if (e.target.dataset.color != null) {
        rootStyles.setProperty("--primary-color", e.target.dataset.color);
    }
});

//Funcion para cambiar el toggle-theme (los colores principales, el icono y los textos)
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (toggleIcon.src.includes("moon.svg")) {
        toggleIcon.src = "assets/icons/sun.svg";
        toggleText.textContent = "Light ";
    } else {
        toggleIcon.src = "assets/icons/moon.svg";
        toggleText.textContent = "Dark";
    }
});
