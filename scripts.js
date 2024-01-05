const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");

//Le asignamos el elemento styles del documento a la constante rootStyles para luego poder cambiar el valor de la variable principal
const rootStyles = document.documentElement.style;

//Seleccionamos tanto el contenedor de los dos idiomas como todos los elementos que tengan un atributo data-section
const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

//Cambiamos el texto con esta funcion llamando al archivo JSON correspondiente al idioma que eligio el usuario
const changeLanguage = async (language) => {
    //Hacemos la request con el fetch y luego parseamos la respuesta a tipo JSON
    const requestJson = await fetch(`./languages/${language}.json`);
    texts = await requestJson.json();

    //Recorremos arreglo textsToChange que tiene todos los elementos a los que queremos cambiar el idioma y luego definimos dos variables para poder capturar la seccion y el valor de cada elemento, luego solo modificamos el innerHTML de cada elemento por lo que tenga establecido ese mismo elemento en el idioma que se seleccione
    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
};

//Evento que cambia el idioma dependiendo de si se presiona una u otra etiqueta, llama a la funcion changeLanguage que es la que hace el cambio y le pasa como parametro el valor que tenga la etiqueta que se presione
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
    //Alternamos entre la clase dark para ir cambiando el diseño general
    document.body.classList.toggle("dark");
    if (toggleIcon.src.includes("moon.svg")) {
        toggleIcon.src = "assets/icons/sun.svg";
        toggleText.textContent = "Light ";
    } else {
        toggleIcon.src = "assets/icons/moon.svg";
        toggleText.textContent = "Dark";
    }
});
