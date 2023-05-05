import type {ServiceType} from '../types/ServiceType';
import type {DataType} from '../types/DateType';

export const changePriceWhenChangeYear = (
  prev: ServiceType[],
  chosenYear: DataType[],
  years: DataType[]
) => {
  const AllChosenServices = prev.filter((item) => item.chosen === true);
  foundPriceUpToAYear(AllChosenServices, years, false);
  foundPriceUpToAYear(AllChosenServices, chosenYear, true);

  prev.forEach((item) => {
    if (item.chosen) {
      const findIfSomePriceAreChosen = Object.entries(item.prices).some(
        ([_, value]) => {
          return value.chosen === true;
        }
      );
      if (!findIfSomePriceAreChosen) {
        item.chosen = false;
      }
    }
  });
};

const foundPriceUpToAYear = (
  AllChosenServices: ServiceType[],
  arrayWithYears: DataType[],
  boolean: boolean
) => {
  AllChosenServices.forEach((service) => {
    arrayWithYears.forEach((item) => {
      const year = item.year;
      const foundPriceUpToAYear = service.prices[year];
      foundPriceUpToAYear.chosen = boolean;
    });
  });
};
