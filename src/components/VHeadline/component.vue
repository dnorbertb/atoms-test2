<template>
  <div class="flex flex-1 flex-col">
    <component :is="headingTag" :class="headingClass">{{ headingText }}</component>
    <slot />
  </div>
</template>

<script lang="ts" setup>
  interface IHeadlineProps {
    headingClass?: string;
    headingTag?: string;
    headingText?: string;
  }

  withDefaults(defineProps<IHeadlineProps>(), {
    headingTag: 'h2',
    headingClass: 'text-d-xs font-semibold',
  });
</script>
