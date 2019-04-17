"use strict";

const sContainer = document.querySelector(".slider-container");
const sItems = Array.from(sContainer.children);
const prevButton = document.querySelector(".slider-button-left");
const nextButton = document.querySelector(".slider-button-right");
let itemSize = sItems[0].getBoundingClientRect();
console.log(itemSize);
const setSliderPosition = (item, index) => {
    item.style.left = index * itemSize.width + "px";
};

sItems.forEach(setSliderPosition);

// Click prev button, slider move to the left
prevButton.addEventListener("click", function (e) {
    let activeItem = sContainer.querySelector(".active-slide");
    if (activeItem.previousElementSibling) {
        let prevItem = activeItem.previousElementSibling;
        prevItem.classList.add("active-slide");
        activeItem.classList.remove("active-slide");
    }
});
// Click next button, slider move to the right
nextButton.addEventListener("click", function (e) {
    let activeItem = sContainer.querySelector(".active-slide");
    console.log(activeItem);
    if (activeItem.nextElementSibling) {
        let nextItem = activeItem.nextElementSibling;
        nextItem.classList.add("active-slide");
        activeItem.classList.remove("active-slide");

    }
});