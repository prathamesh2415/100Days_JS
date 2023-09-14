const accountId=1000
let accountEmail = "prathamesh@gmail.com"
var accountPassword = "12345"

accountCity ="Mumbai"
// accountId =2  //not allowed
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.table([accountEmail,accountPassword,accountCity])
//after change


accountEmail = "hhhh@gmail.com"
accountPassword = "4567"
accountCity= "Bengaluru"

console.table([accountEmail,accountPassword,accountCity])

/*
Prefer not to use var because of issue in block scope and functional scope
*/