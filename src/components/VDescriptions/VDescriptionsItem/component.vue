<template>
  <div class="flex flex-1 flex-col gap-md border border-gray-200 p-lg shadow-xs rounded-md">
    <div class="flex gap-[14px] items-center">
      <component :is="icon" class="w-lg h-lg fill-primary-700"></component>
      <h3 class="text-lg font-semibold text-black">{{ heading }}</h3>
    </div>
    <div class="ml-[38px]">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
  // region Utilities & Types
  import type { Component } from 'vue';

  // endregion
  interface IDescriptionsItemProps {
    icon: Component;
    heading: string;
  }
  defineProps<IDescriptionsItemProps>();
</script>
