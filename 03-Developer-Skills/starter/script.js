// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
// Using Google, StackOverflow, and MDN

const temps1 = [3, -2, -6, -1, "error", 9, 13, 14, 9, 5];
const temps2 = [5, 7, 8, "error", 9, 100, 38, 76, 5];

const calcTempAmplitude = function (temps1, temps2) {
  //   const max = Math.max(...temps);
  //   const min = Math.min(...temps);

  const temps = temps1.concat(temps2);

  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  return max - min;
};

console.log(calcTempAmplitude([3, 5, 1], [9, 0, 5]));
*/
//
//
//
/*
// Deubugging with the Console and Breakpoints
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degrees celsius:")),
//   };

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

const calcTempAmplitudeBug = function (temps1, temps2) {
  //   const max = Math.max(...temps);
  //   const min = Math.min(...temps);

  const temps = temps1.concat(temps2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]));
*/
