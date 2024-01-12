{
let scrollBars;
let body;

window.addEventListener("load", () => {
    Start();
    UpdateScrollbar();
});

window.addEventListener("scroll", () => {
    UpdateScrollbar();
});

function Start() {
    scrollBars = document.querySelectorAll(".scroll-bar");
    body = document.body;
}

function UpdateScrollbar() {
    let maxPos = document.body.scrollHeight - window.innerHeight;
    let perc = window.scrollY / maxPos;
    scrollBars.forEach(element => {
        UpdateLenght(element, perc);
    });
    //console.log(window.scrollY);
}

function UpdateLenght(element, perc) {
    //let val = (1 - perc) * 100;
    let val = perc * 100;
    element.style.width = val + "%";
}
}