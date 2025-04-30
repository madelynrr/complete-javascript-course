/*
// Basic Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Madelyn";
const lastName = "Romero";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;

console.log(x);


console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/



/*
// Operator Precendence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;

x = y = 25 - 10 - 5;

console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/



/*
// Strings and Template Literals
const firstName = "Madelyn";
const job = "Software Engineer";
const birthYear = 1991;
const year = 2037;

const madelyn = `I'm ` + firstName + " a " + (year - birthYear) + " year old " + job + "!";
const madelynNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`

console.log(madelyn);
console.log(madelynNew);

console.log("String with \n\
    multiple \n\
    lines");

console.log(`String with
    multiple
    lines`);
*/



/*
// Taking Decision: if/else Statements
const age = 18;

if (age >= 18) {
    // console.log("Sarah can start driving license 🥳");
} else {
    const yearsLeft = 18 - age;
    // console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

// console.log(century);
*/



/*
// Type Conversion and Coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);

console.log(Number(inputYear) + 18);

console.log(Number("Madelyn"));
console.log(typeof NaN);

console.log(String(23), 23);


console.log(`I am ` + 23 + ` years old`);
console.log("23" - "10" - 3);

console.log(typeof ("1" + 1));
console.log(typeof (1 + "1"));
*/



/*
// Truthy and Falsy Values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Madelyn"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("Get that money");
}

let height = 0;
if (height) {
    console.log("Yay height is defined");
} else {
    console.log("Height is undefined");
}
*/




// Equality Operators
