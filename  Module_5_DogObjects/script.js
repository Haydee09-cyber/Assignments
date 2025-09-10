// ===Fictional Dog Objects (Kipper) ===

// ----- (1) Object Literal -----
const myDog = {
  name: "Kipper",
  show: "Kipper",
  breed: "Generic",
  role: "The main character; about a mischievous and funny dog and his friends; based on the books written by Mick Inkpen.",
  mySound: "I sound playful and cheerful, just like my personality!",

  // Method to describe this dog
  describe: function() {
    return `Hello, my name is ${this.name}. ${this.mySound} 
    I starred in the TV program "${this.show}". 
    My character was a ${this.breed} dog. 
    I was ${this.role}`;
  }
};

// Display literal object info
document.getElementById("literalDog").innerHTML =
  "<h3>Object Literal</h3><p>" + myDog.describe() + "</p>";


// ----- (2) Constructor Function -----
function Dog(name, show, breed, role, mySound, canTalk) {
  this.name = name;
  this.show = show;
  this.breed = breed;
  this.role = role;
  this.mySound = mySound;
  this.canTalk = canTalk;

  this.myGreeting = function() {
    return `Hello, my name is ${this.name}. ${this.mySound} 
    I starred in the TV program "${this.show}". 
    My character was a ${this.breed} dog. 
    I was ${this.role}`;
  };
}

// Create object with constructor
const myDogConst = new Dog(
  "Kipper",
  "Kipper",
  "Generic",
  "The main character; about a mischievous and funny dog and his friends; based on the books written by Mick Inkpen.",
  "I sound playful and cheerful, just like my personality!",
  true
);

// Display constructor object info
document.getElementById("constructorDog").innerHTML =
  "<h3>Constructor Object</h3><p>" + myDogConst.myGreeting() + "</p>";
