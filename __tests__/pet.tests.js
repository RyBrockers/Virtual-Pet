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

describe('checkUp', () => {
  it('checks if the pets fitness is 3 or less', () => {
    const pet = new Pet('Lucy');
    pet.fitness = 3;
    expect(pet.checkUp()).toBe('I need a walk');
  });
  it('checks if the pets hunger is 5 or more', () => {
    const pet = new Pet('Benji');
    pet.hunger = 5;
    expect(pet.checkUp()).toBe('I am hungry');
  });
  it('checks if the pets hunger is 5 or more and if the fitness 3 or less', () => {
    const pet = new Pet('Duke');
    pet.hunger = 5;
    pet.fitness = 3;
    expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
  });
  it('checks if the pet hunger is 4 or less and if the fitness 4 or more', () => {
    const pet = new Pet('Spike');
    pet.hunger = 4;
    pet.fitness = 4;
    expect(pet.checkUp()).toBe('I feel great!');
  })
})