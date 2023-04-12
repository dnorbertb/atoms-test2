import VFileUpload from '.';
import type { Meta, StoryObj } from '@storybook/vue3';
import { en_US } from '@/lang/en';

const vuelidate = {
  $error: false,
  $errors: [
    {
      $message: 'Validation error',
    },
  ],
};

const meta: Meta<typeof VFileUpload> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Forms/VFileUpload',
  component: VFileUpload,
  argTypes: {
    vuelidate: { control: 'object' },
    label: { control: 'text' },
    modelValue: { table: { disable: true } },
    'update:modelValue': { table: { disable: true } },
    options: { control: 'object' },
  },
  parameters: {
    source: '<v-file-upload v-bind="args" />',
  },
};

export default meta;
type Story = StoryObj<typeof VFileUpload>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VFileUpload },
    setup() {
      useI18n(en_US);
      return { args };
    },
    template: '<v-file-upload v-bind="args" />',
  }),
  args: {
    vuelidate: vuelidate,
    modelValue: false,
    label: 'Some label',
    options: {
      text: 'Select JPG or PNG file to upload',
      meta: {
        rules: 'Logo (PNG, JPG, max 20MB)',
      },
    },
  },
};
