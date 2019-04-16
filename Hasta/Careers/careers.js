"use strict"

const panel = document.querySelectorAll(".panel");
const openingDiv = document.querySelectorAll(".opened");
// let id = setInterval(display , 10)



for (let i = 0; i < panel.length; i++) {
    panel[i].addEventListener("click", display)

    function display() {
        openingDiv[i].classList.toggle("dNone");
    }

}