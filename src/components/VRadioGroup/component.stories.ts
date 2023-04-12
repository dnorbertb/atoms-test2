import VRadioGroup from '.';
import { useI18n } from '@/composables/useI18n';
import { en_US } from '@/lang/en';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof VRadioGroup> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Forms/VRadioGroup',
  component: VRadioGroup,
  argTypes: {
    vuelidate: { control: 'object' },
    label: { control: 'text' },
    modelValue: { name: 'v-model', control: 'text' },
    options: { control: 'object' },
    'update:modelValue': { table: { disable: true } },
  },
};
export default meta;
type Story = StoryObj<typeof VRadioGroup>;

const vuelidate = {
  $error: false,
  $errors: [
    {
      $message: 'Validation error',
    },
  ],
};

export const Component: Story = {
  render: (args) => ({
    components: { VRadioGroup },
    setup() {
      useI18n(en_US);
      return { args };
    },
    template: '<v-radio-group v-bind="args" />',
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
    options: [
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
    label: 'Some label',
  },
};
