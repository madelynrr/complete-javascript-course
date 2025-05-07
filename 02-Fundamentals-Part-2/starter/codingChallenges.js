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



// // Coding Challenge #3
// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
// }



// // Coding Challenge #4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);

//     tips.push(tip);
//     totals.push(bills[i] + tip);
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);

// const calcAverage = function (arr) {
//     let total = 0;

//     for (i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total / arr.length;
// }

// const test = [1, 2, 3];
// console.log(calcAverage(test));

// console.log(calcAverage(tips));
// console.log(calcAverage(totals));
