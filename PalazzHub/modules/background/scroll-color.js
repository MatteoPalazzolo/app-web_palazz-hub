{
/********** REFERENCES **********/
let items1, items2;
let imageList = [];

/********** START **********/
window.addEventListener("resize", () => {
    imageList = BuildColorList();
});

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
}); 

window.addEventListener("load", () => {
    items1 = document.querySelectorAll(".scroll-color1");
    items2 = document.querySelectorAll(".scroll-color2");
    imageList = BuildColorList();

    for (let i = 0; i < items1.length; i++) {
        ChangeColor1(items1[i]);

        window.addEventListener("scroll", () => {
            ChangeColor1(items1[i]);
        }); 
        window.addEventListener("resize", () => {
            ChangeColor1(items1[i]);
        });
    }
/*
    for (let i = 0; i < items2.length; i++) {
        ChangeColor2(items2[i]);

        window.addEventListener("scroll", () => {
            ChangeColor2(items2[i]);
        }); 
        window.addEventListener("resize", () => {
            ChangeColor2(items2[i]);
        });
    }*/
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
        list.push( {posY: scrollY, color: color} );
    }
    return list;
}

function ChangeColor1(item) {
    let newColorList = imageList.copyWithin().reverse();
    let thisSection, index;
    for (let i = 0; i < newColorList.length; i++) {
        if (window.scrollY >= newColorList[i].posY) {
            thisSection = newColorList[i];
            index = i;
            break;
        }
    }
    let nextSection = imageList[Mathf.Clamp(index-1, 0, imageList.length-1)];
        startLerpPos = nextSection.posY - 500,
        finishLerpPos = thisSection.posY;
        deltaPos = finishLerpPos - startLerpPos;
        currendPos = window.scrollY - startLerpPos;
    if (window.scrollY >= startLerpPos) {
        let fact = currendPos / deltaPos;
        let backgroundColor = Color.ColorLerp(new Color(thisSection.color), new Color(nextSection.color), fact);
        item.style.backgroundColor = backgroundColor;
    }
    else {
        item.style.backgroundColor = imageList[index].color;
    }
}
/*
function ChangeColor2(item) {

}*/

}