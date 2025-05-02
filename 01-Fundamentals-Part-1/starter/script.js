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



/*
// Equality Operators
const age = 18;
if (age === 18) {
    console.log("You just became an adult (strict)");
}

if (age == 18) {
    console.log("You just became an adult (loose)");
}

const favorite = Number(prompt("What's your favorite number?"));
console.log(typeof (favorite), favorite);

if (favorite === 13) {
    console.log("Cool, 13 is a great number");
} else if (favorite === 7) {
    console.log("7 is also a cool number");
} else {
    console.log("Number is not 13 or 7");
}

if (favorite !== 13) {
    console.log("Why not 13??");
}
*/



/*
// Boolean Logic
const age = 16;
const a = age >= 20;
const b = age < 30;

console.log(!a);
console.log(a && b);
console.log(a || b);
console.log(!a && b);
console.log(a || !b);
*/



/*
// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
    console.log("Sarah can drive");
} else {
    console.log("Someone else should drive");
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah can drive");
} else {
    console.log("Someone else");
}
*/



/*
// The Switch Statement
const day = "monday";

switch (day) {
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break
    case "tuesday":
        console.log("Prepare theory videos");
        break
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break
    case "friday":
        console.log("Record videos");
        break
    case "saturday":
    case "sunday":
        console.log("Enjoy weekend!");
        break
    default:
        console.log("Not a valid day");
}

if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy weekend!");
} else {
    console.log("Not a valid day");
}
*/



/*
// Statements and Expressions
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
    const str = "23 is bigger";
}

console.log(`I'm ${2037 - 1991} years old`);

// console.log(`${if (23 > 10) {
//     const str = "23 is bigger";
// }}`);
*/
