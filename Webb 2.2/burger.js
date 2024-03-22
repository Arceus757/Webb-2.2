const burger = document.getElementById("burger");
const navList = document.getElementById("primary-nav");


function open() {
    navList.classList.toggle("primary-navigation-opened");
    burger.classList.toggle("burger-opened")
}

burger.addEventListener("click", open)