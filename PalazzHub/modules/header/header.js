let isOpen = false;

function ShowMenu() {
    const menu = document.querySelector(".header__menu");
    if (!isOpen) {
        menu.classList.add("is-open");
        isOpen = true;
    }
    else {
        menu.classList.remove("is-open");
        isOpen = false;
    }
    console.log(menu.classList);
}