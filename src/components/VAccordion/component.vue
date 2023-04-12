<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  const container = ref<HTMLElement | null>(null);
  const current = ref('');
  const count = ref(0);

  onMounted(() => {
    count.value = container.value?.children.length ?? 0;
  });

  const changeCurrent = (id: string) => {
    current.value = id;
    emit('change', { current: current.value });
  };

  defineExpose({
    count: () => count.value,
    setCurrent: changeCurrent,
  });

  const emit = defineEmits(['change']);
</script>

<template>
  <div ref="container" class="flex flex-col gap-xs w-full max-w-[770px]">
    <slot :active-id="current"></slot>
  </div>
</template>


