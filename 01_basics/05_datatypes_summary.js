// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 375239848248n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["IronMan","BatMan"]

let myObj = {
    name:"Suraj",
    age:24,
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof scoreValue)
console.log(typeof myFunction);
console.log(typeof heros);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myName = "Washif"

let anotherName = myName
anotherName = "Suraj"

console.log(myName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "washif@google.com"

console.log(userOne.email);
console.log(userTwo.email);