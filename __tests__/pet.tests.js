const Pet = require('../src/pet');

describe('Pet', () => {
  it('creates and object instance', () => {
    const pet = new Pet('Benji')
    expect(pet).toBeInstanceOf(Object);
  })
})