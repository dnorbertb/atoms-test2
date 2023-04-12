<template>
  <div>
    <template v-for="option in options" :key="option?.id">
      <v-button
        v-if="!option?.meta?.hidden"
        :id="option?.id"
        v-bind="option?.meta"
        :text="option?.text"
        @click="(evt) => emit('click', { buttonId: option?.id, event: evt })"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
  import VButton from '../VButton';

  // region Utilities & Types
  import type { IButtonGroupClickEvent } from '../VButtonGroup/component.types';
  import type { IOptions } from '../../types/IOptions';

  // endregion

  interface IButtonGroupProps {
    options: IOptions[];
  }

  defineProps<IButtonGroupProps>();

  const emit = defineEmits<{
    (e: 'click', args: IButtonGroupClickEvent): void;
  }>();
</script>
