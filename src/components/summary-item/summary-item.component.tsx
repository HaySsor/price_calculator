import styled from './summary-item.module.scss';

type PropsType = {
  item: string | string[];
};

export const SummaryItem = ({item}: PropsType) => {
  const name = item[0];
  let prices = item.slice(1);
  const years: string[] = [];

  if (Array.isArray(prices)) {
    prices = prices
      .join(' ')
      .split(' ')
      .filter((item, index) => {
        if (index % 2 == 1) {
          return item;
        } else {
          years.push(item);
        }
      });
  }

  return (
    <div className={styled.summary} key={item[0]}>
      <div className={styled.priceBox}>
        <h3 className={styled.name}>{name} :</h3>
        {Array.isArray(prices) &&
          prices.map((price, index) => {
            return (
              <span
                className={`${styled.price} ${styled['year' + years[index]]}`}
                key={Math.random()}>
                {price}zł za rok {years[index]}
              </span>
            );
          })}
      </div>
    </div>
  );
};
