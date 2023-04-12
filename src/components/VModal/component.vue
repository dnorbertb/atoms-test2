<template>
  <div>
    <teleport v-if="isModalOpen" to="#modals">
      <div
        class="fixed top-[0] left-[0] flex justify-center items-center w-full h-full before:bg-gray-500 before:opacity-60 backdrop-blur-[2px] before:w-full before:h-full before:absolute z-[9998] px-md"
        @keyup.esc="hide"
      >
        <div
          ref="modal"
          :class="slots?.actions ? 'pt-4xl sm:pt-7xl' : 'py-4xl sm:py-7xl'"
          class="flex flex-col items-center gap-lg overflow-hidden justify-between w-full max-w-[640px] bg-white z-[9999] relative rounded-lg sm:rounded-xl shadow-2xl"
        >
          <button
            class="bg-gray-200 p-[9px] rounded-half absolute top-md right-md sm:top-lg sm:right-lg"
            @click.prevent="hide"
          >
            <close-icon />
          </button>
          <div class="flex flex-col w-full max-w-[530px] px-md sm:px-xl">
            <slot></slot>
          </div>
          <div v-if="slots?.actions" class="flex w-full px-3xl py-lg bg-gray-50">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts" setup>
  // region Framework
  import { ref, useSlots, watch } from 'vue';
  // endregion
  // region Libs
  import { onClickOutside, useMagicKeys } from '@vueuse/core';
  // endregion
  // region Components
  // import CloseIcon from '../../icons/CloseIcon.svg';
  // endregion

  const isModalOpen = ref(false);
  const slots = useSlots();

  const show = () => {
    isModalOpen.value = true;
  };
  const hide = () => {
    isModalOpen.value = false;
  };

  const modal = ref(null);
  onClickOutside(modal, () => {
    hide();
  });

  const { escape } = useMagicKeys();
  watch(escape, (escapePressed) => {
    if (escapePressed) {
      hide();
    }
  });

  defineExpose({
    show,
    hide,
  });
</script>

<style></style>
