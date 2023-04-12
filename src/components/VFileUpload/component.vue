<template>
  <div
    ref="fileUpload"
    class="input"
    @dragover.prevent="state.dragOver = true"
    @dragleave.prevent="state.dragOver = false"
    @drop.stop.prevent="(evt: DragEvent) => beginUpload(evt.dataTransfer.files)"
  >
    <label class="mb-0 flex w-full flex-col gap-0.5">
      <span class="block self-start text-sm text-lg font-medium font-inter mb-xs">{{ label }}</span>
      <input ref="input" :name="name" class="hidden" type="file" @change="(evt) => beginUpload(evt.target.files)" />
    </label>
    <div class="flex flex-col gap-[12px]">
      <div
        :class="{ 'bg-primary-50 outline-primary-700': state.dragOver }"
        class="flex cursor-pointer select-none items-center justify-center rounded-sm outline-dashed outline-2 outline-gray-400 py-[20px] outline-offset-[-2px]"
        @click="input?.click()"
      >
        <div v-if="!state.uploading" class="pointer-events-none flex flex-col items-center gap-[12px]">
          <div>
            <file-icon class="fill-current text-primary-700" />
          </div>
          <div class="text-center">
            <p class="text-lg font-semibold text-black">
              {{ options?.text }}
            </p>
            <p class="text-sm font-semibold text-gray-500">
              {{ i18n.fileUpload.drag }}
            </p>
          </div>
        </div>
        <div v-if="state.uploading" class="flex flex-col items-center">
          <progress-bar type="radial" :percentage="state.progress" />
          <p class="text-lg font-semibold text-black my-sm">
            {{ i18n.fileUpload.uploadingFile }}
          </p>
          <button
            class="rounded-sm border border-solid border-gray-200 bg-white shadow-sm border-[1px] px-[12px] py-xs"
            type="button"
            @click.stop="handleAndEmit(emit, 'uploadCancel', cancelUpload, null)"
          >
            {{ i18n.actions.cancel }}
          </button>
        </div>
      </div>
      <p v-if="options?.meta?.rules" class="pointer-events-none text-lg text-gray-500">
        {{ options?.meta?.rules }}
      </p>
    </div>
    <p
      v-if="vuelidate?.$error || state.uploadFailed"
      class="rounded-sm bg-error-50 flex gap-sm text-error-800 text-sm px-sm w-[calc(100%-16px)] p-[12px] mt-[20px]"
    >
      <error-icon />
      <span v-if="vuelidate?.$error">{{ vuelidate?.$errors[0]?.$message }}</span>
      <span v-if="state.uploadFailed">{{ i18n.fileUpload.failed }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
  // region Framework
  import { inject, reactive, ref } from 'vue';
  // endregion
  // region Components
  import type { IUploadStartEventArgs } from '@/components/VFileUpload/index';
  import type { IState } from '@/components/VFileUpload/component.types';
  import type { IFile } from '@/types/IFile';
  import ProgressBar from '@/components/VProgressBar';
  import { handleAndEmit } from '@/utils/emitter';
  import ErrorIcon from '@/assets/icons/ErrorIcon.svg';
  import type { IOptions } from '@/types/IOptions';
  import FileIcon from '@/assets/icons/FileIcon.svg';
  // endregion
  // region Context
  const i18n = inject('i18n');
  // endregion
  // region Props
  interface IFileUploadProps {
    modelValue?: object;
    options?: IOptions;
    vuelidate?: any;
    label?: string;
    name?: string;
  }
  defineProps<IFileUploadProps>();
  // endregion
  // region Events
  const emit = defineEmits<{
    (e: 'update:modelValue', value: any): void;
    (e: 'uploadStart', args: IUploadStartEventArgs): void;
    (e: 'uploadCancel', value: any): void;
  }>();
  // endregion
  // region State
  const input = ref<HTMLInputElement | null>(null);
  const state = reactive<IState>({
    dragOver: false,
    uploading: false,
    uploadFailed: false,
    file: null,
    progress: 0,
  });
  // endregion
  // region Methods
  function beginUpload(files: FileList): void {
    state.uploadFailed = false;
    state.uploading = true;
    state.progress = 0;
    state.dragOver = false;

    emit('uploadStart', { files: files });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onUploadProgress(progress: number): void {
    state.progress = progress;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onUploadComplete(file: IFile): void {
    state.file = file;
    state.uploading = false;
    emit('update:modelValue', file);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onUploadFail(): void {
    state.uploadFailed = true;
    state.uploading = false;
  }

  function cancelUpload() {
    state.progress = 0;
    state.uploading = false;
    state.uploadFailed = false;
  }
  // endregion

  defineExpose({
    onUploadComplete,
    onUploadFail,
    onUploadProgress,
  });
</script>
