<template>
  <label class="group flex gap-sm text-lg">
    <input
      :checked="modelValue"
      :class="['checkbox', { 'border-error-700': vuelidate?.$error, 'border-gray-200': !vuelidate?.$error }]"
      type="checkbox"
      @input="(evt) => handleAndEmit(emit, 'input', () => emit('update:modelValue', evt.target.checked), evt)"
      @blur="handleAndEmit(emit, 'blur', () => vuelidate?.$touch?.(), null)"
      @focus="handleAndEmit(emit, 'focus', () => vuelidate?.$reset?.(), null)"
    />
    <span :class="{ 'text-error-700': vuelidate?.$error }">{{ label }}</span>
  </label>
</template>

<script lang="ts" setup>
  // region Utilities & Types
  import { handleAndEmit } from '@/utils/emitter';
  import type { Validation } from '@vuelidate/core';

  // endregion

  interface ICheckbox {
    modelValue?: boolean;
    label?: string;
    vuelidate?: Validation;
  }

  defineProps<ICheckbox>();

  const emit = defineEmits(['update:modelValue', 'input', 'blur', 'focus']);
</script>

<style lang="postcss" scoped>
  .checkbox {
    @apply appearance-none
    grid
    place-content-center
    text-inherit
    bg-white
    w-[1.25em]
    h-[1.25em]
    relative
    border
    rounded-xs
    cursor-pointer
    transform
    translate-y-[0.625px]
    after:hidden
    after:absolute
    after:w-[1.25em]
    after:h-[1.25em]
    after:rounded-xs
    after:bg-checkbox-icon
    after:bg-[1em]
    after:bg-no-repeat
    after:bg-center
    after:bg-cover
    after:left-[-1px]
    after:top-[-1px]
    checked:after:block
    checked:border-primary-700
    checked:bg-primary-700;
  }
</style>
