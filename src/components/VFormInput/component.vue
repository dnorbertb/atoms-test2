<script lang="ts" setup>
  import { FormTypeToComponent } from '../VFormInput';
  import { ref } from 'vue';
  import type { IOptions } from '../../types/IOptions';

  export interface IFormInputProps {
    type: 'text' | 'select' | 'group' | 'upload' | 'checkbox' | 'radio-group' | 'textarea';
    options?: Array<IOptions> | Partial<IOptions> | IOptions;
    name?: string;
    vuelidate?: any;
    label?: string;
  }

  const props = withDefaults(defineProps<IFormInputProps>(), {
    type: 'text',
  });

  const component = ref(null);
  const componentType =
    FormTypeToComponent[
      props.type
        .split('-')
        .map((text: string) => text.at(0)?.toUpperCase() + text.substring(1))
        .join('')
    ];

  defineExpose({
    component: () => component,
  });
</script>
<template>
  <component :is="componentType" ref="component" :vuelidate="vuelidate" :options="options" :name="name" :label="label">
    <template v-for="(index, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </component>
</template>


