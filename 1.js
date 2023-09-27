const accountId=14455
let accountEmail= "1234@gmail.com"
var accountPassword="1234"
accountCity="Dehli"

// accountId=2 // Not Allowed because its const
accountEmail="123@gmail.com"
accountPassword="Banglore"

console.log(accountId)

console.table([accountId,accountEmail,accountPassword])

/*
Prefer not to use var because of issue in block scope and function scope
*/