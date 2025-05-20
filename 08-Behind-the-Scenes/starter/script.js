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
