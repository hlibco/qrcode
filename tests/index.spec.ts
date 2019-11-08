import { generateQR } from '../src/index'

describe('generateQR', () => {
  test('sum', async () => {
    const result = await generateQR('https://www.google.com')

    expect(typeof result).toBe('string')
  })
})
