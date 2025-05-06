'use strict';

/*
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}

if (hasDriversLicense) {
    console.log("I can drive");
}

// const interface = "Audio";
// const private = 2;
// const if = 23;
*/



/*
// Functions
function logger() {
    console.log("My name is Madelyn");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/



/*
// Function Declarations vs Expressions
// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}
const age2 = calcAge2(1991)
console.log(age2);
*/



/*
// Arrow Functions
// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Madelyn"));
*/



/*
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/



/*
// Reviewing Functions
const calcAge = function (birthYear) {
    return 2037 - birthYear
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, "Madelyn"));
console.log(yearsUntilRetirement(1970, "Bob"));
*/



/*
// Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
// friends = ["Bob", "Alice"]

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const jonas = ["Madelyn", "Romero", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const birthYears = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[birthYears.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), calcAge(birthYears[birthYears.length - 1])];
console.log(ages);
*/



/*
// Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const newLength = friends.push("Jay");
console.log(newLength);
console.log(friends);

friends.unshift("John");
console.log(friends);

const popped = friends.pop();
console.log(popped);
friends.pop();
console.log(friends);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23)
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Peter")) {
    console.log("You have a friend called Peter");
} else if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}
*/



/*
// Introduction to Objects
const madelyn = {
    firstName: "Madelyn",
    lastName: "Romero",
    age: 2037 - 1991,
    job: "software engineer",
    friends: ["Michael", "Peter", "Steven"]
};
console.log(madelyn);
*/



/*
// Dot vs Bracket Notation
const madelyn = {
    firstName: "Madelyn",
    lastName: "Romero",
    age: 2037 - 1991,
    job: "Software Engineer",
    friends: ["Michael", "Steven", "Peter"]
};

console.log(madelyn);
console.log(madelyn.firstName);
console.log(madelyn["firstName"]);

const nameKey = "Name"

console.log(madelyn["first" + nameKey]);
console.log(madelyn["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Madelyn? Choose between firstName, lastName, age, job, friends.");
// console.log(madelyn.interestedIn);
// console.log(madelyn[interestedIn]);

// if ((madelyn[interestedIn])) {
//     console.log(madelyn[interestedIn]);
// } else {
//     console.log("Wrong request");
// }

madelyn.location = "Colorado";
madelyn["city"] = "Longmont";
console.log(madelyn);

console.log(`${madelyn.firstName} has ${madelyn.friends.length} friends and her best friend is ${madelyn.friends[0]}`);
*/



/*
// Object Methods
const madelyn = {
    firstName: "Madelyn",
    lastName: "Romero",
    birthYear: 1991,
    job: "Software Engineer",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);

    //     return 2037 - this.birthYear
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license`
    }
};

console.log(madelyn.calcAge());
console.log(madelyn.age);
console.log(madelyn.age);

// console.log(madelyn.calcAge(1991));
// console.log(madelyn["calcAge"](1991));

console.log(madelyn.getSummary());
*/
