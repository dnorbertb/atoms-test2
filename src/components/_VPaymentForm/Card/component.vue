<template>
  <div id="adyen-container" ref="container" class="payment-form"></div>
</template>

<script lang="ts" setup>
  // region Framework
  import { onBeforeMount, ref } from 'vue';
  // endregion
  // region Libraries & Utilities
  import type {
    IAdyenConfig,
    IAdyenError,
    IAdyenResult,
    IAdyenSession,
    IErrorEventArgs,
    IMountedEventArgs,
    IPaymentCompleteEventArgs,
  } from '@/components/VPaymentForm/component.types';
  import AdyenCheckout from '@adyen/adyen-web';
  import '@adyen/adyen-web/dist/adyen.css';
  import CardElement from '@adyen/adyen-web/dist/types/components/Card';

  // endregion
  // region Props
  export interface ICardPaymentProps {
    session: IAdyenSession;
    defaultCountry?: 'US' | string;
    adyenConfig?: object;
  }

  const props = withDefaults(defineProps<ICardPaymentProps>(), {
    defaultCountry: 'US',
  });
  // endregion
  // region Events
  const emit = defineEmits<{
    (e: 'error', args: IErrorEventArgs): void;
    (e: 'complete', args: IPaymentCompleteEventArgs): void;
    (e: 'submit'): void;
    (e: 'mounted', args: IMountedEventArgs): void;
    (e: 'valid'): void;
    (e: 'brand'): void;
    (e: 'binValue'): void;
  }>();
  // endregion
  // region Definitions
  const defaultAdyenConfiguration: IAdyenConfig = {
    clientKey: import.meta.env.VITE_ADYEN_CLIENT_KEY ?? '',
    environment: import.meta.env.VITE_ADYEN_ENVIRONMENT ?? 'test',
    locale: 'en_US',
    showPayButton: true,
    session: props.session,
    paymentMethodsConfiguration: {
      card: {
        hasHolderName: true,
        billingAddressRequired: true,
        holderNameRequired: true,
        data: {
          billingAddress: {
            country: props.defaultCountry,
          },
        },
      },
    },
    onPaymentCompleted: (result: IAdyenResult) => emit('complete', { result: result }),
    onError: (error: IAdyenError) => emit('error', { error: error }),
    onBinValue: () => emit('binValue'),
    onBrand: () => emit('brand'),
    onValid: () => emit('valid'),
    onSubmit: () => emit('submit'),
  };
  const container = ref();
  const checkoutComponent = ref<CardElement | null>(null);
  // endregion
  // region Lifecycle Events
  onBeforeMount(async () => {
    const adyenPaymentConfig: IAdyenConfig = Object.assign({}, defaultAdyenConfiguration, props.adyenConfig);

    const checkout = await AdyenCheckout(adyenPaymentConfig);
    checkoutComponent.value = checkout.create('card').mount('#adyen-container');
    emit('mounted', { component: checkoutComponent.value });
  });
  // endregion
  // region Expose & Component Methods
  const triggerPayment = () => {
    checkoutComponent.value?.submit();
  };

  defineExpose({
    triggerPayment: triggerPayment,
  });
  // endregion
</script>
<style lang="postcss">
  .adyen-checkout__button.adyen-checkout__button--pay {
    @apply bg-primary-700 hidden;
  }

  .adyen-checkout__button:hover {
    @apply bg-primary-800;
  }
</style>
