import { NearestValueContext } from "./types";

export const numberCompare = (
  searchValue: number,
  candidate: number
): 0 | -1 | 1 => {
  return searchValue === candidate ? 0 : searchValue > candidate ? 1 : -1;
};

export const nearestNumberCompare = (
  searchValue: number,
  candidate: number,
  candidateIndex: number,
  _array: Array<number>,
  context: NearestValueContext<number>
) => {
  if (searchValue < candidate) {
    context.lessThanIndex = candidateIndex;
    return 1;
  } else if (searchValue > candidate) {
    context.greaterThanIndex = candidateIndex;
    return -1;
  } else {
    return 0;
  }
};
