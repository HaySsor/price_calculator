import type {ServiceType} from '../types/ServiceType';
import type {DataType} from '../types/DateType';

export const changePriceWhenChose = (
  prev: ServiceType[],
  findService: ServiceType | undefined,
  chosenYear: DataType[],
  chosen: boolean | undefined
) => {
  if (findService) {
    const index = prev.indexOf(findService);
    chosenYear.forEach((item) => {
      const year = item.year;
      const foundPriceUpToAYear = findService.prices[year];
      if (chosen !== undefined) {
        foundPriceUpToAYear.chosen = chosen;
        prev[index].prices = {
          ...prev[index].prices,
          [year]: foundPriceUpToAYear,
        };
        prev[index].chosen = chosen;
      }
    });
  }
};
