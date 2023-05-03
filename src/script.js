const btnMenu = document.getElementById("toggle-menu");
const menu = document.getElementById("menu");
const mainField = document.getElementById("main-info");

btnMenu.addEventListener("click", function () {
  if (menu.classList.contains("-left-96")) {
    mainField.classList.remove("-left-96");
    menu.classList.remove("-left-96");
    mainField.classList.add("left-0");
    menu.classList.add("left-0");
  } else {
    menu.classList.remove("left-0");
    mainField.classList.remove("left-0");
    menu.classList.add("-left-96");
    mainField.classList.add("-left-96");
  }
});
