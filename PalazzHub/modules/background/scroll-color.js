{
/********** REFERENCES **********/
let imageList = [];

let scrollMain, scrollLight, scrollDark, scrollComplementar;
let root;

const colorFact = .3;
const lerpFact = 500;

/********** START **********/
window.addEventListener("resize", () => {
    BuildColorList();
});

window.addEventListener("scroll", () => {
    //console.log(window.scrollY);
}); 

window.addEventListener("load", () => {
    root = document.querySelector(":root");
    BuildColorList();

    ChangeColor();
    window.addEventListener("scroll", () => {
        ChangeColor();
    });
    window.addEventListener("resize", () => {
        ChangeColor();
    });
});

/********** FUNCTIONS **********/
function BuildColorList() {
    let images = document.querySelectorAll(".background-color");
    let list = [];
    for (let i = 0; i < images.length; i++) {
        let bodyRect = document.body.getBoundingClientRect(),
            imageRect = images[i].getBoundingClientRect(),
            scrollY = Math.round(imageRect.top - bodyRect.top) - 120,
            color = images[i].dataset.color;
            complementar = images[i].dataset.complementar;
        list.push( {posY: scrollY, color: color, complementar: complementar} );
    }
    list.push( {posY: Infinity, color: "#ffffff", complementar: "#000000"} );
    imageList =  list;
}

function ChangeColor() {
    let index;
    for (let i = 0; i < imageList.length; i++) {
        if (window.scrollY <= imageList[i].posY) {
            index = Mathf.Clamp(i-1, 0, imageList.length);
            break;
        }
    }

    let thisSection = imageList[index],
        nextSection = imageList[index+1],
        startLerpPos = nextSection.posY - lerpFact,
        finishLerpPos = nextSection.posY;

    if (window.scrollY >= startLerpPos) {
        let fact = (window.scrollY - startLerpPos) / (finishLerpPos - startLerpPos);
        UpdateColorVars(
            Color.ColorLerp(new Color(thisSection.color), new Color(nextSection.color), fact),
            Color.ColorLerp(new Color(thisSection.complementar), new Color(nextSection.complementar), fact));
    }
    else UpdateColorVars(imageList[index].color, imageList[index].complementar);
}

function UpdateColorVars(color, complementar) {
    let light = Color.ColorLerp(new Color(color), new Color("#fff"), colorFact),
        dark = Color.ColorLerp(new Color(color), new Color("#000"), colorFact);

    root.style.setProperty("--scroll-main", color);
    root.style.setProperty("--scroll-light", light);
    root.style.setProperty("--scroll-dark", dark);
    root.style.setProperty("--scroll-complementar", complementar);
}

}