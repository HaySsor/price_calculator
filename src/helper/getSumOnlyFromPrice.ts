export const getSumOnlyFromPrice = (
  arr: ((string | undefined)[] | undefined)[]
) => {
  const resToNumber = [...arr.flat()].map((item) => Number(item));
  return resToNumber.reduce((a, b) => a + b, 0);
};
