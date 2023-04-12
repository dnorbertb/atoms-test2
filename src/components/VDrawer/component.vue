<template>
  <teleport v-if="isDrawerOpen" to="#modals">
    <transition name="drawer">
      <div
        class="drawer-bg fixed top-[0] left-[0] w-full h-full before:bg-gray-500 before:opacity-60 backdrop-blur-[2px] before:w-full before:h-full before:absolute z-[9998]"
      >
        <div
          ref="drawer"
          class="drawer absolute right-[0] top-[0] min-h-[100svh] w-full max-w-[412px] shadow-3xl bg-white z-[9999] pt-[12px] pr-[12px] pb-xl pl-[12px] sm:pt-md sm:pr-md sm:pb-xl sm:pl-xl"
        >
          <div class="flex flex-col gap-xs items-stretch pt-2xl">
            <slot></slot>
          </div>
          <button
            class="bg-gray-200 p-[9px] rounded-half absolute top-[12px] right-[12px] sm:top-md sm:right-md"
            @click.prevent="hide"
          >
            <close-icon />
          </button>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
  // region Framework
  import { ref, watch } from 'vue';
  // endregion
  // region Libs
  import { onClickOutside, useMagicKeys } from '@vueuse/core';
  // endregion
  // region Components
  // import CloseIcon from '../../assets/icons/CloseIcon.svg';
  // endregion

  const isDrawerOpen = ref(false);

  const show = () => {
    isDrawerOpen.value = true;
  };
  const hide = () => {
    isDrawerOpen.value = false;
  };

  const drawer = ref(null);
  onClickOutside(drawer, () => {
    hide();
  });

  const { escape } = useMagicKeys();
  watch(escape, (v) => {
    if (v) {
      hide();
    }
  });

  defineExpose({
    show,
    hide,
  });
</script>

<style></style>
