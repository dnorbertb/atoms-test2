<template>
  <div class="input">
    <label class="gap-0.5 mb-0 w-full flex flex-col">
      <span class="text-sm font-inter font-medium text-sm self-start block mb-xs">{{ label }}</span>
      <input
        :class="{
          'border-error-800': vuelidate?.$error,
          'border-gray-200': !vuelidate?.$error,
          ...options?.meta?.inputClass,
        }"
        :placeholder="options?.meta?.placeholder"
        :value="modelValue"
        class="font-inter px-md py-sm placeholder:text-gray-500 rounded-sm border-solid border text-black focus:border-black outline-none hover:shadow-input"
        :type="options?.meta?.htmlType || 'text'"
        @blur="handleAndEmit(emit, 'blur', () => vuelidate?.$touch?.())"
        @focus="handleAndEmit(emit, 'focus', () => vuelidate?.$reset?.())"
        @input="(evt) => handleAndEmit(emit, 'input', () => emit('update:modelValue', evt.target.value), evt)"
        @keyup.enter="emit('enter')"
      />
    </label>
    <p
      v-if="vuelidate?.$error"
      class="rounded-b-sm bg-error-50 text-error-800 text-sm px-sm py-xs w-[calc(100%-16px)] mx-auto"
    >
      <span>{{ vuelidate?.$errors[0]?.$message }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
  // region Utilities & Types
  import { handleAndEmit } from '../../utils/emitter';
  import type { IOptions } from '../../types/IOptions';
  import type { Validation } from '@vuelidate/core';

  // endregion

  interface IInputProps {
    modelValue?: string | number;
    options?: IOptions;
    label?: string;
    vuelidate?: Validation;
  }

  defineProps<IInputProps>();
  const emit = defineEmits(['update:modelValue', 'blur', 'focus', 'enter', 'input']);
</script>
