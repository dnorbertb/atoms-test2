<template>
  <div class="accordion-item bg-gray-50 rounded-lg overflow-hidden" :class="active && 'pb-[20px]'">
    <div
      class="flex items-center justify-between p-[20px] gap-xs text-lg text-black font-bold cursor-pointer"
      @click="() => handleAndEmit(emit, 'toggle', () => handleToggle(), { id: id })"
    >
      <span><slot name="trigger"></slot></span
      ><span class="p-[12px] w-[40px]" :class="active && 'scale-[-1]'"><arrow-down /></span>
    </div>
    <transition name="toggle" @enter="onEnterExpand" @after-enter="onAfterEnterExpand" @leave="onLeaveExpand">
      <div v-show="active" class="text-sm text-gray-700 px-[20px] duration-150">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
  import { computed, getCurrentInstance } from 'vue';
  import { handleAndEmit } from '@/utils/emitter';
  import ArrowDown from '@/assets/icons/ArrowDown.svg';
  import { clamp } from '@/utils/math';

  // region Toggle Animation Functions - using transition element
  function onEnterExpand(el: HTMLDivElement) {
    el.style.height = 'auto';

    const height = getComputedStyle(el).height;
    el.style.height = '0';

    getComputedStyle(el).height;
    requestAnimationFrame(() => {
      el.style.height = height;
    });
  }
  function onAfterEnterExpand(el: HTMLDivElement) {
    el.style.height = 'auto';
  }
  function onLeaveExpand(el: HTMLDivElement) {
    const height = getComputedStyle(el).height;

    el.style.height = height;
    getComputedStyle(el).height;

    requestAnimationFrame(() => {
      el.style.height = '0';
    });
  }
  // endregion

  const instance = getCurrentInstance();

  interface IAccordionItemProps {
    activeId?: string | number;
    active?: boolean;
  }

  const id = 'accordion-' + clamp(Math.random() * 1000, 0, 9999);
  const props = withDefaults(defineProps<IAccordionItemProps>(), {
    active: false,
  });

  const active = computed(() => {
    if (props.activeId) {
      return id === props.activeId;
    }

    return props.active ?? false;
  });

  const emit = defineEmits<{
    (e: 'toggle', args: { id: string | number }): void;
  }>();

  const handleToggle = () => {
    if (instance?.parent) {
      instance.parent?.exposed?.setCurrent(id);
    }
  };

  defineExpose({
    id: () => id,
  });
</script>

<style lang="postcss">
  .accordion-item:has(:first-child:hover) {
    @apply hover:shadow-accordion;
  }
</style>
