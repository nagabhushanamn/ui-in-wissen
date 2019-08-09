


import { add } from './calc'

// Arrange
test('1+2=3', () => {
    let actual = add(1, 2); // Act
    expect(actual).toBe(3) // Assert
})