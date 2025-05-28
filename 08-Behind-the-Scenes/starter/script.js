"use strict";

/*
// Scoping in Practice

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating new variable with same name as outer scope variable
      const firstName = "Steven";

      // Reassigning outer scope variable
      output = "NEW OUTPUT";
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "Madelyn";
calcAge(1991);
*/
//
//
//
/*
// Variable Environment: Hoisting and the TDZ

console.log(testing);
var testing = "testing";
console.log(testing);

const myName = "Madelyn";

if (myName === "Madelyn") {
  console.log(`Jonas is a ${job}`);
  const job = "teacher";

  const age = 2037 - 1991;
  console.log(age);

  console.log(x);
}
*/
//
//
//
/*
// Hoisting and TDZ in Practice

console.log(me);
// console.log(job);
// console.log(year);

var me = "Madelyn";
let job = "teacher";
const year = 1991;

console.log(addDecl(1, 2));
// console.log(addExpr(1, 2));
// console.log(addArrow(1, 2));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Issues with var
console.log(numProducts);
if (!numProducts) {
  deleteCart();
}

var numProducts = 10;

function deleteCart() {
  console.log("All products deleted");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/
//
//
//
/*
// The this Keyword in Practice

// console.log(this);

const calcAge = function (birthYear) {
  //   console.log(2037 - birthYear);
  //   console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  //   console.log(2037 - birthYear);
  //   console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  name: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log("this", this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  name: "Matilda",
  year: 2017,
};

matilda.calcAge = jonas.calcAge;

matilda.calcAge();

const f = jonas.calcAge;
f();
*/
//
//
//
/*
// Regular Functions vs. Arrow Functions

var firstName = "Matilda";

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // const self = this;
    // const isMillenial = function () {
    //   console.log("self", self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // isMillenial();

    const isMillenial = () => {
      console.log("this", this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greetArrow: () => console.log(`Hey, ${this.firstName}`),

  greetExpression: function () {
    console.log(`Hey, ${this.firstName}`);
  },
};

jonas.greetArrow();
jonas.greetExpression();

jonas.calcAge();

const addExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpression(2, 3);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(3, 4);
*/
