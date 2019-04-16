"use strict"

let allInputs = document.getElementsByTagName("input");
let button = document.querySelector(".create");
let nameInput = document.querySelector("#firstName");
let surnameInput = document.querySelector("#surname");
let dayInput = document.querySelector("#day");
let yearInput = document.querySelector("#year");
let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone")
let checkBox = document.querySelector("#customCheck1");
//Patterns

let nameSurnamePattern = /^([a-zA-Z]|\s)*$/;
let dayPattern = /(0[1-9]|[12]\d|3[01])/;
let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let phonePattern = /([0-9]{12})/;

button.addEventListener("click", validateForm);

function validateForm() {
    let d = new Date();
    let currentYear = d.getFullYear();
    let checkAnswer = checkBox.checked

    for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i].value == "") {
            allInputs[i].classList.add("error")
            alert("Inputs must be filled")
            return false
        }
    }
    if (!nameInput.value.match(nameSurnamePattern)) {
        nameInput.classList.add("error");
        let small = document.createElement("small");
        let txtNode = document.createTextNode("Name input contains only letters.");
        small.appendChild(txtNode);
        small.classList.add("errorText");
        document.querySelector(".nameDiv").appendChild(small);
        return false
    }
    if (!surnameInput.value.match(nameSurnamePattern)) {
        surnameInput.classList.add("error");
        let small = document.createElement("small");
        let txtNode = document.createTextNode("Surname input contains only letters.");
        small.appendChild(txtNode);
        small.classList.add("errorText");
        document.querySelector(".surnameDiv").appendChild(small);
        return false
    }
    if (!dayInput.value.match(dayPattern)) {
        dayInput.classList.add("error");
        let small = document.createElement("small");
        let txtNode = document.createTextNode("Please , enter a valid date.");
        small.appendChild(txtNode);
        small.classList.add("errorText");
        document.querySelector(".dayDiv").appendChild(small);
        return false
    }
    if (yearInput.value > currentYear || yearInput.value < 0 || yearInput.value.length != 4) {
        yearInput.classList.add("error");
        let small = document.createElement("small");
        let txtNode = document.createTextNode("Please , enter a valid year.");
        small.appendChild(txtNode);
        small.classList.add("errorText");
        document.querySelector(".yearDiv").appendChild(small);
        return false
    }
    if (!emailInput.value.match(emailPattern)) {
        emailInput.classList.add("error");
        let small = document.createElement("small");
        let txtNode = document.createTextNode("Please , enter a valid email.");
        small.appendChild(txtNode);
        small.classList.add("errorText");
        document.querySelector(".emailDiv").appendChild(small);
        return false
    }
    if (!phoneInput.value.match(phonePattern)) {
        phoneInput.classList.add("error");
        let small = document.createElement("small");
        let txtNode = document.createTextNode("Please , enter a valid phone number.");
        small.appendChild(txtNode);
        small.classList.add("errorText");
        document.querySelector(".phoneDiv").appendChild(small);
        return false
    }
    if (checkAnswer == false) {
        let small = document.createElement("small");
        let txtNode = document.createTextNode("In order to proceed , you must accept our terms and conditions.");
        small.appendChild(txtNode);
        small.classList.add("errorText");
        document.querySelector(".checkDiv").appendChild(small);
        return false
    } else {
        return true
    }
}
