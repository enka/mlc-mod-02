export const head = (array) => {
  const [head] = array;
  return head;
};

export const tail = (array) => {
  const [, ...rest] = array;
  return rest;
};

export const init = (array) => array.slice(0, array.length - 1);

export const last = (array) => array.slice(array.length - 1, array.length);
