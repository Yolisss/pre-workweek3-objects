

// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// keys(obj); // ["a", "b", "c"]
// let obj2 = { first: 'Matt', last: 'Lane' };
// keys(obj2); // ["first", "last"]
// let obj3 = {};
// keys(obj3); // []

//pseudocode
//function keys
//input: obj
//output: arr of all keys
//Object.keys()

function keys(obj) {
  let newArr = [];
  for(let key in obj) {
    newArr.push(key);
  }
  return newArr;
}

let obj = { a: 1, b: 2, c: 3 };
console.log(keys(obj)); // ["a", "b", "c"]
let obj2 = { first: 'Matt', last: 'Lane' };
console.log(keys(obj2)); // ["first", "last"]
let obj3 = {};
console.log(keys(obj3)); // []

// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!

//pseudocode
//function values
//input: object
//output: arr of values
//for in loop?

function values(obj){
  let newArr = [];
  for(let i in obj) {
    newArr.push(obj[i]);
  }  
  return newArr;
}

// // Examples:
let obj = { a: 1, b: 2, c: 3 };
console.log(values(obj)); // [1,2,3]
let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(values(obj2)); // ["Matt", "Lane", true]
let obj3 = {};
console.log(values(obj3)); // []

// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
// IMPORTANT: Do not use the built in Object.entries() function!

//pseudocode
//function entries
//input: obj
//output: arr of key-value pairs
//create new arr
//for in loop?
//push key value pair in newArr

function entries(obj){
  let newArr = [];
  for(let key in obj){
    newArr.push([key, obj[key]]);
  }
  return newArr;
}


// Examples:
let obj = { a: 1, b: 2, c: 3 };
console.log(entries(obj));
//[["a",1], ["b",2], ["c",3]]
let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(entries(obj2));
//[["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
let obj3 = {};
console.log(entries(obj3)); // []

// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
// Examples:
// pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')
// ["Tim", "Matt", "Elie"]
// pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')
// [true, false, undefined]

//pseudocode
//function pluck
//input: arrObj, name of key
//output: arry containing value associated with that key
//Object.values
//if statement 
//if key === keyName
//return object.values
//if key === ''
//return undefined

function pluck(arrObj, keyName) {
  let newArr = [];
  for (let i = 0; i < arrObj.length; i++) {
    newArr.push(arrObj[i][keyName]);
  }
  return newArr;
}

console.log(pluck([
  { name: "Tim" },
  { name: "Matt" },
  { name: "Elie" }
],
  'name'));
console.log(pluck([
  { name: "Tim", isBoatOwner: true }, 
  { name: "Matt", isBoatOwner: false }, 
  { name: "Elie" }
],
  'isBoatOwner'));
// let sample = [
  { name: "Tim", isBoatOwner: true }, 
  { name: "Matt", isBoatOwner: false }, 
  { name: "Elie" }
];
console.log(sample[1].isBoatOwner)
console.log(sample[2].isBoatOwner)
//["Tim", "Matt", "Elie"]

// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.

//pseudocode
//function stringFromObject
//input: obj
//output: string
// JSON.stringify()

function stringFromObject(obj) {
  let str = Object.keys(obj).map(key => `${key}=${obj[key]}`).join(",");
  return `"` + str + `"`;
}

Examples:
console.log(stringFromObject({ a: 1, b: '2' }));
// "a = 1, b = 2"
console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }));
// "name = Elie, job = Instructor, isCatOwner = false"
console.log(stringFromObject({})); // ""

// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]
// Examples:
// minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
// minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]

//pseudocode
//function minMaxKeyInObject
//input: obj with numeric keys
//output: arr like this: [lowestKey, highestKey]
//would create a new var
//use Object.keys method to get the key values of th object, which will also allow me to convert to array
//for loop 
//if statement
//

function minMaxKeyInObject(obj) {
  let newArr = [];
  let highestKey = 0;
  let convertToArr = Object.keys(obj);
  newArr.push(Number(convertToArr[0]), Number(convertToArr[convertToArr.length - 1]))
   return newArr; 
}

//console.log(convertToArr);
  //return convertToArr;
  // for(let i = 0; i < convertToArr.length; i++) {
  //   if(convertToArr[i].length > highestKey) {
  //     highestKey = convertToArr[i];
  //   } 
  //   if(convertToArr[i].length < convertToArr[i+1].length) {
  //     lowestKey = convertToArr[i]
   //
  //}

// // // Examples:
console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));
// [1, 10]
console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));
[1, 4]
