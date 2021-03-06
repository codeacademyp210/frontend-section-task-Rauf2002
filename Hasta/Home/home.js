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
    sContainer.style.transform = "translateX(-" + prevItem.style.left + ")";
  }
  if (activeItem.previousElementSibling == null) {
    let prevItem = activeItem.parentNode.lastElementChild;
    prevItem.classList.add("active-slide");
    activeItem.classList.remove("active-slide");
    sContainer.style.transform = "translateX(-" + prevItem.style.left + ")";
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
    sContainer.style.transform = "translateX(-" + nextItem.style.left + ")";
  }
  if(activeItem.nextElementSibling == null) {
    let nextItem = activeItem.parentElement.firstElementChild;
    nextItem.classList.add("active-slide");
    activeItem.classList.remove("active-slide");
    sContainer.style.transform = "translateX(-" + nextItem.style.left + ")";
  }
});


//Youtube video

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '600vh',
    width: '100%',
    videoId: 'jb4G-VzdS10',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}



//Next 

let prevBtn = document.querySelector(".previous")
let nextBtn = document.querySelector(".next");
let buttonDiv = document.querySelector(".buttonDiv");
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);



function nextSlide() {
  document.querySelector(".sliderItem").style.left = -1400 + "px";
  document.querySelector(".sliderItem2").style.left = 0;

  //Changing icons
  document.querySelector(".nextI").classList.remove("far");
  document.querySelector(".nextI").classList.add("fas");
  document.querySelector(".prevI").classList.remove("fas");
  document.querySelector(".prevI").classList.add("far");


}

function prevSlide() {
  document.querySelector(".sliderItem").style.left = 0;
  document.querySelector(".sliderItem2").style.left = 1400 + "px";

  //Changing icons
  document.querySelector(".nextI").classList.remove("fas");
  document.querySelector(".nextI").classList.add("far");
  document.querySelector(".prevI").classList.remove("far");
  document.querySelector(".prevI").classList.add("fas");
}