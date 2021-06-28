var toggleNavStatus = false;

let toggleNav = function () {
    let getNavHamburger = document.querySelector(".nav-hamburger");
    let getNavHamburgerUL = document.querySelector(".nav-hamburger ul");
    let getNavHamburgerSpan = document.querySelectorAll(".nav-hamburger ul li span");

    if (toggleNavStatus === false) {
        getNavHamburgerUL.style.visibility = "visible";
        getNavHamburger.style.width = "250px";

        let arrayLength = getNavHamburgerSpan.length;
        for (let i = 0; i < arrayLength; i++) {
            getNavHamburgerSpan[i].style.opacity = "1";
        }
        toggleNavStatus = true;

    } else if (toggleNavStatus === true) {
        let arrayLength = getNavHamburgerSpan.length;

        for (let i = 0; i < arrayLength; i++) {
            getNavHamburgerSpan[i].style.opacity = "0";
        }

        getNavHamburger.style.width = "0";
        getNavHamburgerUL.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}; 

function bChangeColor(color) {
    var colorBody = document.body;
    var currentColor = document.getElementById("colorBody").className;
    var newColor = color + "-background"
    if (currentColor !== "") {
        colorBody.classList.remove(currentColor);
        colorBody.classList.add(newColor);
        toggleNav();
    } else {
        colorBody.classList.add(newColor);
        toggleNav();
    }
};

window.addEventListener("keydown", function (event) {
    var className = colorBody.className;
    if (className !== "") {
        colorBody.classList.remove(className);
    }
  
    if (event.key === "1") {
        colorBody.classList.add("rood-background");
    } else if (event.key === "2") {
        colorBody.classList.add("oranje-background");
    } else if (event.key === "3") {
        colorBody.classList.add("geel-background");
    } else if (event.key === "4") {
        colorBody.classList.add("groen-background");
    } else if (event.key === "5") {
        colorBody.classList.add("blauw-background");
    } else if (event.key === "6") {
        colorBody.classList.add("indigo-background");
    } else if (event.key === "7") {
        colorBody.classList.add("paars-background");
    }
});







