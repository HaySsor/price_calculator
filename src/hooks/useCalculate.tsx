// type import
import type {PageType} from '../types/PackageType';

// helper function import
import {getSpecificsItemOnArray} from '../helper/getSpecificsItemOnArray';
import {getSumOnlyFromPrice} from '../helper/getSumOnlyFromPrice';
import {getSumBySelectingThePackage} from '../helper/getSumBySelectingThePackage';

const package1: PageType = {
  '2023': '79',
  '2024': '89',
  '2025': '99',
};
const package2: PageType = {
  '2023': '64',
  '2024': '64',
  '2025': '64',
};

export const useCalculate = (arr: (string | string[])[] | []) => {
  const res: string[] = [];
  const names = arr.map((item) => item[0]);
  const years = getSpecificsItemOnArray(arr, 0);
  const prices = getSpecificsItemOnArray(arr, 1);

  const noDuplicationYears = [...new Set([...years.flat()])];

  if (arr.length === 1) {
    return getSumOnlyFromPrice(prices);
  }

  if (arr.length === 2) {
    if (names.includes('Internet') && names.includes('Telewizja')) {
      return getSumBySelectingThePackage(noDuplicationYears, package1, res);
    } else if (
      names.includes('Internet') &&
      names.includes('Abonament telefoniczny')
    ) {
      return getSumBySelectingThePackage(noDuplicationYears, package2, res);
    } else {
      return getSumOnlyFromPrice(prices);
    }
  }
  if (arr.length === 3) {
    if (
      names.includes('Internet') &&
      names.includes('Telewizja') &&
      names.includes('Dekoder 4K')
    ) {
      return getSumBySelectingThePackage(noDuplicationYears, package1, res);
    } else if (
      names.includes('Internet') &&
      names.includes('Abonament telefoniczny')
    ) {
      const resToNumber = getSumBySelectingThePackage(
        noDuplicationYears,
        package2,
        res
      );
      const telPrice = prices[1]?.reduce((a, b) => a + Number(b), 0);
      if (telPrice) {
        return resToNumber + telPrice;
      }
    } else {
      return getSumOnlyFromPrice(prices);
    }
  }
  if (arr.length === 4) {
    const resToNumber = getSumBySelectingThePackage(
      noDuplicationYears,
      package1,
      res
    );
    return resToNumber + 29 * noDuplicationYears.length;
  }
};
