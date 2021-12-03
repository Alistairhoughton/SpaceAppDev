var startBtn = document.getElementById("launchButton");

function storeName() {
  var nameInput = document.querySelector("#nameinput").value;
  localStorage.setItem("name", nameInput);
}

startBtn.addEventListener("click", storeName);

console.log(localStorage);
