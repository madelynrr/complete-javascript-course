// JavaScript Fundamentals Part 1

// // Coding Challenge #1
// const weightMark = 78;
// const heightMark = 1.69;

// const weightJohn = 92;
// const heightJohn = 1.95;

// // const weightMark = 95;
// // const heightMark = 1.88;

// // const weightJohn = 85;
// // const heightJohn = 1.76;

// const bmiMark = weightMark / heightMark ** 2;
// const bmiJohn = weightJohn / (heightJohn * heightJohn);

// const markHigherBMI = bmiMark > bmiJohn;

// console.log(bmiMark, bmiJohn, markHigherBMI);



// // Coding Challenge #2
// if (bmiMark > bmiJohn) {
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
// } else {
//     console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
// }



// // Coding Challenge #3
// // const scoreDolphins = (96 + 108 + 89) / 3;
// // const scoreKoalas = (88 + 91 + 110) / 3;
// // console.log(scoreDolphins, scoreKoalas);

// // if (scoreDolphins > scoreKoalas) {
// //     console.log("Dolphins win!");
// // } else if (scoreKoalas > scoreDolphins) {
// //     console.log("Koalas win!");
// // } else {
// //     console.log("Draw!");
// // }

// // const scoreDolphins = (97 + 112 + 101) / 3;
// // const scoreKoalas = (109 + 95 + 123) / 3;

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log("Dolphins win!");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log("Koalas win!");
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
//     console.log("Draw!");
// } else {
//     console.log("No winner");
// }



// // Coding Challenge #4
// const bill = 275;
// const tip = (bill >= 50 && bill <= 300) ? bill * .15 : bill * .20;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);
