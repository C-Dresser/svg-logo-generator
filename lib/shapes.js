 // Exports `Triangle`, `Circle`, and `Square`

//added base class for logo shape
class Shape {
    // Included functionality to change color based on user input from template literal
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

// TRIANGLE
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// CIRCLE
class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="100" height="100" width="100" fill="${this.color}"/>`;
    }
}

// SQUARE
class Square extends Shape {
    render() {
        return `<rect x="50" y="50" height="200" width="200" fill="${this.color}"/>`;
    }
}

module.exports = { Triangle, Circle, Square };
