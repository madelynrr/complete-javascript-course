// JavaScript Fundamentals Part 2

// Coding Challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let averageDolphins = calcAverage(44, 23, 71);
let averageKoalas = calcAverage(65, 54, 49);
console.log(averageDolphins, averageKoalas);


function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`No winner`);
    }
}

checkWinner(averageDolphins, averageKoalas);

averageDolphins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);
console.log(averageDolphins, averageKoalas);

checkWinner(averageDolphins, averageKoalas);
