import type CardElement from '@adyen/adyen-web/dist/types/components/Card';

export interface IAdyenConfig {
  locale: string;
  clientKey: string;
  environment: 'live' | 'live-aus' | 'live-us' | 'live-apse' | 'test';
  onPaymentCompleted?: (result: IAdyenResult, component?: unknown) => void;
  onError?: (error: IAdyenError, component?: unknown) => void;
  session?: IAdyenSession;
  paymentMethodsConfiguration: IPaymentMethodsConfiguration;
  [key: string]: any;
}

export interface IAdyenSession {
  id: string;
  sessionData: string;
}

export interface IAdyenError {
  name: string;
  message: string;
  stack: unknown;
}

export interface IPaymentMethodsConfiguration {
  card: {
    hasHolderName: boolean;
    holderNameRequired: boolean;
    billingAddressRequired: boolean;
    data?: {
      [key: string]: any;
    };
  };
  [key: string]: any;
}

export enum CountryCode {
  US = 'US',
}

export interface IAdyenResult {
  resultCode: 'Authorized' | 'Refused' | 'Captured' | string;
  sessionData: string;
  sessionResult: string;
}

export interface IErrorEventArgs {
  error: IAdyenError;
}

export interface IPaymentCompleteEventArgs {
  result: IAdyenResult;
}

export interface IMountedEventArgs {
  component: CardElement | object;
}
