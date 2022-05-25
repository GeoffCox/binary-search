import { BinarySearchCompare } from "./types";

const _binarySearch = <T, TContext extends unknown>(
  array: Array<T>,
  low: number,
  high: number,
  compare: BinarySearchCompare<T, TContext>,
  context: TContext
): number => {
  
  if (low <= high) {
    const mid = Math.ceil((low + high) / 2);
    const result = compare(mid, array, context);
    switch (result) {
      case -1:
        return _binarySearch(array, low, mid - 1, compare, context);
      case 1:
        return _binarySearch(array, mid + 1, high, compare, context);
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
 * @param array The array of values to search
 * @param compare The predicate to determine left, right, or match.
 * @param context The context available across search recursions
 * @returns The index of the element if found, otherwise -1
 */
 export const binarySearch = <T,TContext extends unknown>(
  array: Array<T>,
  compare: BinarySearchCompare<T, TContext>,
  context? : TContext,
): number => {
  return _binarySearch(array, 0, array.length - 1, compare, context ?? {} as TContext);
};


