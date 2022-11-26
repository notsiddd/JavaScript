//==========================Variables============================================

/*
let js = 'amazing';
if (js === 'amazing') alert("JavaScript is FUN!");
40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);
console.log("Siddhartha");
console.log(23);

//Naming Conventions for JS

let firstName = "Siddhartha";
console.log(firstName);

let first_name = "Sid";
let $keyword = "we can use a dollar sign in front to make the use of the kw legal"


//==========================Data Types and Values============================================

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof 24);
console.log(typeof 'Sid');
//Dynamic typing demonstration
javascriptIsFun = "yes!";
console.log(typeof javascriptIsFun);

//undefined
let year;
console.log(year);

//==========================Declaring variables============================================
let age = 30;
age = 31;
//We cannot mutate const variables or declare empty const variables
const birthYear = 2002;

// var is the old way of creating variables (Avoid)
var job = "student";
job = "intern";


//==========================Basic Operators============================================
const currentYear = 2022;
const ageSid = currentYear - 2002;
const ageSrijan = currentYear - 1997;
console.log(ageSid, ageSrijan);
console.log(ageSid * 2, ageSid / 10, 2 ** 3);

const firstName = "Siddhartha";
const lastName = "Singh";
console.log(firstName + " " + lastName);

let x = 10 + 8;
x += 2;
console.log(x);
console.log(ageSid > ageSrijan);


//==========================Operator Precedence============================================
const currentYear = 2022;
const ageSid = currentYear - 2002;
const ageSrijan = currentYear - 1997;
console.log(currentYear - 2002 > currentYear - 1997);
// Find precendence table at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);


//==========================Strings and Template Literals============================================
const firstName = "Siddhartha";
const job = "student";
const birthYear = 2002;
const year = 2022;
const sid = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(sid);

const sidTemplateLiteral = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(sidTemplateLiteral);

console.log("Strings with \n\
multiple \n\
lines");

console.log(`Template literals
make it
so easy!`);


//==========================Taking Decisions - If/Else Statements============================================
const age = 19;
const legalAge = age >= 18;

if (legalAge) {
    console.log("You can start driving! 🚗");
}
else {
    yearsLeft = 18 - age;
    console.log(`You are too young. Wait another ${yearsLeft} years!`);
}


//==========================Type Conversion(Manual) and Coercion(Automatic)============================================
const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Sid'));
console.log(typeof NaN);

console.log(String(1991), 1991);

//Coercion
console.log("I'm " + 19 + " years old!");

//Sometimes opposite conversion happens because the operators can do that specific operation on numbers only

console.log('23' - '10' - 3);
console.log('23' / '2');

//Weird Example
let n = '1' + 1 // It will give 11
n = n - 1;
console.log(n);
console.log('10' - '3' - 2 + '5'); //10-3-2 = 5 and add 5 to it = 55

//==========================Truthy and Falsy Values============================================
// 5 falsy ( not exactly false but will become false if we convert them to boolean)
// 0 , '', undefined, null, NaN (everything else are truthy values)

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Sid'));
console.log(Boolean({}));
console.log(Boolean(''));

//Type Coercion to Boolean
const money = 0;
if (money) {
    console.log("Good.");
}
else {
    console.log("Get a job!");
}



//=========================Equality Operators============================================
const age = 18;
//Strict Equality - No type conversion
if (age === 18) console.log('You are an adult! (Strict Equality)');
//Loose Equality
if ('18' == 18) console.log("You are an adult! (Loose Equality)");

const favNum = Number(prompt("What is your fav number?"));
console.log(favNum);
console.log(typeof favNum); //String

if (favNum === 7) console.log("SIUUUUUUU!"); // '7' == 7 but '7' not === 7
else if (favNum === 10) console.log("idk what to say");
else console.log("Number is neither 7 nor 10!");

if (favNum !== 7) console.log('Why not 7?'); // !== is strict and != loose


//=========================Boolean Logic============================================
// Revision of AND, OR and NOT Tables


//=========================Logical Operators============================================

const hasLicense = true;
const hasGoodVision = false;

console.log(hasLicense && hasGoodVision);
console.log(hasLicense || hasGoodVision);
console.log(!hasLicense);

const shouldDrive = hasGoodVision && hasLicense;

if (shouldDrive) {
    console.log("You can drive!");
}
else console.log("Someone else should drive!");


//=========================The Switch Statement============================================
const day = 'sunday';

switch (day) {
    case 'monday':
        console.log("Monday is very busy!");
        break;
    case 'tuesday':
        console.log("Just one lecture today!");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Both Wednesday and Thursday are very busy!");
        break;
    case 'friday':
    case 'saturday':
    case 'sunday':
        console.log("You are enjoying the long weekend!");
        break;
    default:
        console.log("Invalid day!");
}


//=========================Statements and Expressions============================================
//Expressions are like the words that make up the statements.
//Statements are like the complete sentences.
4 / 2
1997
true && false //Expressions produce values

let str;
if (10 > 9) {
    str = "10 is greater!"; // This statement does not neccesarily produce a value, it just declares.
}
*/

//=========================The Conditional (Ternary) Operator============================================
const age = 19;
age >= 18 ? console.log("I am an adult!") : console.log("Still a minor!");

const drinkOfChoice = age >= 18 ? "beer" : "cola";
console.log(drinkOfChoice);

// Using ternary operators you can implement an if inside a template literal since it produces a value!
console.log(`I like to drink ${age >= 18 ? "beer" : "cola"}!`);
