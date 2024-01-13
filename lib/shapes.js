 // Exports `Triangle`, `Circle`, and `Square`

 //modified shapes class to include text so its centered with the shape
 //fixed issue with text not getting its own color and elements rendering off center
 //fixed error in returns
 //restructured shapes classes
 //updated shapes class to take text color
 //updated structure to get rid of additional svg tags
 //updated triangle to be centered
//added base class for logo shape
class Shape {
    constructor() {
        this.shapeColor = '';
        this.textColor = '';
    }

    setColor(shapeColor, textColor) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }

    render(text) {
        return `<g><text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${text}</text></g>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="100, 18 194, 182 6, 182" fill="${this.shapeColor}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="100" fill="${this.shapeColor}"/>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" height="100" width="100" fill="${this.shapeColor}"/>`;
    }
}

module.exports = { Triangle, Circle, Square };
