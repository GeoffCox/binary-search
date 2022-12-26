export type NearestRange = {
  /**
   * The index of the nearest value lower than the value
   */
  lowIndex?: number;
  /**
   * The index of the nearest value higher than the value.
   */
  highIndex?: number;
};

/**
 * Compares two values
 * @param searchValue the value being searched for
 * @param midValue the value to compare against
 * @returns 0 if equal, 1 if searchValue > midValue, -1 if searchValue < midValue
 */
export type BinarySearchCompare<T> = (searchValue: T, midValue: T) => number;

/**
 * Performs a binary search using the predicate
 * @param searchValue The value to search for in the array
 * @param values The array of values to search
 * @param compare The predicate to determine left, right, or match
 * @param nearestRange A range to be updated with the indicies nearest to the value. Generally used when the value is not found.
 * @returns The index of the element if found, otherwise -1
 */
export type BinarySearchMethod<T> = (
  searchValue: T,
  values: Array<T>,
  compare: BinarySearchCompare<T>,
  nearestRange?: NearestRange
) => number;
