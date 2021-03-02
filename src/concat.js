export const concat = (array1, array2) => [...array1, ...array2];

export const concatMulti = (...args) =>
  args.reduce((acc, val) => [...acc, ...val], []);
