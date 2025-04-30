// JavaScript Fundamentals Part 1

// Coding Challenge #1
const weightMark = 78;
const heightMark = 1.69;

const weightJohn = 92;
const heightJohn = 1.95;

// const weightMark = 95;
// const heightMark = 1.88;

// const weightJohn = 85;
// const heightJohn = 1.76;

const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / (heightJohn * heightJohn);

const markHigherBMI = bmiMark > bmiJohn;

// console.log(bmiMark, bmiJohn, markHigherBMI);


// Coding Challenge #2

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}
