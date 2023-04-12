<template>
  <a
    :href="config.logo.click"
    class="logo flex justify-center items-center w-full max-w-5xl aspect-[1] rounded-[14px] shadow-xl p-sm bg-white"
    target="_blank"
  >
    <img :src="config.logo.src" class="max-w-full w-full" alt="Logo" />
  </a>
</template>

<script lang="ts" setup>
  import { inject } from 'vue';

  const config = inject<any>('config');
</script>
