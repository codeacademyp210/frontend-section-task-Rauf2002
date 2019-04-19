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


//Next-Prev slider

let prevBtn = document.querySelector(".previous")
let nextBtn = document.querySelector(".next");
let buttonDiv = document.querySelector(".buttonDiv");
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);



function nextSlide() {
  document.querySelector(".sliderItem").style.left = -580 + "px";
  document.querySelector(".sliderItem2").style.left = 0;

  //Changing icons
  document.querySelector(".nextI").classList.remove("far");
  document.querySelector(".nextI").classList.add("fas");
  document.querySelector(".prevI").classList.remove("fas");
  document.querySelector(".prevI").classList.add("far");


}

function prevSlide() {
  document.querySelector(".sliderItem").style.left = 0;
  document.querySelector(".sliderItem2").style.left = 580 + "px";

  //Changing icons
  document.querySelector(".nextI").classList.remove("fas");
  document.querySelector(".nextI").classList.add("far");
  document.querySelector(".prevI").classList.remove("far");
  document.querySelector(".prevI").classList.add("fas");
}