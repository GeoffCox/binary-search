export type NearestValueContext<T> = {
    lessThanIndex?: T;
    greaterThanIndex?: T;
  };


export type BinarySearchCompare<T, Context extends unknown> = (
  searchValue: T,
  candidateValue: T,
  candidateIndex: number,
  values: Array<T>,
  context: Context
) => -1 | 0 | 1;

export type BinarySearchMethod<T, TContext extends unknown> = (
  searchValue: T,
  values: Array<T>,
  compare: BinarySearchCompare<T, TContext>,
  context?: TContext
) => number;
