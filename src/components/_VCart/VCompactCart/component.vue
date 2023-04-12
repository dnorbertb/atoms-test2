<template>
  <div
    class="cart cart-variant-compact rounded-sm bg-white flex gap-[12px] flex-col"
    :class="[shadow && `shadow-${shadow}`, extraClasses]"
  >
    <template v-for="(item, index) in items" :key="item.name + random()">
      <div class="flex justify-between gap-md">
        <p :class="`text-${size}`" class="font-medium text-gray-800">{{ item.name }}</p>
        <p :class="`text-${size}`" class="font-medium text-gray-800">{{ currency(item.value, Currency.USD) }}</p>
      </div>
      <div v-if="index !== items.length - 1" class="w-full bg-gray-100 h-[1px]"></div>
    </template>
  </div>
</template>

<script lang="ts" setup>
  // region Libraries & Utilities
  import type { ILineItem } from '@/types/ILineItem';
  import { Currency } from '@/types/ILineItem';
  import { currency } from '@/utils/financial';
  import { random } from '@/utils/math';
  // endregion
  // region Components
  // endregion

  interface ICompactCartProps {
    items: ILineItem[];
    shadow?: string;
    extraClasses?: string;
    size: 'xs' | 'md';
  }

  withDefaults(defineProps<ICompactCartProps>(), {
    extraClasses: '',
    size: 'xs',
  });
</script>
