const disableColor = "#ccc";
const levelText = [
    "NONE",
    "LOW",
    "BASIC",
    "MEDIUM",
    "ADVANCED",
    "I NEED FRIENDS"
]

function main() {
    const items = document.querySelectorAll("div" + ".skill-div");
    
    let segments, value;
    for (var i = 0; i < items.length; i++) {
        value = items[i].dataset.value;
        segments = items[i].querySelectorAll(".skill-valuebar__segment");
        text = items[i].querySelector(".skill-level");

        if (value < 0 || value > 5 || value == undefined) {
            console.error("skill-div value out of range")
            continue;
        }

        if (value < 5) segments[4].style.backgroundColor = disableColor;
        if (value < 4) segments[3].style.backgroundColor = disableColor;
        if (value < 3) segments[2].style.backgroundColor = disableColor;
        if (value < 2) segments[1].style.backgroundColor = disableColor;
        if (value < 1) segments[0].style.backgroundColor = disableColor;

        text.innerHTML = levelText[value];
    }
}

window.addEventListener("load", main);