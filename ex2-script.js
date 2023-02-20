window.addEventListener("load", start);

function start() {
  document
    .querySelector("#orange_container")
    .addEventListener("click", clickOrange);
}

function clickOrange() {
  console.log("Jump works");
  document
    .querySelector("#orange_container")
    .removeEventListener("click", clickOrange);
  document.querySelector("#orange_container").classList.add("jump");
}
