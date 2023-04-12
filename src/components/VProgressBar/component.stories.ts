import VProgressBar from '.';
import type { Meta, StoryObj } from '@storybook/vue3';
import { en_US } from '@/lang/en';
import { useI18n } from '@/composables/useI18n';

const meta: Meta<typeof VProgressBar> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Order Process/VProgressBar',
  component: VProgressBar,
  argTypes: {
    percentage: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['linear', 'radial'],
      },
    },
    radius: {
      control: {
        type: 'number',
        min: 10,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof VProgressBar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const LinearProgressBar: Story = {
  render: (args) => ({
    components: { VProgressBar },
    setup() {
      useI18n(en_US);
      return { args };
    },
    template: '<v-progress-bar v-bind="args" />',
  }),
  args: {
    type: 'linear',
    percentage: 30,
    radius: 30,
  },
};
export const RadialProgressBar: Story = {
  render: (args) => ({
    components: { VProgressBar },
    setup() {
      useI18n(en_US);
      return { args };
    },
    template: '<v-progress-bar v-bind="args" />',
  }),
  args: {
    type: 'radial',
    percentage: 30,
    radius: 30,
  },
};
