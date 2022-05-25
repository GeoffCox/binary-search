import { binarySearch } from "./binarySearch";

const numberComparer = (a: number, b: number): 0 | -1 | 1 => {
  return a === b ? 0 : a > b ? 1 : -1;
};

describe("binarySearch", () => {
  it("returns -1 when value not found", () => {
    const expected = -1;

    const values = [1, 2, 3, 5, 6, 7];
    const toFind = 4;

    const actual = binarySearch(values, (index, array) => {
      return numberComparer(toFind, array[index]);
    });
    expect(actual).toBe(expected);
  });

  it("returns -1 when array empty", () => {
    const expected = -1;

    const values: Array<number> = [];
    const toFind = 4;

    const actual = binarySearch(values, (index, array) => {
      return numberComparer(toFind, array[index]);
    });
    expect(actual).toBe(expected);
  });

  it("returns index of match when value found in middle", () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8];
    const expected = 4;
    const toFind = values[expected];

    const actual = binarySearch(values, (index, array) => {
      return numberComparer(toFind, array[index]);
    });
    expect(actual).toBe(expected);
  });

  it("returns index of match when value is first item", () => {
    const values = [1, 2, 3, 4, 5, 6, 7];
    const expected = 0;
    const toFind = values[expected];

    const actual = binarySearch(values, (index, array) => {
      return numberComparer(toFind, array[index]);
    });
    expect(actual).toBe(expected);
  });

  it("returns index of match when value is last item", () => {
    const values = [1, 2, 3, 4, 5, 6, 7];
    const expected = values.length - 1;
    const toFind = values[expected];

    const actual = binarySearch(values, (index, array) => {
      return numberComparer(toFind, array[index]);
    });
    expect(actual).toBe(expected);
  });

  it("returns index of match when value found on lower half", () => {
    const expected = 2;
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const toFind = values[expected];
    const actual = binarySearch(values, (index, array) => {
      return numberComparer(toFind, array[index]);
    });
    expect(actual).toBe(expected);
  });

  it("returns index of match when value found on upper half", () => {
    const expected = 10;
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const toFind = values[expected];
    const actual = binarySearch(values, (index, array) => {
      return numberComparer(toFind, array[index]);
    });
    expect(actual).toBe(expected);
  });

  it("returns index of first match when duplicate values in array", () => {
    const expected = 9;
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 10, 14];
    const toFind = values[expected];
    const actual = binarySearch(values, (index, array) => {
      return numberComparer(toFind, array[index]);
    });
    expect(actual).toBe(expected);
  });

  it("returns -1 when not found and duplicate values in array", () => {
    const expected = -1;
    const values = [2, 4, 2, 4, 2, 4, 2, 4];
    const toFind = 3;
    const actual = binarySearch(values, (index, array) => {
      return numberComparer(toFind, array[index]);
    });
    expect(actual).toBe(expected);
  });
});
