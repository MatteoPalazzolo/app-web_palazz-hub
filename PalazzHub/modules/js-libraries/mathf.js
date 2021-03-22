class Color {
    constructor(_color = "#000000") {
        this.color = _color;
        this.vector = Color.ColorToVector(_color);
    }

    static ColorToVector(color = "#000000") {
        let vector = [];
        vector.push(parseInt(color.slice(1,3),16));
        vector.push(parseInt(color.slice(3,5),16));
        vector.push(parseInt(color.slice(5,7),16));
        return vector;
    }

    static VectorToColor() {
        
        let newString = "#";
        for (let i = 0; i < newVector.length; i++)
            newString += newVector[i];
        
        return newString;
    }

    static ColorLerp(minColor = new Color("#000000"), maxColor = new Color("#FFFFFF"), fact = .5) {
        let minVector = minColor.vector;        
        let maxVector = maxColor.vector;
        
        let newVector = []
        newVector.push(Math.round(Mathf.Lerp(minVector[0], maxVector[0], fact)).toString(16));
        newVector.push(Math.round(Mathf.Lerp(minVector[1], maxVector[1], fact)).toString(16));
        newVector.push(Math.round(Mathf.Lerp(minVector[2], maxVector[2], fact)).toString(16));

        return Color.VectorToColor(newVector);
    }

    static DarkenColor(color = new Color("#FFFFFF"), fact = 0) {
        let colorVector = color.vector;

        let newVector = []
        for (let i = 0; i < colorVector.length; i++) {
            let value = colorVector[i] * fact;
            newVector.push(value.toString(16));
        }

        return Color.VectorToColor(newVector);
    }
}

class Mathf {
    static Clamp(value = 0, min = 0, max = 0) {
        if (value < min)
            value = min;
        if (value > max)
            value = max;
        return value;
    }

    static Random(min = 0, max = 0) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    static Lerp(min = 0, max = 0, fact = 0) {
        let a = max - min;
        let b = a * fact;
        return min + b;
    }
    
}