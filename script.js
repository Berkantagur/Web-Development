alert("Welcome my site...");

console.log("Hello again!")
console.error("Debugg...")
console.warn("Warning Berkant")
console.clear()

/*Variables*/

var name;
name = "İklimay"
console.log(name)

var age;
age = 20;
console.log(age)

const email = "berkantagur@gmail.com"
console.log(email)

/*Variable Types*/
// 1) Primitive Types AND 2) Reference Types:Object

//1.1 Strings

let firstName ="Berkant"; 
console.log(typeof firstName)

//1.2 Number

let age1 = 19;
console.log(typeof age1)

//1.3 Boolean

let usingCredit = false;
console.log(typeof usingCredit);

//1.4 Undefined

let phone;
console.log(typeof phone)

//2.1 Object Literal

let address = {
    city:"Aksaray",
    country:"Turkey",
}
console.log(typeof address)

// 2.2 Function
var calculate = function(){
    return 0;
}
console.log(typeof calculate)