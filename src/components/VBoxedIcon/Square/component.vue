<template>
  <div class="border border-gray-200 rounded-md p-[13px]">
    <component :is="icon" class="w-[20px] h-[20px] fill-primary-700"></component>
  </div>
</template>

<script lang="ts" setup>
  // region Utilities & Types
  import type { Component } from 'vue';

  // endregion
  export interface IBoxedIconSquareProps {
    icon: Component;
  }

  defineProps<IBoxedIconSquareProps>();
</script>
