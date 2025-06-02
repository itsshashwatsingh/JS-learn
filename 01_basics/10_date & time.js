// date

MyDate = new Date()
console.log(MyDate);
// this will return current date and time in non readable format

// to make this readable we use .toString function

console.log(MyDate.toString());//Mon Jun 02 2025 11:42:55 GMT+0530 (India Standard Time)
// now date and time are readable 

// to view dates in different formats we can use different date functions

console.log(MyDate.toDateString());
// this will only return date part in string format i.e.: Mon Jun 02 2025

console.log(typeof(MyDate))// date datatype is an object

// now lets give our own date in input

const AnotherDate = new Date(2023,0,21)
// here 2023 is year,0 is jan month in array format,21 is day
console.log(AnotherDate.toDateString());//:Sat Jan 21 2023

// can further add time as well as well
const newAnotherDate = new Date(2023,0,21,5,30)
console.log(newAnotherDate.toLocaleString());//21/1/2023, 5:30:00 am
//here used toLocaleString which is another of the date function 

// there is a better format to declare date without month in array format confusion
const AnotherNewAnotherDate = new Date("01-14-2003")
console.log(AnotherNewAnotherDate.toDateString());//:Tue Jan 14 2003
// here 01 is month january ,14 is day and 2003 is year

// time

let MyTimeStamp = Date.now()
console.log(MyTimeStamp); // we get time 1748846773496 as output which is in milisecond
// here Date is current date

// we are getting time in milisecond from the date inside Date function

// lets suppose i want the time frame from AnotherNewAnotherDate date


console.log(AnotherNewAnotherDate.getTime());
// this will give time from Tue Jan 14 2003

// to round it off to hrs-min-sec format we will discuss it later

// now if i want to get only day or month or year part of date we will use get functionality

console.log(AnotherDate.getDay());// 6
console.log(AnotherDate.getFullYear());// 2023 and many more
console.log(AnotherDate.getMonth() + 1)//1
// +1 if in array format month else it will be 0 instead of 1 as output

// we can also customise our string date text i.e. mon,jan,2023 to monday,january,23

console.log(newAnotherDate.toLocaleString('default',{
  
    weekday : "long",
      day:"2-digit",
    month:"long",
    year:"2-digit"
})
)//Saturday, 21 January 23
