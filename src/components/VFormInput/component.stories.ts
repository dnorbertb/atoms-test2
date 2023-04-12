import VFormInput from '.';
import type { Meta, StoryObj } from '@storybook/vue3';
import { en_US } from '@/lang/en';
import { useI18n } from '@/composables/useI18n';

const options = {
  text: {
    meta: {
      placeholder: 'Placeholder...',
      inputClass: '',
      htmlType: 'text',
    },
  },
  textarea: {
    meta: {
      placeholder: 'Placeholder...',
      inputClass: '',
    },
  },
  upload: {
    text: 'Select JPG or PNG file to upload',
    meta: {
      rules: 'Logo (PNG, JPG, max 20MB)',
    },
  },
  checkbox: {},
  select: [
    {
      id: 'option-1',
      text: 'Option 1 Text',
      meta: {
        inputClass: '',
      },
    },
    {
      id: 'option-2',
      text: 'Option 2 Text',
      meta: {
        inputClass: '',
      },
    },
    {
      id: 'option-3',
      text: 'Option 3 Text',
      meta: {
        inputClass: '',
      },
    },
  ],
  'radio-group': [
    {
      id: 'option-1',
      text: 'Option 1 Text',
      meta: {
        content: 'Content bellow the radio header',
      },
    },
    {
      id: 'option-2',
      text: 'Option 2 Text',
      meta: {
        content: 'Content bellow the radio header',
      },
    },
    {
      id: 'option-3',
      text: 'Option 3 Text',
      meta: {
        content: 'Content bellow the radio header',
      },
    },
  ],
};

const vuelidate = {
  $error: false,
  $errors: [
    {
      $message: 'Validation error',
    },
  ],
};

const meta: Meta<typeof VFormInput> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Forms/VFormInput',
  component: VFormInput,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'checkbox', 'radio-group', 'textarea', 'upload', 'select'],
      },
    },
    vuelidate: { control: 'object' },
    label: { control: 'text' },
    modelValue: { name: 'v-model', control: 'text' },
    options: { control: 'object' },
    'update:modelValue': { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof VFormInput>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const VTextInput: Story = {
  render: (args) => ({
    components: { VFormInput },
    setup() {
      useI18n(en_US);
      return { args };
    },
    template: '<v-form-input v-bind="args" />',
  }),
  args: {
    type: 'text',
    vuelidate: vuelidate,
    modelValue: '',
    options: options['text'],
    label: 'Some label',
  },
};
export const VCheckbox: Story = {
  render: (args) => ({
    components: { VFormInput },
    setup() {
      useI18n(en_US);
      return { args };
    },
    template: '<v-form-input v-bind="args" />',
  }),
  argTypes: {
    modelValue: { name: 'v-model', control: 'boolean' },
  },
  args: {
    type: 'checkbox',
    vuelidate: vuelidate,
    modelValue: false,
    options: options['checkbox'],
    label: 'Some label',
  },
};
export const VRadioGroup: Story = {
  render: (args) => ({
    components: { VFormInput },
    setup() {
      useI18n(en_US);
      return { args };
    },
    template: '<v-form-input v-bind="args" />',
  }),
  argTypes: {
    name: { control: 'text' },
    modelValue: {
      name: 'v-model',
      control: {
        type: 'select',
        options: ['option-1', 'option-2', 'option-3'],
      },
    },
  },
  args: {
    name: 'name',
    type: 'radio-group',
    vuelidate: vuelidate,
    modelValue: 'option-2',
    options: options['radio-group'],
    label: 'Some label',
  },
};
export const VSelect: Story = {
  render: (args) => ({
    components: { VFormInput },
    setup() {
      useI18n(en_US);
      return { args };
    },
    template: '<v-form-input v-bind="args" />',
  }),
  args: {
    type: 'select',
    vuelidate: vuelidate,
    modelValue: '',
    options: options['select'],
    label: 'Some label',
  },
};
export const VTextarea: Story = {
  render: (args) => ({
    components: { VFormInput },
    setup() {
      useI18n(en_US);
      return { args };
    },
    template: '<v-form-input v-bind="args" />',
  }),
  args: {
    type: 'textarea',
    vuelidate: vuelidate,
    modelValue: '',
    options: options['textarea'],
    label: 'Some label',
  },
};
export const VUpload: Story = {
  render: (args) => ({
    components: { VFormInput },
    setup() {
      useI18n(en_US);
      return { args };
    },
    template: '<v-form-input v-bind="args" />',
  }),
  argTypes: {
    modelValue: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: 'upload',
    vuelidate: vuelidate,
    options: options['upload'],
    label: 'Some label',
  },
};
