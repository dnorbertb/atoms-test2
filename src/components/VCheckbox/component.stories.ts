import VCheckbox from '.';
import type { Meta, StoryObj } from '@storybook/vue3';
import { withActions } from '@storybook/addon-actions';

const vuelidate = {
  $error: false,
  $errors: [
    {
      $message: 'Validation error',
    },
  ],
};

const meta: Meta<typeof VCheckbox> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Forms/VCheckbox',
  component: VCheckbox,
  argTypes: {
    vuelidate: { control: 'object' },
    label: { control: 'text' },
    modelValue: { control: 'boolean' },
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
type Story = StoryObj<typeof VCheckbox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VCheckbox },
    setup() {
      return { args };
    },
    template: '<v-checkbox v-bind="args" />',
  }),
  args: {
    vuelidate: vuelidate,
    modelValue: false,
    label: 'Some label',
  },
};
