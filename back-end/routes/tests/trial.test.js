// This test fails because 1 !== 2
jest.useFakeTimers()
it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  })