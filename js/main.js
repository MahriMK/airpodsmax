const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".nav__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("nav__list--active");
});

const color = document.querySelectorAll(".color__btn");
const contentItem = document.querySelectorAll(".content-item");

color.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(evt) {
  const target = evt.currentTarget;
  const button = target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`);

  color.forEach(function (item) {
    item.classList.remove("color__btn--active");
  });

  target.classList.add("color__btn--active");

  contentItem.forEach(function (item) {
    item.classList.remove("content-item__active");
  });

  contentActive.forEach(function (item) {
    item.classList.add("content-item__active");
  });
}
