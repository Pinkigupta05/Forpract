
// Creating Arrays
// │   ├── Array Literals

// │   ├── Array Constructor
// │   └── Empty Arrays
// │ 

// The most common way to create an arrays.(literal)

const animal = ["dear","peacock","dog","cat"]

const num1 = [1,2,3,4,5]
console.log(typeof num1)

const mixedarray = ["John Doe", 30, true, ["reading", "gaming"]]
console.log(typeof mixedarray)//arrays are always in object type
console.log( mixedarray)
// JavaScript arrays are versatile and can store a variety of data types within the same array. 

// *******************************
// Using the Array Constructor . //new Array()

const arr =new Array(1,2,3)


// **********************************
//using the empty array 
let emptyArray = [];//literal
let anotherEmptyArray = new Array();


// Taking a deep note on array literals

// Accessing and Modifying Elements
// │   ├── Accessing Elements
// │   │   ├── Using Indexes

// │   ├── Modifying Elements
// │   │   ├── Using Indexes

// │   ├── Adding Elements
// │   │   ├── Using push()
// │   │   ├── Using unshift()

// │   ├── Removing Elements
// │   │   ├── Using pop()
// │   │   ├── Using shift()

// example

let cars = ["Tesla", "BMW", "Audi"];

console.log(cars[0])//acess
cars[2]="Honda"
console.log(cars[2])//modify = sign is used to modify 
cars.push("splender")
console.log(cars);


