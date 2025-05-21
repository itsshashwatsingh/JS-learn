// what we have learned till now

// datatypes are of two types 

// Primitive datatype

// 7 types : string, number, boolean , null , unidentified , Bigint , symbol 

const score = 100
const scorevalue = 100.3

const loggedIn = false

const outsideTemp = null

let userEmail;

// symbol

const Id = Symbol('123') // 123 value is now became
//  unique from any other 123 value

const anotherId = Symbol('123') // this is also an
//  unique 123 value not equal to Id's 123

console.log( Id === anotherId); // false as expected

// Bigint

const BigNumber = 24303000000030300000n // since number is too big 


// reference (non primitive)

// -> Arrays , object , Functions

// Arrays -> use [ ] to store values inside array
// ["a",1,"b","c"] this is an array

// store in variable heroes
const heroes = ["superman","batman","joker","wonderwomen"] // use [ ] to store values inside array
//an array stored in variable name heroes


// Object -> use {} to store values inside object
// {name: "jin" , age : 25} this is an object

// store in variable myObj
let myObj = {
       myname : "shashwat",
       role : "Data analyst",
       age : 22
       } // an object stored in variable name myObj


 // function -> store tasks to perform which works when function is called

// function(){console,log("hello")} here console.log("hello") 
// is task stored inside a function

// can store function in variable aswell
const myFunction = function(){
    console.log("hello world")
}// function stored in a varible named myFunction

// we will learn more about above three in great detail later


// lets find all the datatypes of all variables till now

console.log(typeof myFunction ); // function


console.log(typeof myObj); // object


console.log(typeof heroes ); // object


console.log(typeof BigNumber ); // bigint


console.log(typeof Id ); // symbol


console.log(typeof userEmail); //undefined


console.log(typeof outsideTemp );// object


console.log(typeof loggedIn); // boolean


console.log(typeof scorevalue );//number

console.log(typeof score);//number






