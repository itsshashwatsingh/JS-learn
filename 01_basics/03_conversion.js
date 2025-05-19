let score = "500000" // we have a variable here that stores the score from a game as a string

console.log(typeof(score)); // output-> string



// now we want this number as an integer, so to convert this t an integer

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

// so we can convert any non number to a number 
