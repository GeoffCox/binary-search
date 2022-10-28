import { BinarySearchCompare } from "./types";

const _binarySearch = <T, TContext extends unknown>(
  searchValue: T,
  values: Array<T>,
  lowIndex: number,
  highIndex: number,
  compare: BinarySearchCompare<T, TContext>,
  context: TContext
): number => {
  if (lowIndex <= highIndex) {
    const mid = Math.ceil((lowIndex + highIndex) / 2);
    const result = compare(searchValue, values[mid], mid, values, context);
    switch (result) {
      case -1:
        return _binarySearch(searchValue, values, lowIndex, mid - 1, compare, context);
      case 1:
        return _binarySearch(searchValue, values, mid + 1, highIndex, compare, context);
      case 0:
      default:
        return mid;
        break;
    }
  }

  return -1;
};

/**
 * Performs a binary search using the predicate
 * @param searchValue The value to search for in the array
 * @param values The array of values to search
 * @param compare The predicate to determine left, right, or match
 * @param context The context available across search recursions
 * @returns The index of the element if found, otherwise -1
 */
export const binarySearch = <T, TContext extends unknown>(
  searchValue: T,
  values: Array<T>,
  compare: BinarySearchCompare<T, TContext>,
  context?: TContext
): number => {
  return _binarySearch(
    searchValue,
    values,
    0,
    values.length - 1,
    compare,
    context ?? ({} as TContext)
  );
};
