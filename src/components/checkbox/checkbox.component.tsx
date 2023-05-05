import {ChangeEvent} from 'react';
import styled from './checkbox.module.scss';

type propsType = {
  VName: string;
  handleCheckboxChecked(event: ChangeEvent<HTMLInputElement>): void;
  disable?: boolean;
  value?: boolean;
};

export const Checkbox = ({
  VName,
  handleCheckboxChecked,
  disable,
  value,
}: propsType) => {
  if (VName === 'Dekoder 4K') {
    return (
      <div className={styled.inputBox}>
        <input
          type='checkbox'
          onChange={handleCheckboxChecked}
          name={VName}
          id={VName}
          disabled={disable}
          checked={value}
        />
        <label htmlFor={VName}>{VName}</label>
      </div>
    );
  }
  return (
    <div className={styled.inputBox}>
      <input
        type='checkbox'
        onChange={handleCheckboxChecked}
        name={VName}
        id={VName}
      />
      <label htmlFor={VName}>{VName}</label>
    </div>
  );
};
