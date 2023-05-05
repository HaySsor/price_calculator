import {useState} from 'react';
import styled from './sum-box.module.scss';

import {DisplayText} from '../../helper/DisplayText';

type PropsType = {
  sum: number | undefined;
};

export const SumBox = ({sum}: PropsType) => {
  const [textOfSum, setTextOfSum] = useState<string>('');

  const handleSumButton = async () => {
    setTextOfSum('Hmm zobaczmy co tam mamy');
    let text = await DisplayText<string>('Liczymy dla ciebie najlepszą ofertę');
    setTextOfSum(text);
    text = await DisplayText<string>('jeszcze chwilkę to potrwa');
    setTextOfSum(text);
    if (sum) {
      text = await DisplayText<string>(
        'Nasza najlepsza oferta dla ciebie to ' + sum.toString() + 'zł' + '☺️'
      );
      setTextOfSum(text);
    }
  };

  return (
    <div className={styled.sumBox}>
      {sum && <button onClick={handleSumButton}>Obicz ofertę</button>}
      <h3 className={styled.infoText}>{textOfSum}</h3>
    </div>
  );
};
