import {ServiceType} from '../types/ServiceType';

export const finedAllChosenService = (arr: ServiceType[]) => {
  const allChosenServices: Array<Array<string>> = [];

  allChosenServices.length = 0;
  const allCheckedService = arr.filter((service) => {
    if (service.chosen === true) {
      return service;
    }
  });

  allCheckedService.forEach((service) => {
    const name = service.name;
    const prices: string[][] = [];
    Object.entries(service.prices).forEach(([k, v]) => {
      if (v.chosen === true) {
        prices.push([k, v.price]);
      }
    });
    allChosenServices.push([name, ...prices.map(([k, v]) => `${k} ${v}`)]);
  });
  
  return allChosenServices;
};
