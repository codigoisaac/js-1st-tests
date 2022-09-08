const { generateText, checkAndGenerateText } = require('./util')

test('should output name and age', () => {
  const text = generateText('Isaac', 23)
  expect(text).toBe('Isaac (23 years old)')

  const text1 = generateText('', null)
  expect(text1).toBe(' (null years old)')
})

test('should generate a valid text output', () => {
  const validText = checkAndGenerateText('Someone', 334)
  expect(validText).toBe('Someone (334 years old)')

  const invalidText = checkAndGenerateText()
  expect(invalidText).toBe(false)
})