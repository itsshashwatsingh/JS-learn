const accountId = 12345; //locked
let accountEmail = "shashwat@gmail.com";
var accountPassword = "54375";
accountCity = "jaipur";// can also define variables without any keyword (not recommended)
let accountState;

//now lets investigate how these variables works

// lets try change the accountId first and print it

/*
 accountId = 5776;  not allowed

console.log(accountId);// (TypeError: Assignment to constant variable.)
*/

// therefore we can't change the value of const keyword variable

// lets try to change other variables aswell and print them

accountEmail = "sr334@gmail.com";

accountPassword = "3432";

accountCity = "Delhi";

console.table([accountEmail,accountPassword,accountCity,accountState]);

/*
output ->
┌─────────┬───────────────────┐
│ (index) │ Values            │
├─────────┼───────────────────┤
│ 0       │ 'sr334@gmail.com' │
│ 1       │ '3432'            │
│ 2       │ 'Delhi'           │
│ 3       │ undefined         │
└─────────┴───────────────────┘
*/

/*
prefer not to use var bescause of issue with block scope and functional scone
(we well get to it later)
*/ 

