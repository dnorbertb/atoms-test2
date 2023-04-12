<template>
  <button
    :class="[
      'button flex gap-xs items-center cursor-pointer rounded-sm',
      'bg-white border border-gray-200 shadow-sm hover:bg-gray-100 active:shadow-button-default',
      'text-gray-900 focus-visible:shadow-button-default focus-visible:outline-none disabled:text-gray-200',
      'disabled:bg-white disabled:cursor-not-allowed',
      buttonSizing,
      { 'flex-row-reverse': iconPosition === 'right' },
    ]"
  >
    <span v-if="mode === 'icon' || mode === 'both'" class="w-[20px] h-[20px]">
      <component :is="icon" class="w-[20px] h-[20px] fill-current text-inherit"></component>
    </span>
    <span v-if="mode === 'text' || mode === 'both'" class="text-lg font-semibold">{{ text }}</span>
  </button>
</template>

<script lang="ts" setup>
  // region Utilities & Types
  import type { Component } from 'vue';
  // endregion
  // region Framework
  import { computed } from 'vue';

  // endregion

  export interface ISecondaryButtonProps {
    text?: string;
    icon?: Component;
    mode?: 'icon' | 'text' | 'both';
    iconPosition?: 'left' | 'right';

    size?: '32' | '40' | '48' | '56' | '64';
  }

  const props = withDefaults(defineProps<ISecondaryButtonProps>(), {
    mode: 'text',
    iconPosition: 'left',
    size: '40',
  });

  const buttonSizing = computed(() => {
    if (props.mode === 'both') {
      if (props.iconPosition === 'left') {
        return `button-size-${props.size} button-icon button-icon-left-size-${props.size}`;
      }

      return `button-size-${props.size} button-icon button-icon-right-size-${props.size}`;
    }

    return `button-size-${props.size}`;
  });
</script>
