import css from "./css/style.css";
import menuList from "./menu.json";
import menuTemplate from "./menu.hbs"
const menuItem = menuTemplate(menuList);

const menu = document.querySelector(".js-menu");
menu.insertAdjacentHTML("afterbegin", menuItem);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchBtn = document.querySelector(".theme-switch__toggle");
const body = document.querySelector("body");
if(localStorage.getItem('theme')){
  body.classList.add(Theme.DARK);
  switchBtn.checked = true;
}
switchBtn.addEventListener("change",(event) =>  {
  if(event.target.checked){
    body.classList.add(Theme.DARK)
    body.classList.remove(Theme.LIGHT );
    localStorage.setItem("theme","!");
  }
  else{
    body.classList.remove(Theme.DARK);
    body.classList.add (Theme.LIGHT);
    localStorage.removeItem("theme");
  }
})