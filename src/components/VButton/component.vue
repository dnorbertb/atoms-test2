<template>
  <component :is="variantComponent" v-bind="props"> </component>
</template>

<script lang="ts" setup>
  // region Utilities & Types
  import type { Component } from 'vue';
  // endregion
  // region Framework
  import { defineAsyncComponent } from 'vue';
  import type { IPrimaryButtonProps } from './Primary/component.vue';
  import type { ISecondaryButtonProps } from './Secondary/component.vue';
  import type { ITertiaryButtonProps } from './Tertiary/component.vue';
  import type { IQuaternaryButtonProps } from './Quaternary/component.vue';
  import { toPascalCase } from '../../utils/string';

  // endregion

  interface IButtonProps
    extends IPrimaryButtonProps,
      ISecondaryButtonProps,
      ITertiaryButtonProps,
      IQuaternaryButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  }

  const props = withDefaults(defineProps<IButtonProps>(), {
    variant: 'primary',
  });

  const variantComponent = defineAsyncComponent(() => import(`./${toPascalCase(props.variant)}/index.ts`));
</script>

<style lang="postcss" scoped>
  .button {
    @apply justify-center;
    /** paddings for button with no icon */
    &-size-32 {
      @apply py-[3px] px-[11px];
    }
    &-size-40 {
      @apply py-[7px] px-[15px];
    }
    &-size-48 {
      @apply py-[11px] px-[19px];
    }
    &-size-56 {
      @apply py-[13px] px-[23px];
    }
    &-size-64 {
      @apply py-[15px] px-[31px];
    }

    &-icon {
      @apply justify-between;
      /** paddings for button with icon on the left side */
      &-left {
        &-size-32 {
          @apply pl-[7px] pr-[11px];
        }
        &-size-40 {
          @apply pl-[11px] pr-[15px];
        }
        &-size-48 {
          @apply pl-[15px] pr-[19px];
        }
        &-size-56 {
          @apply pl-[19px] pr-[23px];
        }
        &-size-64 {
          @apply pl-[27px] pr-[31px];
        }
      }
      /** paddings for button with icon on the ride side */
      &-right {
        &-size-32 {
          @apply pl-[11px] pr-[7px];
        }
        &-size-40 {
          @apply pl-[15px] pr-[11px];
        }
        &-size-48 {
          @apply pl-[19px] pr-[15px];
        }
        &-size-56 {
          @apply pl-[23px] pr-[19px];
        }
        &-size-64 {
          @apply pl-[31px] pr-[27px];
        }
      }
    }
  }
</style>
