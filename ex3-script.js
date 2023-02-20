window.addEventListener("load", start);

function start() {
  document.querySelector("#orange_container").classList.add("move");
  document
    .querySelector("#orange_container")
    .addEventListener("click", clickOrange);
}

function clickOrange() {
  console.log("Click worked");
  document
    .querySelector("#orange_container")
    .removeEventListener("click", clickOrange);
  document.querySelector("#orange_container").classList.add("paused");
  document.querySelector("#orange_sprite").classList.add("jump");
}
