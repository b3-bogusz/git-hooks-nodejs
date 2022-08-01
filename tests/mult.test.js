const multiply = require('../src/mult')

it('should return correct number', () => {
    const result = multiply(2, 5)
    expect(result).toBe(10)
})
