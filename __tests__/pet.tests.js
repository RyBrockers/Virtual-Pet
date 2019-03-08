const Pet = require('../src/pet');

describe('Pet', () => {
  it('creates and object instance', () => {
    expect(Pet).toBeInstanceOf(Object);
  })
})