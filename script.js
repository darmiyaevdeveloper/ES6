// Thank you freecodecamp.org

// Const : Unable to change 

const test = "const";

try {
  test = "changed";
} catch {
  console.log("Unable to change");
}

// Const : Array change

const anothertest = [7, 7, 8];

anothertest[1] = 8;
anothertest[2] = 9;

console.log(anothertest);

// Object.freeze : Freeze Objects

var object = {
  "Test": "More Tests",
  "Hi": "Hello"
}
object["Test"] = "Another Test";
console.log(object["Test"]);
Object.freeze(object)
object["Hi"] = "Bye";
console.log(object["Hi"])

// Arrow Functions : Faster Functions

const myFunction = (parameter) => {
  // Do stuff
  console.log(parameter);
}
myFunction("Hello World!")
const otherFunction = (aparameter) => "Return Test";
console.log(otherFunction());

// Arrow Functions : Default Parameters

