var whitescreen = document.getElementById("fadetowhite");
function FadeOut() {
    whitescreen.style.opacity="1";
}
function FadeIn() {
    whitescreen.style.opacity="0";
}
onload(FadeIn());
