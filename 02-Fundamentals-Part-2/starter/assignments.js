// JavaScript Fundamentals 2

// // Functions
// function describeCountry(country, population, capitalCity) {
//     const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//     return description;
// }

// const unitedStates = describeCountry("United States", 340.1, "Washington DC");
// const iceland = describeCountry("Iceland", 0.39, "Reykjavik");
// const scotland = describeCountry("Scotland", 5.4, "Edinburgh");

// console.log(unitedStates);
// console.log(iceland);
// console.log(scotland);



// // Function Declarations vs Expressions
// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }
// const percentageChina = percentageOfWorld1(1441);
// console.log(percentageChina);

// const percentageUnitedStates = percentageOfWorld1(340.1);
// console.log(percentageUnitedStates);

// const percentageIceland = percentageOfWorld1(.39);
// console.log(percentageIceland);


// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// }

// const percentageChina2 = percentageOfWorld2(1441);
// console.log(percentageChina2);

// const percentageUnitedStates2 = percentageOfWorld2(340.1);
// console.log(percentageUnitedStates2);

// const percentageIceland2 = percentageOfWorld2(.39);
// console.log(percentageIceland2);



// Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100;

const percentageChina3 = percentageOfWorld3(1441);
console.log(percentageChina3);

const percentageUnitedStates3 = percentageOfWorld3(340.1);
console.log(percentageUnitedStates3);

const percentageIceland3 = percentageOfWorld3(.39);
console.log(percentageIceland3);
