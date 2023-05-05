import styled from './app-window.module.scss';

import {DateBox} from '../date-box/date-box.component';
import {ServiceBox} from '../service-box/service-box.component';
import {SummaryBox} from '../summary-box/summary-box.component';

export const AppWindow = () => {
  return (
    <div className={styled.appWindow}>
      <div className={styled.checkboxContainer}>
        <DateBox />
        <ServiceBox />
      </div>
      <div className={styled.summaryBox}>
        <SummaryBox />
      </div>
    </div>
  );
};
