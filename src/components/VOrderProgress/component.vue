<template>
  <div class="order-progress flex items-center justify-between">
    <div class="flex items-center gap-[12px] md:gap-[20px] w-full">
      <v-progress-bar extra-class="basis-3/4" type="linear" :percentage="percentage" />
      <div class="basis-1/4 flex gap-[16px]">
        <div class="w-[1px] bg-gray-100 hidden md:block"></div>
        <div class="flex gap-lg">
          <p class="text-sm text-gray-500">{{ i18n.cart.total }}</p>
          <v-tooltip
            :content="h(VCompactCart, { items: lineItems, size: 'xs' })"
            :trigger-element="() => trigger"
            interactive="true"
            placement="left"
            theme="light"
          >
            <p ref="trigger" class="w-[40px] md:w-[80px] text-right text-sm text-gray-500">
              {{ currency(total(lineItems), Currency.USD) }}
            </p>
          </v-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // region Framework
  import { h, inject, ref } from 'vue';
  // endregion
  // region Libraries & Utilities
  import type { ILineItem } from '@/types/ILineItem';
  import { Currency } from '@/types/ILineItem';
  import { currency, total } from '@/utils/financial';
  // endregion
  // region Components
  import VProgressBar from '@/components/VProgressBar';
  import VTooltip from '@/components/VTooltip';
  import VCompactCart from '@/components/VCart/VCompactCart';

  // endregion

  interface IVOrderProgressProps {
    percentage: number;
    lineItems: ILineItem[];
  }

  const trigger = ref();

  defineProps<IVOrderProgressProps>();
  const i18n = inject('i18n');
</script>
