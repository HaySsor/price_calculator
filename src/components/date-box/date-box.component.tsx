import {ChangeEvent, useContext} from 'react';
import styled from './date-box.module.scss';

import {Checkbox} from '../checkbox/checkbox.component';
import {UserChoiceContext} from '../../context/UserChoiceContext';

export const DateBox = () => {
  const {years, handleChoiceYear} = useContext(UserChoiceContext);

  const handleCheckboxChecked = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const checked = event.target.checked;
    handleChoiceYear(name, checked);
  };
  return (
    <>
      <div className={styled.dateBox}>
        <h2>Wybierz Lata</h2>
        <div className={styled.yearBox}>
          {years.map((year) => {
            return (
              <Checkbox
                VName={year.year}
                handleCheckboxChecked={handleCheckboxChecked}
                key={year.year}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
