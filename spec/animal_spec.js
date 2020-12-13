const { Dog, Cat, Animal, Home } = require("../src/animal");
var dog = new Dog();
var cat = new Cat();
var home = new Home();

describe("Functionality of the Dog class ", () => {
  it("Does dog eat Food ", () => {
    expect(dog.eat()).toEqual("Food");
  });
  it("Does dog eat food ", () => {
    expect(dog.eat()).not.toEqual("food");
  });
});
describe("Functionality of the Cat class", () => {
  it("Does cat Bark ", () => {
    expect(cat.sound()).not.toEqual("Bark");
  });
  it("Does cat Meow ", () => {
    expect(cat.sound()).toEqual("Meow");
  });
  it("Does cat eat meat ", () => {
    expect(cat.eat()).not.toEqual("meat");
  });
  it("Does cat eat Food ", () => {
    expect(cat.eat()).toEqual("Food");
  });
  it("Does cat eat food ", () => {
    expect(cat.sound()).not.toEqual("food");
  });
});
