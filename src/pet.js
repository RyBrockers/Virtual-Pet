MAXIMUM_FITNESS = 10;
MINIMUM_HUNGER = 0;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.growUp = function growUp() {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
}

Pet.prototype.walk = function walk() {
  if ((this.fitness += 4) <= MAXIMUM_FITNESS) {
    this.fitness -= 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
}

Pet.prototype.feed = function feed() {
  if ((this.hunger += 3) === MINIMUM_HUNGER) {
    this.hunger += 3;
  } else {
    this.hunger = MINIMUM_HUNGER;
  }
}

Pet.prototype.checkUp = function checkUp() {
  if (this.hunger >= 5 && this.fitness <= 3)
    return 'I am hungry AND I need a walk';

  else if (this.hunger <= 4 && this.fitness >= 4)
    return 'I feel great!'

  else if (this.fitness <= 3)
    return 'I need a walk'

  else if (this.hunger >= 5)
    return 'I am hungry'
}





module.exports = Pet;