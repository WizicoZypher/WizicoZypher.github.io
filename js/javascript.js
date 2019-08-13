var whitescreen = document.getElementById("fadetowhite");
function FadeOut() {
    whitescreen.style.display = "block";
    whitescreen.style.opacity = "0.3";
}
function FadeIn() {
    whitescreen.style.opacity = "0";
}

function hidewhitescreen() {
    setTimeout(function () { whitescreen.style.display = "none"; }, 500);
}
onload(FadeIn(),hidewhitescreen());

