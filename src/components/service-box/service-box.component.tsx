import {ChangeEvent, useContext, useEffect, useState} from 'react';
import styled from './service-box.module.scss';

import {Checkbox} from '../checkbox/checkbox.component';
import {UserChoiceContext} from '../../context/UserChoiceContext';

export const ServiceBox = () => {
  const [disable, setDisable] = useState(false);
  const {service, handleChoseService, years} = useContext(UserChoiceContext);

  const yearSelect = years.some((year) => year.choice === true);

  const handleCheckboxChecked = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const checked = event.target.checked;
    handleChoseService(name, checked);
  };

  useEffect(() => {
    const findTelevision = service.find((item) => item.name === 'Telewizja');
    if (!findTelevision?.chosen) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [service]);

  return (
    <>
      {yearSelect ? (
        <div className={styled.serviceBox}>
          {service.map((ser) => {
            return (
              <Checkbox
                VName={ser.name}
                handleCheckboxChecked={handleCheckboxChecked}
                key={ser.name}
                disable={disable}
                value={ser.chosen}
              />
            );
          })}
        </div>
      ) : (
        <span className={styled.info}>Wybierz wpierw rok</span>
      )}
    </>
  );
};
