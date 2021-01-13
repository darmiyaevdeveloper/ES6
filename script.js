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

const user2 = { name: 'John Doe', age: 34 };

const { name: userName, age: userAge } = user2;
// userName = 'John Doe', userAge = 34

console.log(userName, userAge);

// Destructuring Assignment : Assign Variables from objects

const anotheruseremailinfo = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

// Without assigning custom variables (vars)
//const { johnDoe: { age, email }} = user;
// Assigning custom variables (vars)
const { johnDoe: { age: userAge2, email: userEmail2 }} = anotheruseremailinfo;

// Difference:

// { name: userName, age: userAge }
// { info: {name: userName, age: userAge} }

console.log(userAge2, userEmail2);




// Destructuring Assignment : Assign Variables from Arrays

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
const [a2, b2,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

const [test3, test4] = [1, 2]

// Swap Preexisting Variables
[test3, test4] = [test4, test3]

// Each comma is one index of the array so it can skip to other indexs
// Use Destructuring Assignment : with the Rest Parameter to Reassign Array Elements
const [a3, b3, ...arr3] = [1, 2, 3, 4, 5, 7];
console.log(a3, b3); // 1, 2
console.log(arr3); // [3, 4, 5, 7]

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [,, ...arr] = list // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

// Destructuring Assignment : Pass an Object as a Function's Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0; 
console.log(half(stats));
// Only change code above this line

/*
So although this is confusing, this is my explanation:\
- So basically, when you use an object as an argument and use destructuring, it will receive the variables
- If that doesn't make sense, when you do half(stats), since we put max and min as function variables (parameters), the function will receive data from the object (specifcally the max and min from the object) which let's you use them as the parameter variables.
*/


// ES6: Create Strings using Template Literals

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.


// ES6 : Write Concise Object Literal Declarations Using Object Property Shorthand

