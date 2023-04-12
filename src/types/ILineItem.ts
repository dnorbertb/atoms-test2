export interface ILineItem {
  name: string;
  value: number;
}

export enum Currency {
  'USD' = '$',
}

export enum CurrencySymbolPosition {
  USD = 'left',
}
