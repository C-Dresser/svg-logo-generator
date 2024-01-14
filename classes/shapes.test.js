// Jest tests for shapes
//fixed file path for require
//added test for logo colors
//added test for svg generation
//added test for other shapes
const { Triangle, Circle, Square } = require('../lib/shapes');

describe('Shape class', () => {
    test('setColor method sets shapeColor and textColor', () => {
      const shape = new Triangle();
      shape.setColor('red', 'blue');
      expect(shape.shapeColor).toBe('red');
      expect(shape.textColor).toBe('blue');
    });

    test('render method returns SVG for Triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('green', 'yellow');
        const svg = triangle.render(); 
        expect(svg).toContain('<polygon points="100, 18 194, 182 6, 182" fill="green" />');
      });

      test('render method returns SVG for Circle', () => {
        const circle = new Circle();
        circle.setColor('green', 'yellow');
        const svg = circle.render();
        expect(svg).toContain('<circle cx="100" cy="100" r="100" fill="green"/>');
      });
    
      test('render method returns SVG for Square', () => {
        const square = new Square();
        square.setColor('green', 'yellow');
        const svg = square.render();
        expect(svg).toContain('<rect x="50" y="50" height="100" width="100" fill="green"/>');
      });

});