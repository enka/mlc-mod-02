export const clone = (source) => {
  return { ...source };
};

export const merge = (source, target) => {
  return { ...target, ...source };
};
