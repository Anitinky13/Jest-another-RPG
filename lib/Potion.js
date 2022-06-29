//create a new constructor function for a health potion
//the potion constructor should take in a name parameter and assign the value property to be a random number between 7 and 12
//also add a bit of logic so that if the potion is health potion, its value is a number between 30 and 40
function Potion(name) {
  this.types = ["strength", "agility", "health"];
  this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

  if (this.name === "health") {
    this.value = Math.floor(Math.random() * 10 + 30);
  } else {
    this.value = Math.floor(Math.random() * 5 + 7);
  }
}
//set module.exports to be the potion() constructor so that our test can create new potions
module.exports = Potion;
