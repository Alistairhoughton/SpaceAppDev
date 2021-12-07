var modal = document.querySelector(".modal1");
var modalIss = document.getElementById("modaliss");
var modalAstro = document.getElementById("modalastro");
var goButton = document.querySelector(".goButton");
var closeButton = document.querySelector(".delete");
var goButton2 = document.querySelector(".goButton2");
var closeButton2 = document.querySelector('.deleteTwo')
var goButton3 = document.querySelector(".astrobutton");
var closeButton3 = document.querySelector('.deleteThree')

function addClass() {
  modal.classList.add("is-active");
}

function addClassTwo() {
  modalIss.classList.add("is-active");
}

function addClassThree() {
  modalAstro.classList.add("is-active")
}

function removeClass() {
  modal.classList.remove("is-active");
  
}

function removeClassTwo() {
  modalIss.classList.remove("is-active");
}

function removeClassThree() {
  modalAstro.classList.remove("is-active")
}



goButton2.addEventListener("click", addClassTwo);
goButton.addEventListener("click", addClass);
goButton3.addEventListener("click", addClassThree)
closeButton.addEventListener("click", removeClass);
closeButton2.addEventListener("click", removeClassTwo);
closeButton3.addEventListener("click", removeClassThree)
