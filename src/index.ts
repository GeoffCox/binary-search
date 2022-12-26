import { binarySearch } from "./binarySearch";
import { NearestRange } from "./types";

let comparisons = 0;

export const numberCompare = (
  searchValue: number,
  midValue: number
) => {
  console.log(`comparing: ${searchValue} ${midValue}`);
  comparisons++;
  return searchValue - midValue;
};


// generates a sequence of numbers of random length
const length = Math.max(26, Math.floor(Math.random() * 100));
const values = Array.from(Array(length).keys());

// choose a random number to search for in the sequence
const toFind = values[Math.floor(Math.random() * values.length)];

// remove some numbers from the sequence randomly
const remove = Math.floor(Math.random() * (values.length/2));
for (let i = 0; i < remove; i++) {
  values.splice(Math.floor(Math.random() * values.length), 1);
}

console.log(`values: ${values}`);
console.log(`find: ${toFind}`);

const nearestRange: NearestRange = {};

const result = binarySearch(toFind, values, numberCompare, nearestRange);
if (result !== -1) {
  console.log(`Found ${toFind} at [${result}] in ${comparisons} comparisons.`);
}
else if (nearestRange.lowIndex && nearestRange.highIndex) {
  console.log(
    `Not found after ${comparisons} comparisons. nearest: [${nearestRange.lowIndex}],[${nearestRange.highIndex}] = ${values[nearestRange.lowIndex]},${values[nearestRange.highIndex]}`
  );
}
else {
  console.log(`Not found after ${comparisons} comparisons. No nearest range.`);
}