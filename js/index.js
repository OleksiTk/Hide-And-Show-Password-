let input = document.querySelector(".input__text");
let img = document.querySelector(".input__img");

img.addEventListener("click", showOrHidde);

function showOrHidde() {
  if (input.type == "password") {
    input.type = "text";
    img.src = "img/show.png";
  } else {
    img.src = "img/hide.png";
    input.type = "password";
  }
}
