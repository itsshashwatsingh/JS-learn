let score = "500000" // we have a variable here that stores the score from a game as a string

console.log(typeof(score)); // output-> string



// now we want this number as an integer, so to convert this to an integer

let numberScore = Number(score)

console.log(typeof(numberScore)); // output-> number

//------------------------------------------------------------


// now let suppose the score is not a numbered string will it get converted lets investigate

let score2 = "victory69" // we have a variable  score2  here that stores combination of string and number value from a game as a string

console.log(typeof(score2)); // output-> string

// now lets try to convert this not numbered string to a number

let numberScore2 = Number(score2) 

console.log(typeof(numberScore2)); // output-> number

// how does a non number converted to number

// lets check the value of numberScore2

console.log(numberScore2) // output-> NaN (not a number) 

// so we can convert any non number(string or combination of string and numbers) type to a number but that converted non number value will become from (string or combination of string and numbers) to "NaN" value that is of type number

//------------------------------------------------------------

// similarly for null as a value of a variable

let score3 = null

let numberScore3 = Number(score3) 

console.log(typeof(numberScore3)); // output-> 0


// this will will convert null to its numbered value that is 0 (type number)

//------------------------------------------------------------

// similarly for undefined as a value of a variable

let score4 = undefined

let numberScore4 = Number(score4) 

console.log(typeof(numberScore4)); // output-> NaN


// this will will convert undefined to its "NaN" value that is of type number

//=================================================================================================================================================

// so we come to conclusion that convert 

/*
"5000" (type string) => 5000 (type number)

"vistory69" (srting) => NaN (type number)

null => 0 (type number)

undefined => NaN (type number)


*/

//=================================================================================================================================================


// we can perform opposite of this as well 


let ID = 25

let stringID = String(ID)

console.log(stringID); // output => 33

console.log(typeof(stringID)); // output => string

//-----------------------------------------------------------------

// now can we convert boolean true or false to number

let score5 = true

let numberScore5 = Number(score5) 

console.log(typeof(numberScore5)); // output-> type number  ( value 1)

// this will will convert boolean true or false to its numbered value that is 1 or 0 (type number)

//---------------------------------------------------------

// now similarly can we convert number 1 or 0 to boolean true false lets try

let isloggedIn = 1

let booleanIsloggedIn = Boolean(isloggedIn)

console.log(booleanIsloggedIn); // output -> true

console.log(typeof(booleanIsloggedIn)); //  (type boolean)

// yes we can convert number 1 or 0 to boolean true or false

//------------------------------------------------------

// now similarly can we convert empty string and non empty string "" or "wyfedyh" to boolean true false lets try

let isloggedIn2 = ""

let booleanIsloggedIn2 = Boolean(isloggedIn2)

console.log(booleanIsloggedIn2); // output -> false

console.log(typeof(booleanIsloggedIn2)); //  (type boolean)

//----

let isloggedIn3 = "shashwat"

let booleanIsloggedIn3 = Boolean(isloggedIn3)

console.log(booleanIsloggedIn3); // output -> true

console.log(typeof(booleanIsloggedIn3)); //  (type boolean)



// yes we can convert number 1 or 0 to boolean true or false

//=================================================================================================================================================

// so we get to the conclusion that

// in string conversion

// 25 (type number) => "25" (type string)

// In boolean conversion

// 1 => true , 0 => false 

// "" (empty string) => false , "shashwat" (non empty string) => true




