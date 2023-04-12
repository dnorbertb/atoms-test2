import type { ILineItem } from '../../types/ILineItem';

export interface IPaymentIntentionEventArgs {
  items: ILineItem[];
  total: number;
}
