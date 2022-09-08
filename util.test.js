const { generateText } = require('./util')

test('should output name and age', () => {
  const text = generateText('Isaac', 23)
  expect(text).toBe('Isaac (23 years old)')

  const text1 = generateText('', null)
  expect(text1).toBe(' (null years old)')
})