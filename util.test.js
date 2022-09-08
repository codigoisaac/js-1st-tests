const { generateText } = require('./util')

test('should output name and age', () => {
  const text = generateText('Isaac', 23)

  expect(text).toBe('Isaac (23 years old)')
})