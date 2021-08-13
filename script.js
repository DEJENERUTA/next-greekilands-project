//JavaScript Document
/*dropdown menu*/
const navDivs = document.querySelectorAll("nav div");

for (let i = 0; i < navDivs.length; i++) {
    navDivs[i].addEventListener("mouseover", showMenu);
    navDivs[i].addEventListener("mouseleave", hideMenu);
}
function showMenu() {
    this.querySelector("ul").style.display = "block";
}
function hideMenu() {
    this.querySelector("ul").style.display = "none";
}
/* here laver vi read more and read less */
const extratxt = document.querySelector("#moreInfo");
const knap = document.querySelector("#moreButton");

knap.addEventListener("click", showHide);

function showHide() {
if (extratxt.style.display !== "block") {
    extratxt.style.display = "block";
    knap.textContent = "Read Less";
} else {
    extratxt.style.display = "none"
    knap.textContent = "Read More";
}
}
/* skift billede med pile (image gallery with arrow*/
const bigImg = document.querySelector("#galleryPhoto");
const photoList = ["folegandros_chora", "folegandros_narrowStreet", "folegandros_whiteWall", "folegandros_churchyard", "folegandros_chapel", "folegandros_menu", "folegandros_sunset", "folegandros_squareByNight"];

let index = 0;
let newPhoto;
const arrowRight = document.querySelector("#next");
const arrowLeft = document.querySelector("#previous");

document.querySelector("#next").addEventListener("click", skift);
document.querySelector("#previous").addEventListener("click", skift);

function skift() {
    if (this.getAttribute("id") === "next") {
        if (index < photoList.length-1) {
            index++;
        } 
    } else {
            if (index > 0) {
                index--;
            }
     
 }
    newPhoto = "images/" + photoList[index] + ".jpg";
    bigImg.setAttribute("src", newPhoto);

    if (index === 0) {
        arrowLeft.style.display = "none";
    } else if (index === photoList.length - 1) {
        arrowRight.style.display = "none";
    } else {
        arrowLeft.style.display = "block";
        arrowRight.style.display = "block";
    }
}

//form validation

const form = document.querySelector("#subscribeForm");
const errorMessage = document.querySelector("#message");
const emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

form.addEventListener("submit", validate);

function validate(e) {
    const email = e.target.elements.email.value;
    const name = e.target.elements.name.value;
    console.log(email);
    console.log(name);
    if (name.length === 0) {
        errorMessage.innerHTML = "name is requred";
        e.preventDefault();
    return false;
    } 
    if (email.length ===0) {
        errorMessage.innerHTML = "email is requred";
        e.preventDefault();
    return false;
    }
    if (!emailTest.test(email)) {
        errorMessage.innerHTML = "incorrect email! ";
        e.preventDefault();
    return false;
    }  
}





