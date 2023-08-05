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
    switch (activeCorner) {
        case "top-left":
            //TL code
            if (window.innerWidth  <= 1100) {
                //If width less than 1100 ..it creates and mobile screen
                tlActive = "translateX(0) translateY(0)";
                TLContent.style.transform = "translateX(0vw ) translateY(0)";
                TLContent.style.width = "100vw";
                TLContent.style.height = "100vh";
                TLContent.style.top = "0";
                TLContent.style.display = "flex";
                TLContent.style.alignItems = "center";
                TLContent.style.justifyContent = "center";
                TLContent.style.background = "var(--bg-transparent)";
                TLContent.style.zIndex = "200";
                TLBtn.style.zIndex = "300";
                BLBtn.style.zIndex = "100";
                TRBtn.style.zIndex = "100";
                BRBtn.style.zIndex = "100";
            } else {
                tlActive = "translateX(5vw ) translateY(0)";
                TLContent.style.transform = "translateX(5vw ) translateY(0)";
                TLContent.style.width = "30vw";
                TLContent.style.height = "0";
                TLContent.style.top = "10vh";
                TLContent.style.display = "block";
            }
            break;

        case "top-right":
            //TR code
            if (window.innerWidth  <= 1100) {
                //If width less than 1100 ..it creates and mobile screen
                trActive = "translateX(0) translateY(0)";
                TRContent.style.transform = "translateX(0vw ) translateY(0)";
                TRContent.style.width = "100vw";
                TRContent.style.height = "100vh";
                TRContent.style.top = "0";
                TRContent.style.display = "flex";
                TRContent.style.alignItems = "center";
                TRContent.style.justifyContent = "center";
                TRContent.style.background = "var(--bg-transparent)";
                TRContent.style.zIndex = "200";
                TRBtn.style.zIndex = "300";
                BLBtn.style.zIndex = "100";
                TLBtn.style.zIndex = "100";
                BRBtn.style.zIndex = "100";
            } else {
                trActive = "translateX(-5vw ) translateY(0)";
                TRContent.style.transform = "translateX(-5vw ) translateY(0)";
                TRContent.style.width = "30vw";
                TRContent.style.height = "0";
                TRContent.style.top = "10vh";
                TRContent.style.display = "block";
            }
            break;
        case "bottom-left":
            if (window.innerWidth  <= 600) {
                //If width less than 1100 ..it creates and mobile screen
                blActive = "translateX(0) translateY(0)";
                BLContent.style.transform = "translateX(0vw ) translateY(0)";
                BLContent.style.width = "100vw";
                BLContent.style.height = "100vh";
                BLContent.style.top = "0";
                BLContent.style.display = "flex";
                BLContent.style.alignItems = "center";
                BLContent.style.justifyContent = "center";
                BLContent.style.background = "var(--bg-transparent)";
                BLContent.style.zIndex = "200";
                BLBtn.style.zIndex = "300";
                TRBtn.style.zIndex = "100";
                TLBtn.style.zIndex = "100";
                BRBtn.style.zIndex = "100";
                projectOne.style.width = "70%";
                projectOne.style.margin = "auto auto 0.5rem";
                projectTwo.style.width = "70%";
                projectTwo.style.margin = "auto auto 0.5rem";
                projectThree.style.width = "70%";
                projectThree.style.margin = "auto auto 0.5rem";
            } else if(window.innerWidth  <= 1100) {
                blActive = "translateX(0) translateY(0)";
                BLContent.style.transform = "translateX(0vw ) translateY(0)";
                BLContent.style.width = "100vw";
                BLContent.style.height = "100vh";
                BLContent.style.top = "0";
                BLContent.style.display = "flex";
                BLContent.style.alignItems = "center";
                BLContent.style.justifyContent = "center";
                BLContent.style.background = "var(--bg-transparent)";
                BLContent.style.zIndex = "200";
                BLBtn.style.zIndex = "300";
                TRBtn.style.zIndex = "100";
                TLBtn.style.zIndex = "100";
                BRBtn.style.zIndex = "100";
                projectOne.style.width = "40%";
                projectOne.style.margin = "auto auto 0.5rem";
                projectTwo.style.width = "40%";
                projectTwo.style.margin = "auto auto 0.5rem";
                projectThree.style.width = "40%";
                projectThree.style.margin = "auto auto 0.5rem";
            } else {
                blActive = "translateX(10vw ) translateY(7vh)";
                BLContent.style.transform = "translateX(10vw ) translateY(7vh)";
                BLContent.style.width = "15rem";
                BLContent.style.height = "0";
                BLContent.style.top = "40vh";
                BLContent.style.display = "block";
                projectOne.style.width = "100%";   
                projectTwo.style.width = "100%";
                projectThree.style.width = "100%";                
            }
            break;
        case "bottom-right":
            if (window.innerWidth  <= 1100) {
                //If width less than 1100 ..it creates and mobile screen
                brActive = "translateX(0) translateY(0)";
                BRContent.style.transform = "translateX(0vw) translateY(0)";
                BRContent.style.width = "100vw";
                BRContent.style.height = "100vh";
                BRContent.style.bottom = "0";
                BRContent.style.display = "flex";
                BRContent.style.flexDirection = "column";
                BRContent.style.alignItems = "center";
                BRContent.style.justifyContent = "center";
                BRContent.style.background = "var(--bg-transparent)";
                BRContent.style.zIndex = "200";
                TRBtn.style.zIndex = "100";
                BLBtn.style.zIndex = "100";
                TLBtn.style.zIndex = "100";
                BRBtn.style.zIndex = "300";
            } else {
                brActive = "translateX(-5vw) translateY(0)";
                BRContent.style.transform = "translateX(-5vw) translateY(0)";
                BRContent.style.width = "30vw";
                BRContent.style.height = "0";
                BRContent.style.bottom = "30vh";
                BRContent.style.display = "block";
            }
            break;
        
        default:
    }
}

// variable to store reverse animations, ready to be playes
let lastReverseAnimation = "";

//play animation function

function playAnimation(animation, reverseAnimation) {
    //remove all the animation classes from heroImage
    heroImage.className = "";
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
    TLBtn.innerHTML = "About";
    TRBtn.innerHTML = "Experience";
    BLBtn.innerHTML = "Projects";
    BRBtn.innerHTML = "Contact";

    switch (activeCorner) {
        case "top-left":
            TLBtn.style.background = bgColor; 
            TLBtn.style.color = textColor; 
            TLContent.style.transform = tlHidden;
            break; 
        case "top-right":
            TRBtn.style.background = bgColor; 
            TRBtn.style.color = textColor; 
            TRContent.style.transform = trHidden;
            break; 
        case "bottom-left":
            BLBtn.style.background = bgColor; 
            BLBtn.style.color = textColor; 
            BLContent.style.transform = blHidden;
            break; 
        case "bottom-right":
            BRBtn.style.background = bgColor; 
            BRBtn.style.color = textColor; 
            BRContent.style.transform = brHidden;
            break; 
        
        default:
    }

    heroImage.className = "";
    lastReverseAnimation = "";
    activeCorner = "";
    heroImage.classList.add(reverseAnimation);
    setTimeout(function () {
        heroImage.classList.remove(reverseAnimation);

    },200)
}
 
// OnClick corner TL button function
TLBtn.onclick = function (){
    if (activeCorner === "top-left"){
        playClosingAnimation("reverse-animate-top-left");
    } else {
        TRBtn.innerHTML = "Experience"; 
        BLBtn.innerHTML = "Projects";
        BRBtn.innerHTML = "Contact";

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
        BRBtn.innerHTML = "Contact";
        

        // setting active corner
        activeCorner = "top-right";
        TRBtn.innerHTML = "&uarr;<br/>Experience";

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
        BLBtn.innerHTML = "Projects<br/>&darr;";

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
        BLBtn.innerHTML = "Projects";

        // Setting active corner
        activeCorner = "bottom-right";
        BRBtn.innerHTML = "Contact<br/>&darr;";

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
};

// BRBtn.onclick = function (){
//     if (activeCorner === "bottom-right"){
//         playClosingAnimation("reverse-animate-bottom-right");
//     } else {
//         TLBtn.innerHTML = "About"; 
//         TRBtn.innerHTML = "Experience";
//         BLBtn.innerHTML = "Projects";

//         // Setting active corner
//         activeCorner = "bottom-right";
//         BRBtn.innerHTML = "Contacts<br/>&darr;";

//         handleWindowResize();
//         playAnimation("animate-bottom-right","reverse-animate-bottom-right");

//         // Change background colors
//         TLBtn.style.background = bgColor;
//         TRBtn.style.background = bgColor;
//         BLBtn.style.background = bgColor;
//         BRBtn.style.background = bgColorAlt;
        
//         // change text colors
//         TLBtn.style.Color = textColor;
//         TRBtn.style.Color = textColor;
//         BLBtn.style.Color = textColor;
//         BRBtn.style.Color = textColorAlt;
        
//         // Chnage position of the corner content
//         // If one corner is active ..other corners must be hidden
//         TLContent.style.transform = tlHidden; 
//         TRContent.style.transform = trHidden;
//         BLContent.style.transform = blHidden;
//         BRContent.style.transform = brActive;

//     }
// }
