"use strict"

let hoverPhoto1 = document.querySelector(".hoverPhoto");
let hoverPhoto2 = document.querySelector(".hoverPhoto2");
let searchDiv = document.querySelector(".search");


function animationDown() {
    searchDiv.classList.remove("dNone")
    let top = 0;
    let id = setInterval(sliding, 8);
    function sliding() {
        if (top == 50) {
            clearInterval(id)
        }
        else {
            top++;
            searchDiv.style.top = top + "%"
        }
    }
}

function animationUp () {
    let top = 50;
    let id = setInterval(sliding,8);
    function sliding (){
        if (top == 0) {
            searchDiv.classList.add("dNone")
            clearInterval(id);
        } else {
            top--;
            searchDiv.style.top = top + "%"
        }
    }
}

hoverPhoto1.addEventListener("mouseover", animationDown);
hoverPhoto1.addEventListener("mouseout", animationUp);
hoverPhoto2.addEventListener("mouseover", animationDown);
hoverPhoto2.addEventListener("mouseout", animationUp)