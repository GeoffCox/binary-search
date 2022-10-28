import { binarySearch } from "./binarySearch";
import { nearestNumberCompare } from "./numberCompare";
import { NearestValueContext } from "./types";

// const generateSequence = (count: number, step: number = 100): number[] => {
//   const values = [];

//   let current = 0;

//   for (let i = 0; i < count; i++) {
//     current += Math.floor(step * Math.random());
//     values.push(current);
//   }

//   return values;
// };

// ----- create known values

const values = [43, 78, 125]; //, 134, 136, 204, 398, 500];
const toFind = 50;

console.log(`values: ${values}`);
console.log(`toFind: ${toFind}`);

const context: NearestValueContext<number> = {
  lessThanIndex: -1,
  greaterThanIndex: -1,
};
const result = binarySearch(toFind, values, nearestNumberCompare, context);
console.log(
  `binarySearch - result: values[${result}]:${values[result]} nearest: lower:${values[context.lessThanIndex ?? -1]} higher:${values[context.greaterThanIndex ?? -1]}`
);
