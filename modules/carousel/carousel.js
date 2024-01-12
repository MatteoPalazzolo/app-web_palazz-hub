{
window.addEventListener("load", () => {
    let carousels = document.querySelectorAll(".carousel");
    for (let i = 0; i < carousels.length; i++) {
        CRS_SetCarousel(carousels[i]);
    }
});

let left = 0;
let btn_next, btn_prev, slider, images;
let scrollWidth, maxScrollWidth;
let isTransition = false;

function CRS_SetCarousel(carousel) {
    btn_next = carousel.querySelector(".crs_next");
    btn_prev = carousel.querySelector(".crs_prev");
    slider = carousel.querySelector(".carousel-slider");
    images = carousel.querySelectorAll(".crs_image");

    //console.log(images[0].width);
    scrollWidth = 676 + 12 * 2
    maxScrollWidth = scrollWidth * (images.length - 1);
    
    btn_next.addEventListener("click", () => {
        if (isTransition) return;
        AddLeft(-scrollWidth);
    });

    btn_prev.addEventListener("click", () => {
        if (isTransition) return;
        AddLeft(scrollWidth);
    });

    slider.addEventListener("transitionstart", () => {
        isTransition = true;
        btn_next.classList.add("crs_button-disable");
        btn_prev.classList.add("crs_button-disable");
    });

    slider.addEventListener("transitionend", () => {
        isTransition = false;
        btn_next.classList.remove("crs_button-disable");
        btn_prev.classList.remove("crs_button-disable");

        if (left === -maxScrollWidth) AddLeft(-scrollWidth);
        else if (left === 0) AddLeft(scrollWidth);
    });
}

function AddLeft(value) {
    left += value;
    if (!slider.classList.contains("slide-transition")) slider.classList.add("slide-transition");

    if (left < -maxScrollWidth) {
        slider.classList.remove("slide-transition");
        left = 0;
    }
    else if (left > 0) {
        left = -maxScrollWidth;
        slider.classList.remove("slide-transition");
    }

    slider.style.left = left + "px";
}
}