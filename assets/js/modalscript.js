var modal = document.querySelector(".modal1");
var modalIss = document.getElementById("modaliss");
var goButton = document.querySelector(".goButton");
var closeButton = document.querySelector(".delete");
var goButton2 = document.querySelector(".goButton2");
var closeButton2 = document.querySelector('.deleteTwo')

function addClass() {
  modal.classList.add("is-active");
  console.log("hello");
}

function addClassTwo() {
  modalIss.classList.add("is-active");
  console.log("hello");
}

function removeClass() {
  modal.classList.remove("is-active");
  
}

function removeClassTwo() {
  modalIss.classList.remove("is-active");
}


goButton2.addEventListener("click", addClassTwo);
goButton.addEventListener("click", addClass);
closeButton.addEventListener("click", removeClass);
closeButton2.addEventListener("click", removeClassTwo);
