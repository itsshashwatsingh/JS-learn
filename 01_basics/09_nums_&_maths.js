const score = 400
console.log(score);

// we all already know how this this works

// and we also know this

const balance = new Number(100)
console.log(balance);
// here balance stores a number datatype which is 100 
// since we specified that its a number it cannot be something other than number
// or the output will be NaN


// Number functionalities

console.log(balance.toString()); //by doing this we can also use string functionalities with number

//like
console.log(balance.toString().length);//output:3

// we can also zero after decimal upto given places
console.log(balance.toFixed(4)); // output: 100.0000
// mostly used in ecommerce websites


const otherNumber = 123.8966


console.log(otherNumber.toPrecision(6));
// to precision is used return precision round offs in
//  given places like here upto  6 places of entire number roundoff 


// we can also return output in , seprated values like amount values

const price = 10000000

console.log(price.toLocaleString());// but if this is in us standard 
// to convert this to indial standard we we can do this

console.log(price.toLocaleString('en-IN'));

//------------------ Maths in JavaScript ---------------------------------------------------


console.log(Math);
// Math is an inbuilt property in javsSript which is use to 
// generate already defined values or operations
// like .pi=3.14
// .random=random number from 0-1
// .abs to covert -ve to positive

console.log(Math.abs(-4));
// used to change the negative value to positive

console.log(Math.round(4.56));
// this will roundoff the decimals to there closest whole number value

// if we want roundoff to greater whole number either ways then we can use ceil
console.log(Math.ceil(4.2));

// or we can roundoff to lowest whole number values using floor
console.log(Math.floor(4.8));

// like this we can use many inbuilt operations like .sqrt to get square root or min or max

console.log(Math.min(4,6,7,8));

// most imp use case of Math funtion

// Math.random()

// generate a random number between 0 and 1
console.log(Math.random());

// and we can always change its range to that number up to which u want your range 
// i want range to be from 0 to 10

console.log(Math.random()*10);
// now it generates number between 0 and 10

// but here 10 exclusive therefore it will never generate 10 to
//  generate 10 we insrease range by 1 i.e. 11

console.log(Math.random()*11);
// lets round it off to lowest whole number value

console.log(Math.floor(Math.random()*11));


// if we want the random number between min and max value 
// for that we use this formula --> Math.floor(Math.random()* (max - min +1) + min)

const min = 15
const max = 25


console.log(Math.floor(Math.random()* (max - min +1) + min));
