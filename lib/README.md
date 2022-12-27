# @geoffcox/binary-search

This package provides a binary search algorithm.

The type of items in the searched array is generic.
The comparison function is injected into the algorithm.
When the value is not found, the algorithm provides the nearest range of indices to where the value should have been found.

The package ships in ES and CommonJS module formats along with DTS for typing.

## Installation and Usage

```
npm install @geoffcox/binary-search-typescript
```

```ts
    const values = [1,2,3,4,5];
    const nearestRange: NearestRange = {};

    const compare = (a: number, b: number) => a-b;
    const result = binarySearch(4, values, compare, nearestRange);

    //expect result to be index of 3 and nearestRange to be [2,4]
```

## Demo

Enjoy it at http://geoffcox.github.io/demos/binary-search

