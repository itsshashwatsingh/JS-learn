const Myname = " shashwat"

const repoCount = 10

// now i want to write a sentence -->
// "My name is shashwat and my repo count is 10"

// we know that we can do it like this

console.log("My name is"+Myname+" and my repo count is "+repoCount);
// but this looks so complicated to use and readblity is not so good

// there is an alternative for this

console.log(`My name is${Myname} and my repo count is ${repoCount}`);

// much better

// now lets see how string stores set of characters

// string is a datatype on its own
// which sometimes behaves like  an object

let gameName = new String('counter strike')
// new is an object function used to define or declare objects


console.log(gameName);  // output: [String: 'counter strike'] 

// now lets check its character storage type

console.log(gameName.__proto__); // output: {} i.e. object
// string is string only
// but here it behaves like an object 
// javaScript treats it like an object temporarily
// string stores characters in object like format
// and can be refered as "string object"
// lets access the character of string object

console.log(gameName[0]); //output: c
//  we got the first character of string object 


// lets find out the length of this string object i.e. no of character stored
console.log(gameName.length);// output:8

// lets convert the string to upper case

console.log(gameName.toUpperCase()); // --> output: COUNTER STRIKE
 // to Uppercase is an inbuild function in javaScript
//  that can be used with strings
//  we use () with a fuction when we call that function

// now lets get the character in 5 th index of string object


console.log( gameName.charAt(5)) // output: e


// now lets view the index where the character t is
console.log(gameName.indexOf('t')) // output:4

//now lets edit the gameName sting in a new copy of gameName string using some 
// string editing feature in javaScript like (substring,slice,trim,replace,concat)


// substring
let gameNameCopy = gameName.substring(0,5)

console.log(gameNameCopy); // output: count
// it removed the character from 0 index to 4th index not including 5th index


// lets see how slice

let anothergameNameCopy =gameName.slice(-20,5) // it works with even if given negative index
// the same cannot be done using substring
console.log(anothergameNameCopy);

// lets suppose we have extra space in our string 
// to remove that we use trim

let anotherString = "       Ankush"
// here there is lots of space 

console.log(anotherString.trim());//Ankush it removed the space 

// we have  fetched a text of url --> htpps://shashwat.com/shashwat singh
// but there are space in url which is considerd as "%20" by javascript 

// to replace that %20 with space " " we use replace

let url="htpps://shashwat.com/shashwat%20singh"

console.log(url.replace("%20"," "));// output: htpps://shashwat.com/shashwat singh

let Myname2 ="Ankush-Singh"

console.log(Myname2.split('-',1));

