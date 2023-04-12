<template>
  <div
    :class="clickable && 'cursor-pointer'"
    :tabindex="clickable ? 0 : -1"
    class="flex flex-col p-md gap-[12px] rounded-xs bg-gray-50 w-full max-w-full"
  >
    <div class="flex items-center gap-sm text-sm text-gray-700">
      <span v-if="icon" class="aspect-1"><light-bulb-icon height="24px" width="24px" /></span>
      <v-headline
        :heading-text="headlineHeading"
        class="text-inherit font-regular"
        heading-class="text-inherit font-semibold text-gray-900"
        heading-tag="h3"
      >
        <slot></slot>
      </v-headline>
      <span v-if="clickable" class="aspect-1 self-baseline"><add-circled-outline-icon /></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // region Framework
  // endregion
  // region Libs
  // endregion
  // region Components
  import VHeadline from '../VHeadline';
  // import LightBulbIcon from '../../../icons/LightBulbIcon.svg';
  // import AddCircledOutlineIcon from '../icons/AddCircledOutlineIcon.svg';

  // endregion

  interface IInfoBoxProps {
    headlineHeading?: string;
    clickable?: boolean;
    icon?: boolean;
  }

  defineProps<IInfoBoxProps>();
</script>

<style></style>
