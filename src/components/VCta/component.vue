<template>
  <div class="flex flex-col p-md gap-[12px] rounded-xs bg-primary-25 w-full max-w-full text-black">
    <slot></slot>
    <a
      v-if="actionType === 'href'"
      :href="actionHrefUrl"
      class="inline-flex text-inherit font-semibold text-primary-700 w-fit"
      target="_blank"
      >{{ actionLabel }}</a
    >
    <button
      v-if="actionType === 'click'"
      class="inline-flex text-inherit font-semibold text-primary-700 w-fit cursor-pointer"
      tabindex="0"
      @keyup.enter="(evt) => emit('action', evt)"
      @click.prevent="(evt) => emit('action', evt)"
    >
      {{ actionLabel }}
    </button>
  </div>
</template>

<script lang="ts" setup>
  interface ICtaProps {
    actionLabel: string;
    actionType?: 'href' | 'click';
    actionHrefUrl?: string;
  }

  defineProps<ICtaProps>();

  const emit = defineEmits(['action']);
</script>

<style></style>
