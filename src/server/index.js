import { useCallback } from "react";

const arr = [1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8];
let output = arr.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] = acc[curr] + 1;
  } else {
    acc[curr] = 0;
  }
}, {});

console.log(output);
