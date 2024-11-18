/*
 * Your Name: Sandra Yoder
 * Today's Date: 11/7/24
 * script.js
 */

/* Hamburger menu function */
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
