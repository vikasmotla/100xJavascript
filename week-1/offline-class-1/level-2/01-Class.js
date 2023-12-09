
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  static myType(){
    console.log("Animal"); // this is something general to class not type of class. also. this cant be called by initialising objects. can be called
    // directly like Animal.myType();
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

// Animal.myType();

let dog = new Animal('dog',4);
console.log(dog.describe());
