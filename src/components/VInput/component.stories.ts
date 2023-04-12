import VInput from '.';
import type { Meta, StoryObj } from '@storybook/vue3';
import { withActions } from '@storybook/addon-actions';

const options = {
  meta: {
    placeholder: 'Placeholder...',
    inputClass: '',
  },
};

const vuelidate = {
  $error: false,
  $errors: [
    {
      $message: 'Validation error',
    },
  ],
};

const meta: Meta<typeof VInput> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Forms/VInput',
  component: VInput,
  argTypes: {
    vuelidate: { control: 'object' },
    label: { control: 'text' },
    modelValue: { control: 'text' },
    options: { control: 'object' },
    'update:modelValue': { table: { disable: true } },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['input', 'blur', 'focus', 'enter'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof VInput>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VInput },
    setup() {
      return { args };
    },
    template: '<v-input v-bind="args" />',
  }),
  args: {
    vuelidate: vuelidate,
    modelValue: '',
    options: options,
    label: 'Some label',
  },
};
