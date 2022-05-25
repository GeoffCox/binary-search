export type BinarySearchCompare<T, Context extends unknown> = (
  index: number,
  array: Array<T>,
  context: Context
) => -1 | 0 | 1;

export type BinarySearchMethod<T, TContext extends unknown> = (
  array: Array<T>,
  compare: BinarySearchCompare<T, TContext>,
  context?: TContext
) => number;
