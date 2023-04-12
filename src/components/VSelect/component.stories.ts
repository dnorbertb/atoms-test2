import VSelect from '.';
import type { Meta, StoryObj } from '@storybook/vue3';
import { withActions } from '@storybook/addon-actions';

const options = [
  {
    id: 'option-1',
    text: 'Option 1',
    meta: {
      inputClass: '',
    },
  },
  {
    id: 'option-2',
    text: 'Option 2',
    meta: {
      inputClass: '',
    },
  },
  {
    id: 'option-3',
    text: 'Option 3',
    meta: {
      inputClass: '',
    },
  },
];

const vuelidate = {
  $error: false,
  $errors: [
    {
      $message: 'Validation error',
    },
  ],
};

const meta: Meta<typeof VSelect> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Forms/VSelect',
  component: VSelect,
  argTypes: {
    vuelidate: { control: 'object' },
    label: { control: 'text' },
    modelValue: {
      control: {
        type: 'select',
        options: ['option-1', 'option-2', 'option-3'],
      },
    },
    options: { control: 'object' },
    'update:modelValue': { table: { disable: true } },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['input', 'blur', 'focus'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof VSelect>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VSelect },
    setup() {
      return { args };
    },
    template: '<v-select v-bind="args" />',
  }),
  args: {
    vuelidate: vuelidate,
    modelValue: 'option-1',
    options: options,
    label: 'Some label',
  },
};
