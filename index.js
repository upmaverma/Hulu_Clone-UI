let logIn = document.querySelector(".btn-login");
let login = document.querySelector(".login");
let close = document.querySelector(".close-btn");

logIn.addEventListener("click", () => {
  login.classList.add("show-login");
});
close.addEventListener("click", () => {
  login.classList.remove("show-login");
});
