export type ServiceType = {
  name: string;
  prices: yearsOnPrice;
  chosen: boolean;
};

type yearsOnPrice = {
  [key: string]: ChosenPrice;
};

type ChosenPrice = {
  price: string;
  chosen: boolean;
};
