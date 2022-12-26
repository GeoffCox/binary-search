import { binarySearch } from "./binarySearch";

const numberComparer = (a: number, b: number): 0 | -1 | 1 => {
  return a === b ? 0 : a > b ? 1 : -1;
};

describe("binarySearch", () => {
  it("returns -1 when value not found", () => {
    const values = Array.from(Array(10).keys());
    values.splice(4,1);
    const expected = -1;
    const toFind = 4;

    const actual = binarySearch(toFind, values, numberComparer);
    expect(actual).toBe(expected);
  });

  it("returns -1 when array empty", () => {
    const values: Array<number> = [];
    const expected = -1;
    const toFind = 4;

    const actual = binarySearch(toFind, values, numberComparer);
    expect(actual).toBe(expected);
  });

  it("returns index of match when value is first item", () => {
    const values = Array.from(Array(10).keys());
    const expected = 0;
    const toFind = values[expected];

    const actual = binarySearch(toFind, values, numberComparer);
    expect(actual).toBe(expected);
  });

  it("returns index of match when value is last item", () => {
    const values = Array.from(Array(10).keys());
    const expected = values.length - 1;
    const toFind = values[expected];

    const actual = binarySearch(toFind, values, numberComparer);
    expect(actual).toBe(expected);
  });

  it("returns index of match when value is in exact middle", () => {
    const values = Array.from(Array(7).keys());
    const expected = 3;
    const toFind = values[expected];

    const actual = binarySearch(toFind, values, numberComparer);
    expect(actual).toBe(expected);
  });

  it("returns index of match when value found on lower half", () => {
    const values = Array.from(Array(20).keys());
    const expected = 4;
    const toFind = values[expected];
    const actual = binarySearch(toFind, values, numberComparer);
    expect(actual).toBe(expected);
  });

  it("returns index of match when value found on upper half", () => {
    const values = Array.from(Array(20).keys());
    const expected = 15;
    const toFind = values[expected];
    const actual = binarySearch(toFind, values, numberComparer);
    expect(actual).toBe(expected);
  });

  it("returns index of earliest match when array contains duplicate values", () => {
    const values = [0,1,2,3,4,5,6,7,7,7,10,11,12];
    // mid:6 => higher, mid:10 => lower, mid:8 => match
    const expected = 8;
    const toFind = values[expected];
    const actual = binarySearch(toFind, values, numberComparer);
    expect(actual).toBe(expected);
  });

  it("returns nearest range when value not found", () => {
    const values = Array.from(Array(30).keys());
    values.splice(21,5);
    const expected = -1;
    const expectedRange = {
      lowIndex: 20,
      highIndex: 21
    };
    const toFind = 23;

    const actualRange = {};
    const actual = binarySearch(toFind, values, numberComparer, actualRange);
    expect(actual).toBe(expected);
    expect(actualRange).toMatchObject(expectedRange);
  });

  it("returns nearest range when value found", () => {
    const values = Array.from(Array(30).keys());
    const expected = 23;
    const expectedRange = {
      lowIndex: 22,
      highIndex: 24
    };
    const toFind = 23;

    const actualRange = {};
    const actual = binarySearch(toFind, values, numberComparer, actualRange);
    expect(actual).toBe(expected);
    expect(actualRange).toMatchObject(expectedRange);
  });
});
