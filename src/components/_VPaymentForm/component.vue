<template>
  <component :is="variantComponent" ref="component" v-bind="props"></component>
</template>

<script lang="ts" setup>
  // region Utilities & Types
  import { defineAsyncComponent, ref } from 'vue';
  import { toPascalCase } from '@/utils/string';
  import type { ICardPaymentProps } from '@/components/VPaymentForm/Card/component.vue';

  // endregion

  interface IPaymentFormProps extends ICardPaymentProps {
    variant?: 'card';
  }

  const props = withDefaults(defineProps<IPaymentFormProps>(), {
    variant: 'card',
  });

  const component = ref();
  const variantComponent = defineAsyncComponent(() => import(`./${toPascalCase(props.variant)}/index.ts`));

  defineExpose({
    triggerPayment: () => component.value.triggerPayment(),
  });
</script>
