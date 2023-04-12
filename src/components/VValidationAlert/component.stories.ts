import VValidationAlert from '.';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof VValidationAlert> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Misc/VValidationAlert',
  component: VValidationAlert,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof VValidationAlert>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VValidationAlert },
    setup() {
      return { args };
    },
    template: '<v-validation-alert v-bind="args" />',
  }),
  args: {
    vuelidate: {
      $error: true,
      $errors: [
        {
          $uid: 1337,
          $message: 'Whoops! Validation Error.',
        },
        {
          $uid: 2137,
          $message: 'Whoops! Validation Error 2.',
        },
      ],
    },
  },
};
