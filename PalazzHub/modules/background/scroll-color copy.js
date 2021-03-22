const classes = [
    "scroll-color1",
    "scroll-color2",
    "scroll-color3"
]

class ScrollColor {
    constructor(_scrollStart = 0, _scrollEnd = 0, _color = "#000000") {
        this.scrollStart = _scrollStart;
        this.scrollEnd = _scrollEnd;
        this.color = _color;
    }

    GetColor() {
        return this.color;
    }
}

class TransitionColor {
    constructor(_scroll = new ScrollColor(), _targetColor = "") {
        this.scrollStart = _scroll.scrollStart;
        this.scrollEnd = _scroll.scrollEnd;
        this.colorStart = _scroll.color;
        this.colorEnd = _targetColor;
    }

    GetColor() {
        let a = this.scrollEnd - this.scrollStart;
        let b = window.scrollY - this.scrollStart;
        let fact = b / a;

        return Mathf.ColorLerp(this.colorStart, this.colorEnd, fact);
    }
}

const scrolls = [0, 900, 1200, 2100, 2700, 3400, 4000, 4600, 5200, 5500, 6000, 7000];
const colors = ["#2D4473", "#F079F2", "#C23E3E", "#E0B73D", "#A8E63D", "#ffffff"];
const scrollColors = [
    new ScrollColor(scrolls[0], scrolls[1], colors[0]),
    new TransitionColor(new ScrollColor(scrolls[1], scrolls[2], colors[0]), colors[1]),
    new ScrollColor(scrolls[2], scrolls[3], colors[1]),
    new TransitionColor(new ScrollColor(scrolls[3], scrolls[4], colors[1]), colors[2]),
    new ScrollColor(scrolls[4], scrolls[5], colors[2]),
    new TransitionColor(new ScrollColor(scrolls[5], scrolls[6], colors[2]), colors[3]),
    new ScrollColor(scrolls[6], scrolls[7], colors[3]),
    new TransitionColor(new ScrollColor(scrolls[7], scrolls[8], colors[3]), colors[4]),
    new ScrollColor(scrolls[8], scrolls[9], colors[4]),
    new TransitionColor(new ScrollColor(scrolls[9], scrolls[10], colors[4]), colors[5]),
    new ScrollColor(scrolls[10], scrolls[11], colors[5])
]/*
const scrollColors = [
    new ScrollColor(0, 1000, "#325680"),
    new TransitionColor(new ScrollColor(1000, 1200, "#325680"), "#6A3CB0"),
    new ScrollColor(1200, 2200, "#6A3CB0"),
    new TransitionColor(new ScrollColor(2200, 2400, "#6A3CB0"), "#C23E3E"),
    new ScrollColor(2400, 3400, "#C23E3E"),
    new TransitionColor(new ScrollColor(3400, 3600, "#C23E3E"), "#E0B73D"),
    new ScrollColor(3600, 4600, "#E0B73D"),
    new TransitionColor(new ScrollColor(4600, 4800, "#E0B73D"), "#A8E63D"),
    new ScrollColor(4800, 5800, "#A8E63D"),
    new TransitionColor(new ScrollColor(5800, 6000, "#A8E63D"), "#ffffff"),
    new ScrollColor(6000, 7000, "#ffffff")
]*/

window.addEventListener("load", () => {
    const items = document.querySelectorAll("." + classes[0]);
    const itemsDark = document.querySelectorAll("." + classes[1]);
    
    for (let i = 0; i < items.length; i++) {
        ChangeColor(items[i]);

        window.addEventListener("scroll", () => {
            ChangeColor(items[i]);
        });
    }

    for (let i = 0; i < itemsDark.length; i++) {
        ChangeColorDark(itemsDark[i]);

        window.addEventListener("scroll", () => {
            ChangeColorDark(itemsDark[i]);            
        });
    }

    window.addEventListener("scroll", () => {
        console.log(window.scrollY);   
    });
});

function ChangeColor(item) {
    for (let i = 0; i < scrollColors.length; i++) {
        if (window.scrollY >= scrollColors[i].scrollStart && window.scrollY < scrollColors[i].scrollEnd) {
            item.style.backgroundColor = scrollColors[i].GetColor();
        }
    }
}

function ChangeColorDark(item) {
    for (let i = 0; i < scrollColors.length; i++) {
        if (window.scrollY >= scrollColors[i].scrollStart && window.scrollY < scrollColors[i].scrollEnd) {
            item.style.backgroundColor = Mathf.DarkenColor(scrollColors[i].GetColor(), .8);
        }
    }
}