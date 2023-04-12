<template>
  <button
    :class="[
      'button flex gap-xs items-center cursor-pointer rounded-sm',
      'bg-primary-700 hover:bg-primary-800 active:shadow-button-primary focus-visible:shadow-button-primary',
      'focus-visible:outline-none text-white border border-[1px] disabled:text-white disabled:bg-primary-200',
      'disabled:cursor-not-allowed',
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

  export interface IPrimaryButtonProps {
    text?: string;
    icon?: Component;
    mode?: 'icon' | 'text' | 'both';
    iconPosition?: 'left' | 'right';

    size?: '32' | '40' | '48' | '56' | '64';
  }

  const props = withDefaults(defineProps<IPrimaryButtonProps>(), {
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
