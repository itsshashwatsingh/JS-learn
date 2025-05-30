// stack memeory --> for premitive datatype(string, number, boolean , null , unidentified , Bigint , symbol )
// heap memeory --> for non premitive datatype (Arrays , object , Functions)


// when stack memeory is used
// when we say let datatype1 = datatype2
//   we get a copy of the original value(datatype1) in datatype2

// but when heap memory is used 
// we get reference of the original value

// for example in premitive

let Myname ="shashwat" // declared Myname string datatype (premitive)
let anotherName = Myname // declared anotherName which will become copy of Myname

console.log(anotherName); // here it contais the same value as Myname since it is a copy of my name


// now lets change the value of copy

anotherName = "ankush" // changed the value inside the copy now it became an original of its own and has no relation with Myname

console.log(anotherName);// anotherName is now original and contains its own value

//but in non premetive datatypes -->
//  heap memory allocation is used

// therefore the reference of original is stored in  heap memory

// therefore when reference is changed the original will change as well

// for example
let userOne ={Myname : "shashwat",
              email:"shashwat@google.com"
               }

// now lets create a reference of this object and change its value

let userTwo = userOne

 userTwo.email = "ankush@google.com"
 
// userTwo must have changed the value of userTwo as well
// lets check

console.log(userOne);
console.log(userTwo);
// the email in userOne has been changed
// note that when we create another object inside userTwo 
// it becomes original with is own value and not a reference of userOne anymore