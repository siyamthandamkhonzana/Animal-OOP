class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    console.log(`sound...`);
  }
  eat() {
    console.log(`${this.name} eats`);
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
    this.name = "Rax";
  }
  sounds() {
    console.log(`Dog barks`);
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
    this.name = "Stormy";
  }
  sounds() {
    console.log(`Cat meows`);
  }
}
class Home {
  constructor() {
    this.adoptedPets = [];
  }
  adoptPet(animal) {
    this.adoptedPets.push(animal);
  }
  makeAllSounds() {
    for (var i = 1; i < this.adoptedPets.length; i++) {
    console.log(this.adoptedPets[i].sounds());
    }
  }
}


