// First we will define DOM elements

const toggleButton = document.querySelector("#toggle-button");

const root = document.querySelector(':root');
const storageKey = "color-mode";
const defaultMode = 'light-mode';

// loading user's preferred color mode

function loadColorMode(){
    const colorMode = localStorage.getItem(storageKey)
    root.classList.add(colorMode || defaultMode);
    updateToggleButton();
}

loadColorMode();

//Toggle the color mode

toggleButton.addEventListener("click",()=> {
    console.log("test");
    saveColorMode();
});

//saving user's preferred color mode to local

function saveColorMode() {

    //if a user switch to dark from white..then we store dark mode
    //in his local storage(browser's storage) and vice versa
    const currentMode = root.classList.contains("dark-mode") ? "light-mode":"dark-mode";
    root.classList.remove("light-mode","dark-mode");
    root.classList.add(currentMode);
    localStorage.setItem(storageKey,currentMode);
    updateToggleButton();
}

function updateToggleButton(){
    if (root.classList.contains("dark-mode")){
        toggleButton.style.backgroundImage = "var(--moon)";

    } 
    else{
        toggleButton.style.backgroundImage = "var(--sun)";
    }
}