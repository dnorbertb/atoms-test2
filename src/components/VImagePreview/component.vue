<template>
  <div class="bg-gray-25 border border-solid border-gray-100 rounded-[20px] p-sm flex gap-lg items-center">
    <div class="bg-white rounded-[16px] border border-solid border-gray-200 p-sm">
      <img :src="file.previewUrl" :alt="i18n.fileUpload.previewText" class="w-[160px] h-[160px]" />
    </div>
    <div class="info-box flex flex-col gap-md">
      <div class="file-info">
        <p class="font-medium text-lg text-gray-900 m-0">{{ file.name }}</p>
        <p class="text-sm text-gray-500 m-0">{{ file.size }}</p>
      </div>
      <v-button
        :text="i18n.fileUpload.removeFile"
        :icon="TrashIcon"
        mode="both"
        variant="secondary"
        size="32"
        @click="() => emit('removeImage', { file: file })"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  // region Utilities & Types
  import { inject } from 'vue';
  import type { IFile } from '@/types/IFile';
  import type { IImagePreviewEventArgs } from '@/components/VImagePreview/component.types';
  import TrashIcon from '@/assets/icons/TrashIcon.svg';
  import VButton from '@/components/VButton';

  // endregion

  const i18n = inject('i18n');

  interface IImagePreviewProps {
    file: IFile;
  }

  defineProps<IImagePreviewProps>();

  const emit = defineEmits<{
    (e: 'removeImage', args: IImagePreviewEventArgs): void;
  }>();
</script>
