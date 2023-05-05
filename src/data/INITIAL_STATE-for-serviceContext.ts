import type {ServiceType} from '../types/ServiceType';
export const INITIAL_STATE_SERVICE: ServiceType[] = [
  {
    name: 'Internet',
    prices: {
      '2023': {
        price: '39',
        chosen: false,
      },
      '2024': {
        price: '49',
        chosen: false,
      },
      '2025': {
        price: '59',
        chosen: false,
      },
    },
    chosen: false,
  },
  {
    name: 'Telewizja',
    prices: {
      '2023': {
        price: '49',
        chosen: false,
      },
      '2024': {
        price: '49',
        chosen: false,
      },
      '2025': {
        price: '59',
        chosen: false,
      },
    },
    chosen: false,
  },
  {
    name: 'Abonament telefoniczny',
    prices: {
      '2023': {
        price: '29',
        chosen: false,
      },
      '2024': {
        price: '29',
        chosen: false,
      },
      '2025': {
        price: '29',
        chosen: false,
      },
    },
    chosen: false,
  },
  {
    name: 'Dekoder 4K',
    prices: {
      '2023': {
        price: '29',
        chosen: false,
      },
      '2024': {
        price: '29',
        chosen: false,
      },
      '2025': {
        price: '29',
        chosen: false,
      },
    },
    chosen: false,
  },
];
