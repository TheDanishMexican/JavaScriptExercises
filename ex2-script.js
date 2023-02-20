window.addEventListener("load", start);

function start() {
  document
    .querySelector("#blue_container")
    .addEventListener("click", clickBlue);
}

function clickBlue() {
  console.log("Fallover works");
  document
    .querySelector("#blue_container")
    .removeEventListener("click", clickBlue);
  document.querySelector("#blue_container").classList.add("fallover");
}
