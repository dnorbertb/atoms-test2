<template>
  <div class="grid grid-cols-auto [--col-min:360px] gap-[24px] w-full">
    <label
      v-for="option in options"
      :key="option.id"
      class="cursor-pointer flex gap-[12px] p-[20px] border border-gray-400 shadow-sm rounded-sm"
    >
      <input
        type="radio"
        :name="name"
        :value="option.id"
        :checked="modelValue === option.id"
        class="pointer-events-none appearance-none bg-white grid place-content-center text-inherit margin-[0] w-[1.25em] h-[1.25em] rounded-half cursor-pointer border before:w-[0.625em] before:h-[0.625em] before:rounded-half before:bg-primary-700 before:hidden checked:before:block checked:border-primary-700"
        :class="[{ 'border-gray-200': !vuelidate?.$error, 'border-error-700': vuelidate?.$error }]"
        @input="(evt) => emit('update:modelValue', evt.target.value)"
      />
      <v-headline :heading-text="option?.text" heading-tag="h4" class="gap-[4px]" heading-class="text-lg font-semibold">
        <p v-if="option?.meta?.content" class="text-sm text-gray-700">{{ option?.meta?.content }}</p>
      </v-headline>
    </label>
  </div>
  <v-validation-alert :vuelidate="vuelidate" />
</template>

<script lang="ts" setup>
  // region Utilities & Types
  import type { IOptions } from '../../types/IOptions';
  import type { Validation } from '@vuelidate/core';
  // endregion
  // region Components
  import VHeadline from '../VHeadline';
  import VValidationAlert from '../VValidationAlert';

  // endregion

  interface IRadioButtonGroupProps {
    modelValue?: string;
    options: IOptions[];
    name: string;
    vuelidate?: Validation;
  }
  defineProps<IRadioButtonGroupProps>();

  const emit = defineEmits(['update:modelValue']);
</script>

<style lang="postcss" scoped>
  label:focus-visible {
    @apply outline-none;
  }

  label:has(:is(input[type='radio']:focus-visible)) {
    @apply outline outline-8 outline-gray-100;
  }

  label:has(:is(input[type='radio']:checked:focus-visible)) {
    @apply outline outline-8 outline-primary-50;
  }

  label:hover {
    @apply shadow-[0px_0px_0px_8px] shadow-gray-100;
  }

  input[type='radio']:focus-visible {
    @apply outline-none;
  }

  label:has(input[type='radio']:checked) {
    @apply bg-primary-25 border-primary-700 border-[2px] p-[19px];
  }

  label:has(input[type='radio']:checked):hover {
    @apply shadow-[0px_0px_0px_8px] shadow-primary-50;
  }
</style>
