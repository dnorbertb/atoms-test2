<template>
  <button-group :options="buttonOptions" class="flex flex-1 justify-between" @click="handleClick" />
</template>

<script lang="ts" setup>
  // region Framework
  import { computed, inject } from 'vue';
  // endregion
  // region Utilities & Types
  import type { IButtonGroupClickEvent } from '../VButtonGroup/component.types';
  // endregion
  // region Components
  import VButtonGroup from '../VButtonGroup';
  import type { II18n } from '../../types/II18n';

  // endregion

  interface INavButtonsProps {
    backHidden?: boolean;
    nextHidden?: boolean;
    backDisabled?: boolean;
    nextDisabled?: boolean;
  }

  const props = withDefaults(defineProps<INavButtonsProps>(), {
    backHidden: false,
    nextHidden: false,
    backDisabled: false,
    nextDisabled: false,
  });

  const emit = defineEmits(['next', 'back']);

  const i18n = inject<II18n>('i18n');
  const buttonOptions = computed(() => {
    return [
      {
        id: 'back',
        text: i18n?.actions.back,
        meta: {
          hidden: props.backHidden,
          variant: 'secondary',
          disabled: props.backDisabled,
          size: '64',
        },
      },
      {
        id: 'next',
        text: i18n?.actions.next,
        meta: {
          hidden: props.nextHidden,
          disabled: props.nextDisabled,
          size: '64',
        },
      },
    ];
  });

  const handleClick = (btnGroupEvt: IButtonGroupClickEvent) => {
    if (btnGroupEvt?.buttonId === 'next') {
      emit('next', btnGroupEvt?.event);
    } else {
      emit('back', btnGroupEvt?.event);
    }
  };
</script>
