<template>
  <div class="bg-primary-50 rounded-half p-[14px]">
    <component :is="icon" class="w-[20px] h-[20px] fill-primary-700"></component>
  </div>
</template>

<script lang="ts" setup>
  // region Utilities & Types
  import type { Component } from 'vue';

  // endregion
  export interface IBoxedIconRoundProps {
    icon: Component;
  }

  defineProps<IBoxedIconRoundProps>();
</script>
