const Pet = require('../src/pet');

describe('Pet', () => {
  it('creates and object instance', () => {
    const pet = new Pet('Benji')
    expect(pet).toBeInstanceOf(Object);
  })
  it('has a name property', () => {
    const pet = new Pet('Benji');
    expect(pet.name).toEqual('Benji');
  })
})

describe('growUp', () => {
  it('increases the age by 1', () => {
    const pet = new Pet('Lucy')
    pet.growUp();
    expect(pet.age).toEqual(1);
  })
  it('increases the hunger by 5', () => {
    const pet = new Pet('Bluey');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  })
  it('decreases the fitness by 3 ', () => {
    const pet = new Pet('Duke');
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  })
})

describe('walk', () => {
  it('increases the fitness by 4', () => {
    const pet = new Pet('Lucy')
    pet.walk();
    expect(pet.fitness).toEqual(10);
  })

})

describe('feed', () => {
  it('decreases the hunger by 3', () => {
    const pet = new Pet('Spike');
    this.hunger = 3;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  })

})