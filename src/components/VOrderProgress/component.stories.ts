import VOrderProgress from '.';
import type { Meta, StoryObj } from '@storybook/vue3';
import { en_US } from '@/lang/en';
import { useI18n } from '@/composables/useI18n';

const meta: Meta<typeof VOrderProgress> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Order Process/VOrderProgress',
  component: VOrderProgress,
  argTypes: {
    percentage: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    lineItems: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof VOrderProgress>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VOrderProgress },
    setup() {
      useI18n(en_US);
      return { args };
    },
    template: '<v-order-progress v-bind="args" />',
  }),
  args: {
    percentage: 30,
    lineItems: [
      {
        name: 'Package Fee',
        value: 99,
      },
      {
        name: 'Registered Agent Renewal',
        value: 119,
      },
      {
        name: 'Virtual Address',
        value: 29.99,
      },
    ],
  },
};
