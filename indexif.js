// IF STATEMENTS = if a condition is true, execute some code
//                                   if not, do something else

//let age = 13;

if(age >=18){
    console.log("You are old enough to our this site!");
}
else{
    console.log("You must be 18+ to enter thsi site!");
}
// Exemple 2:

let time = 9;
 
if(time < 12){
    console.log("Good morgning!");
}
else{
    console.log("Good aftrenoon!");
}

// Booleans :

let isStudent = false;

if(isStudent){
    console.log("You are a student");
}
else{
    console.log("You are NOT a student!");
}
 
// else if :

let age = -1;

if(age >=18){
    console.log("You are age enough to our this site!");
}
else if(age <0){
    console,log("Your age cant be below 0");
}
else{
    console.log("You must be 18+ to enter this site!");

    
// ternary operator = a shortcut to if{} and else{} statements
//                                  helps to assign a variable based on a condition
//                                  condition ? codeIfTrue : codeIfFalse;

let ana = 20;
let message = ana >= 25 ? "Youre an adult" : "Youre a minor";
console.log(message);

// THIS SHIT STILL DOESNT WORK !!!!!

let purchaseAmount = 123;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - (purchaseAmount * (discount / 100))}`);


// Switch = can be an difficient replacement to many else if statements

let day = 2;
switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is MTuesday");
        break;   
    case 3:       
        console.log("It is Wednsday");
        break; 
    case 4: 
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
}
