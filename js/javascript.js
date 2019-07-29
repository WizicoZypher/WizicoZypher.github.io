var divhome = document.getElementById("home");
var divportfolio = document.getElementById("portfolio");
var divpricing = document.getElementById("pricing");
var divbook = document.getElementById("book");
var inputx;
function NavSwitch(inputx) {
    if (inputx == "home") {
        divhome.style.opacity = "1";
        divhome.style.display = "block";
    }
    else {
        divhome.style.opacity = "0";
        divhome.style.display = "none";
    }
    if (inputx == "portfolio") {
        divportfolio.style.opacity = "1";
        divportfolio.style.display = "block";
    }
    else {
        divportfolio.style.visiopacitybility = "0";
        divportfolio.style.display = "none";
    }

    if (inputx == "pricing") {
        divpricing.style.opacity = "1";
        divpricing.style.display = "block";
    }
    else {
        divpricing.style.opacity = "0";
        divpricing.style.display = "none";
    }

    if (inputx == "book") {
        divbook.style.opacity = "1";
        divbook.style.display = "block";
    }
    else {
        divbook.style.opacity = "0";
        divbook.style.display = "none";
    }
}
