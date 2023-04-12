<template>
  <div
    v-if="vuelidate?.$error"
    class="rounded-sm bg-error-50 flex gap-sm text-error-700 text-md font-medium w-full p-[12px] mt-[24px]"
  >
    <error-icon />
    <div class="flex flex-col gap-xs">
      <span v-for="err in vuelidate?.$errors" :key="err?.$uid">{{ err?.$message }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // region Components
  // import ErrorIcon from '../../icons/ErrorIcon.svg';
  // endregion
  // region Utilities & Types
  import type { Validation } from '@vuelidate/core';

  // endregion

  interface IErrorAlertProps {
    vuelidate: Validation;
  }

  defineProps<IErrorAlertProps>();
</script>
