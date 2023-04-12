import { Currency, type ILineItem } from '../types/ILineItem';

export function currency(amount: string | number, currency: Currency) {
  switch (decideSymbolPosition(currency)) {
    case 'left':
      return currency + amount;
    case 'right':
      return amount + currency;
  }
}

function decideSymbolPosition(currency: Currency): 'left' | 'right' {
  switch (currency) {
    case Currency.USD:
      return 'left';
  }
}

export function total(lineItems: ILineItem[]) {
  return lineItems.map((item) => item.value).reduce((partialSum, item) => partialSum + item, 0);
}
