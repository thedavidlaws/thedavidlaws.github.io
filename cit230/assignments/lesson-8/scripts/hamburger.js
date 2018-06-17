/*function displayMenu() {
    var x = document.getElementById("nav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}*/

function toggleHam() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
