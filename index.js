console.log("Hello");
console.log("I like pizza");


// This is a comment


// variable = A container that stores a value.
//                   Behaves as if it were the value it contains.

// 1. declaration    let x;
// 2. assignment    x= 100;

let x;
x = 123;

let age = 25;
let price = 9.99;

console.log(typeof age);
console.log(typeof price);
console.log(price);
console.log(`You are ${age} yeard old`);
console.log(`The price is $${price}`);

// strings

let firstName = "Bro"
let email = "contact@gmail.com";

console.log(typeof firstName);
console.log(firstName);
console.log(`Your name is ${firstName}`);
console.log(`Your email is ${email}`);

// Booleans :

let online = true;
let forSale = false;

console.log(typeof online);
console.log(`Bro is online: ${online}`);
console.log(`Is this bike for sale: ${forSale}`);

// EXERCIES :

let fullName = "Dada Yoo";
let number = 25;
let isStudent = false;

document.getElementById("p1"). textContent = `Your name is ${fullName}`;
document.getElementById("p2"). textContent = number;
document.getElementById("p3"). textContent = isStudent;

// arithmetic operators = operands (values, variables, etc.)
//                                         operators (+ - * /)
//                                         ex. 11 = x + 5;

let students = 20

//students = students +1;
//students = students -1;
//students = students *2;
//students = students/2;

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;

//students++;
//students--;

console.log(students);


// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

let username;

document.getElementById("mySubmit").onclick = function(){
username = document.getElementById("myText").value;
console.log(username);
document.getElementById("myH1").textContent = `Hello ${username}`
}

// type conversion = change the datatype of a value to another
//                                 (strings, numbers, booleans)

let w = "food"
let y = "food"
let z = "food"

x = Number(w);
y = Number(y);
z = Boolean(z);

console.log(w, typeof w);
console.log(y, typeof y);
console.log(z, typeof z);

// const = a variable that can't be changed

const PI  = 3.14159;
let radius;
let circumference;



radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference);