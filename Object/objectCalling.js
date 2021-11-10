/*Read the values of the properties an entree and the drink of testObj 
using bracket notation and Dot notation and assign them to entreeValue and drinkValue respectively.**/
const testObj1 = {
    "an entree": "hamburger",
    "side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj1["an entree"];   // Change this line
  const drinkValue = testObj1.side;    // Change this line

  console.log("Entree Value = ", entreeValue);
  console.log("Drink Value = ", drinkValue);

  /*
  **********************************************
  Accessing Object Properties with Variables
  ************************************************

  Another use of bracket notation on objects is to access
   a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

Here is an example of using a variable to access a property:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
The string Doberman would be displayed in the console.

Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str; 
}

const someProp = propPrefix("Name"); //propName
console.log(someObj[someProp]);
someProp would have a value of the string propName, and the string John would be displayed in the console.

Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.

Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.
  */

// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line
  console.log("playerNumber= ", playerNumber);
  console.log("player= ", player);

  //*********************************************** */

  //Change Object Property

  const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog.name ="Happy Coder";
  myDog["tails"] = 5;
  console.log( "Name =" , myDog.name , "Tails =" , myDog.tails);

  // Adding New Property

  myDog.bark = "woof";
  console.log("New Dog property = " ,myDog.bark);

  // Delete property from Object
  delete myDog.tails;