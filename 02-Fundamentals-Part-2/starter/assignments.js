// JavaScript Fundamentals 2

// Functions
function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return description;
}

const unitedStates = describeCountry("United States", 340.1, "Washington DC");
const iceland = describeCountry("Iceland", 0.39, "Reykjavik");
const scotland = describeCountry("Scotland", 5.4, "Edinburgh");

console.log(unitedStates);
console.log(iceland);
console.log(scotland);
