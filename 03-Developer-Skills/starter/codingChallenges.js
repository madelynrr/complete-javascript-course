"use strict";

// // Iterate over array, log temperature and count
// const temps1 = [17, 21, 23];
// const temps2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let string = "... ";
//   for (let i = 0; i < arr.length; i++) {
//     string += `${arr[i]}C in ${i + 1} days ... `;
//   }
//   console.log(string);
// };

// printForecast(temps2);
//
//
//
// // Coding Challenge #2
// const hours1 = [7.5, 8, 6.5, 0, 8.5, 4, 0];
// const hours2 = [7.5, 8, 6.5, 0, 8.5];

// const addArr = function (arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// };

// const average = (arr) => {
//   return addArr(arr) / arr.length;
// };

// const tracker = function (arr) {
//   if (!Array.isArray(arr) || arr.length !== 7) return -1;
//   const finalTally = {};
//   const total = addArr(arr);
//   const days = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];

//   finalTally.total = total;
//   finalTally.average = Math.round(average(arr) * 10) / 10;
//   finalTally.dayWithMostHours = days[arr.indexOf(Math.max(...arr))];
//   finalTally.daysWorked = arr.filter((num) => num > 0).length;
//   finalTally.fullTime = total >= 35 ? true : false;

//   return finalTally;
// };

// console.log(tracker(hours1));
// console.log(tracker(hours2));
