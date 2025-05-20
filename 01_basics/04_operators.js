// operators in javascript

let a = 5
let b = 6

// we already know these basic operations
console.log(a + b); // 11
console.log(a - b); // -1
console.log(a * b); // 30
console.log(a / b); // 0.8333333333333334
console.log(a % b); // 5
console.log(a ** b); // 15625

let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2

console.log(str3); // hello world

console.log("1" + 2);// output->12
console.log(1 + "2");// output->12
console.log("1" + 2 + 2) ;// output->122 
console.log(2 + 2 + "1");// output->41 

// why are we getting different values as output of literally the same operation
// if string is first in operation statement all the elment of operation will be converted to string
// is number is first in operation statement number will add as a number and string as string


// to avoid these confusion we use () to seperately specify the operations between string and number 

console.log("1"+( 2 + 2)) // output-> 14

// if simply written console.log("1" + 2 + 2) have given output->122 
// but using () we seperately specified to add numbers 2 + 2 and append it to string "1"
// to get 14 as output ; 1(2+2)=14

console.log(+true); // output->1
console.log((+""));// output->0

let num1, num2, num3

num1 = num2 = num3 = 2+2 // not recommended these type of assignments for better readablity

let gameCounter = 100

gameCounter++ // postfix increament

console.log(gameCounter);  // 101

let gameCounter2 = 100

++gameCounter2 // prefix increament

console.log(gameCounter2); // 101











