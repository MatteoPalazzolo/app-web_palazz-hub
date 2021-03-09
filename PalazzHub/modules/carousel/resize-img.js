window.addEventListener("load", () => {
    let carousels = document.querySelectorAll(".carousel");
    for (let i = 0; i < carousels.length; i++) {
        RSZ_SetCarousel(carousels[i]);
    }
});

function RSZ_SetCarousel(carousel) {
    let images = carousel.querySelectorAll(".crs_image");
    for (let i = 0; i < images.length; i++) {
        ResizeImage(images[i]);
    }
}

function ResizeImage(img = new Image()) {
    let width = img.height * 16/9;
    let padding = (width - img.width) / 2 + 12.5;

    if (padding <= 0) return;
    img.style.paddingLeft = padding + "px";
    img.style.paddingRight = padding + "px";
}