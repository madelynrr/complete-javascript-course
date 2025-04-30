// JavaScript Fundamentals 1

// // Values and Variables
// let country = "United States of America";
// let continent = "North America";
// let population = 340.1;

// console.log(country);
// console.log(continent);
// console.log(population);



// // Data Types
// let isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);



// // let, const, and var
// const country = "United States of America";
// const continent = "North America";
// let population = 340.1;
// const isIsland = false;
// const language = "English";
// isIsland = true;



// // Basic Operators
// const halfPopulation = population / 2;
// console.log(halfPopulation);

// population += 1;
// console.log(population);

// const populationFinland = 6;
// console.log(population > populationFinland);

// const averagePopulation = 33;
// console.log(population < averagePopulation);

// const description = country + " is in " + continent + ", and its " + population + " million people speak " + language
// console.log(description);



// // Strings and Template Literals
// const newDescription = `${country} is in ${continent}, and its ${population} million people speak ${language}`
// console.log(newDescription);



// // Taking Decisions: if/else Statements
// if (population > averagePopulation) {
//     console.log(`${country}'s population is ${population - averagePopulation} above average.`);
// } else {
//     console.log(`${country}'s population is ${averagePopulation - population} below average.`);
// }



// // Type Conversion and Coercion
// console.log("9" - "5"); // 4
// console.log("19" - "13" + "17"); // "617"
// console.log("19" - "13" + 17); // 23
// console.log("123" < 57); // false
// console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143



// // Equality Operators: == vs ===
// const numNeighbors = Number(prompt("How many neighboring countries does your country have?"));

// if (numNeighbors === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbors > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("No borders");
// }
