import type {PageType} from '../types/PackageType';

export const getSumBySelectingThePackage = (
  yearArr: (string | undefined)[],
  SpecificPackage: PageType,
  resultArray: string[]
) => {
  yearArr.flat().forEach((item) => {
    resultArray.push(SpecificPackage[item as keyof typeof SpecificPackage]);
  });
  const resToNumber = resultArray.map((price) => Number(price));
  return resToNumber.reduce((a, b) => a + b, 0);
};
