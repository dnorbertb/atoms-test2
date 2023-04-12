<template>
  <div class="flex flex-1 flex-col gap-md">
    <div class="flex gap-sm items-center">
      <div
        class="transform skew-[15deg] bg-primary-700 border border-none rounded-tl-[10px] rounded-br-[10px] px-[13px]"
      >
        <span class="text-sm text-white font-medium">{{ indicatorValue }}</span>
      </div>
      <h3 class="text-xl font-semibold text-black">{{ headingText }}</h3>
    </div>
    <div class="flex flex-1 gap-[12px]">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
  interface ICountedGroupItemProps {
    headingText: string;
    indicatorValue: number | string;
  }

  defineProps<ICountedGroupItemProps>();
</script>
