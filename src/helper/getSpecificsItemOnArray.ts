export const getSpecificsItemOnArray = (
  arr: (string | string[])[] | [],
  indexToFound: number
) => {
  return arr
    .map((nestedArray) => {
      if (Array.isArray(nestedArray))
        return nestedArray.map((stringWithYearAndPrice, index) => {
          if (index > 0) {
            const getDataOrPrice = stringWithYearAndPrice.split(' ');
            return getDataOrPrice[indexToFound];
          }
        });
    })
    .map((item) => item?.filter((stringWithData) => stringWithData));
};
