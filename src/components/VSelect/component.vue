<template>
  <div class="input">
    <label class="gap-0.5 mb-0 w-full flex flex-col">
      <span class="text-lg font-inter font-medium text-sm self-start block mb-xs">{{ label }}</span>
      <span
        class="block relative after:block after:w-[20px] after:aspect-[1] after:bg-select-icon after:absolute after:pointer-events-none after:right-sm after:bottom-[10px] after:bg-no-repeat after:bg-cover"
      >
        <select
          :value="modelValue"
          :class="{
            'border-error-800': vuelidate?.$error,
            'border-gray-200': !vuelidate?.$error,
            ...options?.meta?.inputClass,
          }"
          :name="name"
          class="font-inter px-md py-sm rounded-sm text-black border-solid border appearance-none w-full focus:border-black outline-none hover:shadow-input"
          @blur="handleAndEmit(emit, 'blur', () => vuelidate?.$touch?.(), null)"
          @focus="handleAndEmit(emit, 'focus', () => vuelidate?.$reset?.(), null)"
          @input="(evt) => handleAndEmit(emit, 'input', () => emit('update:modelValue', evt.target.value), evt)"
        >
          <option v-for="option in options" :key="option.id" :value="option.id">
            {{ option.text }}
          </option>
        </select>
      </span>
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
  // region Framework
  import { inject } from 'vue';
  // endregion
  // region Utilities & Types
  import type { IOptions } from '../../types/IOptions';
  import { handleAndEmit } from '../../utils/emitter';
  import type { Validation } from '@vuelidate/core';
  // endregion

  const i18n = inject('i18n');

  interface IInputProps {
    modelValue?: string;
    options?: IOptions;
    vuelidate?: Validation;
    label?: string;
    name?: string;
  }

  defineProps<IInputProps>();
  const emit = defineEmits(['update:modelValue', 'input', 'blur', 'focus']);
</script>
