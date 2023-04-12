<template>
  <button-group :options="buttonOptions" class="flex flex-1 justify-between" @click="handleClick" />
</template>

<script lang="ts" setup>
  // region Framework
  import { computed, inject } from 'vue';
  // endregion
  // region Utilities & Types
  import type { IButtonGroupClickEvent } from '../../components/VButtonGroup/component.types';
  // endregion
  // region Components
  import ButtonGroup from '../../components/VButtonGroup';
  import type { II18n } from '../../types/II18n';

  // endregion
  type ResultsType = 'ok' | 'cancel' | 'yes' | 'no';

  interface IAlertButtons {
    resultType?: ResultsType[];
  }
  const i18n = inject<II18n>('i18n');
  const props = withDefaults(defineProps<IAlertButtons>(), {
    resultType: () => [],
  });

  const emit = defineEmits(['onAlert']);

  const buttonOptions = computed(() => {
    return props.resultType.map((result) => {
      return {
        id: result,
        text: i18n?.actions[result],
        meta: {
          variant: result === 'yes' || result === 'ok' ? 'primary' : 'secondary',
          size: '64',
        },
      };
    });
  });

  const handleClick = (btnGroupEvt: IButtonGroupClickEvent) => {
    emit('onAlert', btnGroupEvt?.event);
  };
</script>
