// Jest tests for shapes
//fixed file path for require
//added test for logo colors
//added test for logo shape
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

});