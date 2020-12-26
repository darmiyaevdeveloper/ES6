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

const increment = (number = number++, value = 1) => number + value;

// Rest Parameters : Access the functions args

function myArgs(...args) {
  console.log(args);
  console.log(args.length);
}

myArgs("Hello ", "World", "!", 1, 2, 3, 4, true)

// JS Spread Operator : Unpack your arrays

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89

const arr2 = [6, 89, 3, 45];
const maximus2 = Math.max(...arr); // returns 89

// ... Makes it so no parameters are expected except the array, it doesn't let you do that mostly

console.log(arr2);
console.log(maximus2);

// const spreaded = ...arr; // will throw a syntax error
// Must be used in function argument (like Math.max())

// Destructuring Assignment : Extract Values

const user = { name: 'John Doe', age: 34 };

const { name, age } = user;

console.log(name, age);

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { test2 } = HIGH_TEMPERATURES;

console.log(test2); // undefined because no reference

// Destructuring Assignment : Assign Variables