/* eslint-disable @typescript-eslint/no-empty-function */
import {createContext, useEffect, useState} from 'react';
import type {PropsType} from '../types/ContextProviderType';
import type {ServiceType} from '../types/ServiceType';
import {INITIAL_STATE_SERVICE} from '../data/INITIAL_STATE-for-serviceContext';
import {INITIAL_STATE_YEAR} from '../data/INITIAL_STATE-for-year';
import {changePriceWhenChose} from '../helper/changePriceWhenChose';
import {changePriceWhenChangeYear} from '../helper/changePriceWhenChangeYear';
import {DataType} from '../types/DateType';

export const UserChoiceContext = createContext({
  years: [] as DataType[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleChoiceYear: (_name: string, _checked: boolean) => {},
  service: [] as ServiceType[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleChoseService: (_name?: string, _chosen?: boolean) => {},
});

export const UserChoiceProvider = ({children}: PropsType) => {
  const [service, setService] = useState(INITIAL_STATE_SERVICE);
  const [years, setYears] = useState(INITIAL_STATE_YEAR);

  useEffect(() => {
    handleChoseService();
  }, [years]);

  const handleChoseService = (name?: string, chosen?: boolean) => {
    const chosenYear = years.filter((item) => item.choice === true);
    setService((prev) => {
      const findService = prev.find((ser) => ser.name === name);
      if (findService) {
        changePriceWhenChose(prev, findService, chosenYear, chosen);
      } else {
        changePriceWhenChangeYear(prev, chosenYear, years);
      }
      const findTelevision = service.find((item) => item.name === 'Telewizja');
      if (!findTelevision?.chosen) {
        const findService = prev.find((ser) => ser.name === 'Dekoder 4K');
        changePriceWhenChose(prev, findService, chosenYear, false);
      }
      return [...prev];
    });
  };

  const handleChoiceYear = (name: string, checked: boolean) => {
    setYears((prev) => {
      const findYearByName = prev.find((year) => year.year === name);
      if (findYearByName) {
        const index = prev.indexOf(findYearByName);
        const newChosenPriceObject = {...findYearByName, choice: checked};
        prev[index] = newChosenPriceObject;
        return [...prev];
      }
      return [...prev];
    });
  };

  const value = {service, handleChoseService, years, handleChoiceYear};
  return (
    <UserChoiceContext.Provider value={value}>
      {children}
    </UserChoiceContext.Provider>
  );
};
