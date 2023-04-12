<template>
  <div class="cart flex flex-col gap-[20px]">
    <h2 class="text-d-xs font-medium">{{ i18n.cart.summary }}</h2>
    <v-compact-cart :items="items" extra-classes="p-[12px]" size="md" />
    <h2 class="text-d-xs font-bold flex justify-between">
      <span>{{ i18n.cart.due }}</span>
      <span>{{ currency(total(items), Currency.USD) }}</span>
    </h2>
    <v-button
      :text="i18n.cart.payNow"
      mode="text"
      variant="primary"
      size="56"
      justify="center"
      @click="emit('pay', paymentEventArgs)"
    />
    <div class="safety-memo text-gray-700 flex flex-col gap-xs items-center">
      <p class="flex gap-xs">
        <safety-lock-icon class="fill-current" />
        <span>{{ i18n.cart.confidence }}</span>
      </p>
      <p class="text-center">
        {{ i18n.cart.secure }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // region Components
  import type { ILineItem } from '@/types/ILineItem';
  import { Currency } from '@/types/ILineItem';
  import { inject } from 'vue';
  import VCompactCart from '@/components/VCart/VCompactCart';
  import { currency, total } from '@/utils/financial';
  import VButton from '@/components/VButton';
  import type { IPaymentIntentionEventArgs } from '@/components/VCart/component.types';
  import SafetyLockIcon from '@/assets/icons/SafetyLockIcon.svg';

  // endregion

  interface ICartProps {
    items: ILineItem[];
  }

  const props = defineProps<ICartProps>();
  const i18n = inject('i18n');
  const emit = defineEmits<{
    (e: 'pay', args: IPaymentIntentionEventArgs): void;
  }>();

  const paymentEventArgs: IPaymentIntentionEventArgs = {
    items: props.items,
    total: total(props.items),
  };
</script>
