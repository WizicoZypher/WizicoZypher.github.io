var whitescreen = document.getElementById("fadetowhite");
function FadeOut() {
    whitescreen.style.display = "block";
    whitescreen.style.opacity = "0.3";
}
function FadeIn() {
    whitescreen.style.opacity = "0";
}
onload(FadeIn(),hidewhitescreen());

function hidewhitescreen() {
    setTimeout(function () { whitescreen.style.display = "none"; }, 500);
}
