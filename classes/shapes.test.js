// Jest tests for shapes
const { Triangle, Circle, Square } = require('../lib/shapes');

describe('Shape class', () => {
    test('setColor method sets shapeColor and textColor', () => {
      const shape = new Triangle();
      shape.setColor('red', 'blue');
      expect(shape.shapeColor).toBe('red');
      expect(shape.textColor).toBe('blue');
    });

});