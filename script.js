/*
ATTEMPT display selected nav item in header...

let navItem = document.getElementById("nav-item");
let navLine = document.querySelectorAll('.line');

once clicked, the nav should display the div.line next to itself. 
for(index of hoverLine) {
    for(i = 0; i <= navLine.length; i++) {
            navLine.onmouseover = function() {
                navLine.style.display = "block";
        }
    } 
};
*/

// mobile nav display - doesn't quite work right (i'd rather it )
let menu = document.getElementById("responsive");
function mobileMenu() {
    if(menu.style.display === "block") {
        menu.style.display = "none"
    } else {
        menu.style.display = "block";
    }
};

let close = document.getElementsByClassName("close")[0];
close.onclick = function() {
    menu.style.display = "none"
};


// experience & intensity animation bars
let exp = document.getElementById("animateexperience");
let expHeight = exp.clientHeight;

document.addEventListener("scroll", animateEXP);

function inViewExp() {
    let windowEXPHeight = window.innerHeight;
    let scrollEXPY = window.scrollY || window.pageYOffset;
    let scrollEXPPosition = scrollEXPY + windowEXPHeight;
    let expPosition = exp.getBoundingClientRect().top + scrollEXPY + expHeight;

    if (scrollEXPPosition > expPosition) {
        return true;
    } return false;
};

function animateEXP() {
    if(inViewExp()) {
        exp.classList.add("animate-exp");
    }
};


let int = document.getElementById("animateintensity");
let intHeight = int.clientHeight;

document.addEventListener("scroll", animateINT);

function inViewINT() {
    let windowINTHeight = window.innerHeight;
    let scrollINTY = window.scrollY || window.pageYOffset;
    let scrollINTPosition = scrollINTY + windowINTHeight;
    let intPosition = int.getBoundingClientRect().top + scrollINTY + intHeight;

    if (scrollINTPosition > intPosition) {
        return true;
    } return false;
};

function animateINT() {
    if(inViewINT()) {
        int.classList.add("animate-int");
    }
};


// slideshow
var slideIndex = 1;
showSlides(slideIndex);

// previous/next buttons (n is set in html)
function plusSlides(n) {
    showSlides(slideIndex += n);
};

// "dot" controls
function currentSlide(n) {
    showSlides(slideIndex = n);
};

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");

    if(n > slides.length) {
        slideIndex = 1;
    };

    if(n < 1) {
        slideIndex = slides.length
    };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    };

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
};
