import {useContext, useEffect, useState} from 'react';
import {finedAllChosenService} from '../../helper/finedAllChosenService.ts';
import styled from './summary-box.module.scss';
import {UserChoiceContext} from '../../context/UserChoiceContext.tsx';
import {SummaryItem} from '../summary-item/summary-item.component.tsx';
import {useCalculate} from '../../hooks/useCalculate.tsx';
import {SumBox} from '../sum-box/sum-box.component.tsx';

export const SummaryBox = () => {
  const [chosenService, setChosenService] = useState<
    (string | string[])[] | []
  >([]);
  const {service} = useContext(UserChoiceContext);
  const sum = useCalculate(chosenService);

  useEffect(() => {
    const x = finedAllChosenService(service);
    setChosenService(x);
  }, [service]);

  return (
    <div className={styled.summary}>
      <div className={styled.summaryBox}>
        <h2>Podsumowanie</h2>
        {chosenService.map((item) => {
          return item && <SummaryItem item={item} key={item[0]} />;
        })}
      </div>
      <SumBox sum={sum} />
    </div>
  );
};
