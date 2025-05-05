// JavaScript Fundamentals Part 2

// // Coding Challenge #1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let averageDolphins = calcAverage(44, 23, 71);
// let averageKoalas = calcAverage(65, 54, 49);
// console.log(averageDolphins, averageKoalas);


// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log(`No winner`);
//     }
// }

// checkWinner(averageDolphins, averageKoalas);

// averageDolphins = calcAverage(85, 54, 41);
// averageKoalas = calcAverage(23, 34, 27);
// console.log(averageDolphins, averageKoalas);

// checkWinner(averageDolphins, averageKoalas);



// // Coding Challenge #2
// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
// console.log(calcTip(100));

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
// console.log(tips);

// // const totals = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[bills.length - 1]) + bills[bills.length - 1]];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]]
// console.log(totals);
