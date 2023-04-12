<template>
  <div class="flex flex-row gap-xs md:gap-xl items-center" :class="extraClass">
    <p v-if="type === 'linear'" class="text-sm font-semibold text-gray-500 whitespace-nowrap">
      {{ i18n.progress.label }}&nbsp;{{ percentage }}%
    </p>
    <div v-if="type === 'linear'" class="relative w-full bg-gray-100 rounded-sm h-[4px]">
      <div
        class="rounded-sm h-[4px] bg-primary-700 absolute transition-all ease-in-out duration-300"
        :style="{ width: `${percentage}%` }"
      ></div>
    </div>
    <div v-if="type === 'radial'">
      <div :class="`overflow-hidden rounded-full flex justify-center relative w-[${size * 2}px] h-[${size * 2}px]`">
        <svg :width="size * 2" :height="size * 2" :class="`rotate-[-90deg]`">
          <circle
            class="text-gray-300 stroke-gray-400"
            stroke-width="5"
            fill="transparent"
            :r="radius"
            :cx="size"
            :cy="size"
          />
          <circle
            class="text-blue-600 stroke-primary-700 transition-all ease-in-out duration-300"
            stroke-width="5"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="circumference - (percentage / 100) * circumference"
            stroke-linecap="round"
            fill="transparent"
            :r="radius"
            :cx="size"
            :cy="size"
          />
        </svg>
        <span class="absolute block text-xl text-black text-xl top-[calc(50%-14px)] z-10">{{ percentage }}%</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { inject } from 'vue';
  import type { II18n } from '@/types/II18n';

  const i18n = inject<II18n>('i18n');

  interface IProgressBarProps {
    type: 'radial' | 'linear';
    percentage: string | number;
    radius?: number;
    extraClass?: string;
  }

  const props = withDefaults(defineProps<IProgressBarProps>(), {
    percentage: 0,
    radius: 30,
  });

  const circumference = props.radius * 2 * Math.PI;
  const size = props.radius + 10;
</script>
