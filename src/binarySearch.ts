import { BinarySearchCompare, NearestRange } from "./types";

const _binarySearch = <T>(
  searchValue: T,
  values: Array<T>,
  lowIndex: number,
  highIndex: number,
  compare: BinarySearchCompare<T>,
  nearestRange: Required<NearestRange>
): number => {
  if (lowIndex <= highIndex) {
    const midIndex = Math.ceil((lowIndex + highIndex) / 2);
    const result = compare(searchValue, values[midIndex]);

    if (result < 0) {
      // when the searchValue < candidate, search the lower half
      nearestRange.highIndex = midIndex;
      return _binarySearch(searchValue, values, lowIndex, midIndex - 1, compare, nearestRange);
    } else if (result > 0) {
      // when the searchValue > candidate, search the upper half
      nearestRange.lowIndex = midIndex;
      return _binarySearch(searchValue, values, midIndex + 1, highIndex, compare, nearestRange);
    } else {
      nearestRange.lowIndex = midIndex - 1;
      nearestRange.highIndex = midIndex + 1 > values.length ? -1 : midIndex + 1;
      return midIndex;
    }
  }

  return -1;
};

/**
 * Performs a binary search using the predicate
 * @param searchValue The value to search for in the array
 * @param values The array of values to search
 * @param compare The predicate to determine left, right, or match
 * @param nearestRange A range to be updated with the indicies nearest to the value. Generally used when the value is not found.
 * @returns The index of the element if found, otherwise -1
 */
export const binarySearch = <T>(
  searchValue: T,
  values: Array<T>,
  compare: BinarySearchCompare<T>,
  nearestRange?: NearestRange
): number => {
  const range = nearestRange ?? {};
  range.lowIndex = 0;
  range.highIndex = values.length - 1;
  return _binarySearch(searchValue, values, 0, values.length - 1, compare, range as Required<NearestRange>);
};
