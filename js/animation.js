// first we define DOM elements

const heroImage = document.querySelector('#hero__animation__img');

const TL = document.querySelector("#grid__TL");
const TR = document.querySelector("#grid__TR");
const BL = document.querySelector("#grid__BL");
const BR = document.querySelector("#grid__BR");

const TLBtn = document.querySelector("#grid__TL__btn");
const TRBtn = document.querySelector("#grid__TR__btn");
const BLBtn = document.querySelector("#grid__BL__btn");
const BRBtn = document.querySelector("#grid__BR__btn");

const TLContent = document.querySelector("#grid__TL__content");
const TRContent = document.querySelector("#grid__TR__content");
const BLContent = document.querySelector("#grid__BL__content");
const BRContent = document.querySelector("#grid__BR__content");

const projectOne = document.querySelector(".p-1");
const projectTwo = document.querySelector(".p-2");
const projectThree = document.querySelector(".p-3");

// defining colors and positions

const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

// Defining corner which is open
let activeCorner = "";

// Add an event listener to the window object to listen for resize events
window.addEventListener("resize",handleWindowResize);

//handleWindowResize is a function which handles the styling when resizing window
function handleWindowResize(){

}

// variable to store reverse animations, ready to be playes
let lastReverseAnimation = "";

//play animation function

function playAnimation(animation, reverseAnimation) {
    if(lastReverseAnimation !== ""){
    //    clicked some corner and need to reverse animate 
        heroImage.classList.add(lastReverseAnimation);
        setTimeout(function(){
            heroImage.classList.remove(lastReverseAnimation);
            heroImage.classList.add(animation);
            lastReverseAnimation = reverseAnimation;
        },200)
    }else{
        //play forward animation code here
        heroImage.classList.add(animation);
        lastReverseAnimation = reverseAnimation
    } 
}

function playClosingAnimation(reverseAnimation) {

}
 
// OnClick corner TL button function
TLBtn.onclick = function (){
    if (activeCorner === "top-left"){
        playClosingAnimation("reverse-animate-top-left");
    } else {
        TRBtn.innerHTML = "Experience"; 
        BLBtn.innerHTML = "Projects";
        BRBtn.innerHTML = "Contact;";

        //setting active corner
        activeCorner = "top-left";
        TLBtn.innerHTML = "&uarr;<br/>About";

        handleWindowResize();
        playAnimation("animate-top-left","reverse-animate-top-left");

        // Change background colors
        TLBtn.style.background = bgColorAlt;
        TRBtn.style.background = bgColor;
        BLBtn.style.background = bgColor;
        BRBtn.style.background = bgColor;
        
        // change text colors
        TLBtn.style.Color = textColorAlt;
        TRBtn.style.Color = textColor;
        BLBtn.style.Color = textColor;
        BRBtn.style.Color = textColor;
        
        // Chnage position of the corner content
        // If one corner is active ..other corners must be hidden
        TLContent.style.transform = tlActive; 
        TRContent.style.transform = trHidden;
        BLContent.style.transform = blHidden;
        BRContent.style.transform = brHidden;

    }
}

TRBtn.onclick = function (){
    if (activeCorner === "top-right"){
        playClosingAnimation("reverse-animate-top-right");
    } else {
        TLBtn.innerHTML = "About"; 
        BLBtn.innerHTML = "Projects";
        BRBtn.innerHTML = "Contact;";

        // setting active corner
        activeCorner = "top-right";
        TLBtn.innerHTML = "&uarr;<br/>Experience";

        handleWindowResize();
        playAnimation("animate-top-right","reverse-animate-top-right");

        // Change background colors
        TLBtn.style.background = bgColor;
        TRBtn.style.background = bgColorAlt;
        BLBtn.style.background = bgColor;
        BRBtn.style.background = bgColor;
        
        // change text colors
        TLBtn.style.Color = textColor;
        TRBtn.style.Color = textColorAlt;
        BLBtn.style.Color = textColor;
        BRBtn.style.Color = textColor;
        
        // Chnage position of the corner content
        // If one corner is active ..other corners must be hidden
        TLContent.style.transform = tlHidden; 
        TRContent.style.transform = trActive;
        BLContent.style.transform = blHidden;
        BRContent.style.transform = brHidden;

    }
}

BLBtn.onclick = function (){
    if (activeCorner === "bottom-left"){
        playClosingAnimation("reverse-animate-bottom-left");
    } else {
        TLBtn.innerHTML = "About"; 
        TRBtn.innerHTML = "Experience";
        BRBtn.innerHTML = "Contact";

        // Setting active corner
        activeCorner = "bottom-left";
        BLBtn.innerHTML = "Projects<br/>&darr";

        handleWindowResize();
        playAnimation("animate-bottom-left","reverse-animate-bottom-left");

        // Change background colors
        TLBtn.style.background = bgColor;
        TRBtn.style.background = bgColor;
        BLBtn.style.background = bgColorAlt;
        BRBtn.style.background = bgColor;
        
        // change text colors
        TLBtn.style.Color = textColor;
        TRBtn.style.Color = textColor;
        BLBtn.style.Color = textColorAlt;
        BRBtn.style.Color = textColor;
        
        // Chnage position of the corner content
        // If one corner is active ..other corners must be hidden
        TLContent.style.transform = tlHidden; 
        TRContent.style.transform = trHidden;
        BLContent.style.transform = blActive;
        BRContent.style.transform = brHidden;

    }
}
BRBtn.onclick = function (){
    if (activeCorner === "bottom-right"){
        playClosingAnimation("reverse-animate-bottom-right");
    } else {
        TLBtn.innerHTML = "About"; 
        TRBtn.innerHTML = "Experience";
        BRBtn.innerHTML = "Projects";

        // Setting active corner
        activeCorner = "bottom-right";
        BRBtn.innerHTML = "Contact<br/>&darr";

        handleWindowResize();
        playAnimation("animate-bottom-right","reverse-animate-bottom-right");

        // Change background colors
        TLBtn.style.background = bgColor;
        TRBtn.style.background = bgColor;
        BLBtn.style.background = bgColor;
        BRBtn.style.background = bgColorAlt;
        
        // change text colors
        TLBtn.style.Color = textColor;
        TRBtn.style.Color = textColor;
        BLBtn.style.Color = textColor;
        BRBtn.style.Color = textColorAlt;
        
        // Chnage position of the corner content
        // If one corner is active ..other corners must be hidden
        TLContent.style.transform = tlHidden; 
        TRContent.style.transform = trHidden;
        BLContent.style.transform = blHidden;
        BRContent.style.transform = brActive;

    }
}

