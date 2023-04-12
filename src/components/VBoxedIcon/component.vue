<template>
  <component :is="variantComponent" class="w-fit h-fit flex items-center content-center" :icon="icon"></component>
</template>

<script lang="ts" setup>
  // region Utilities & Types
  import { defineAsyncComponent } from 'vue';
  import { toPascalCase } from '@/utils/string';
  import type { IBoxedIconSquareProps } from '@/components/VBoxedIcon/Square/component.vue';
  import type { IBoxedIconRoundProps } from '@/components/VBoxedIcon/Round/component.vue';

  // endregion
  interface IBoxedIconProps extends IBoxedIconSquareProps, IBoxedIconRoundProps {
    variant?: 'square' | 'round';
  }

  const props = withDefaults(defineProps<IBoxedIconProps>(), {
    variant: 'square',
  });

  const variantComponent = defineAsyncComponent(() => import(`./${toPascalCase(props.variant)}/index.ts`));
</script>
