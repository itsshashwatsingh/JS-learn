console.log(2>1); // true
console.log(2<1); // false
console.log(2>=1); // true
console.log(2<=1); // false
console.log(2==1); // false
console.log(2!=1); // true

console.log("2" > 1); // true ; it works but not recommended
console.log("02">"1"); // false;  this is why


/* these type of comparision are not recommended
console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); //false
console.log(undefined == 0); // false
console.log(undefined < 0); // false
*/

// === strict check 

console.log("2" == 2); // this will give true as it only checks the value is equal or not
console.log("2"===2); // this will give false as it checks both valuse and datatype before answering

