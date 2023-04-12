import VCart from '.';
import type { Meta, StoryObj } from '@storybook/vue3';
import { withActions } from '@storybook/addon-actions';
import VCompactCart from '@/components/VCart/VCompactCart';
import { en_US } from '@/lang/en';
import { useI18n } from '@/composables/useI18n';

const meta: Meta<typeof VCart> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Order Process/VCart',
  component: VCart,
  argTypes: {
    items: { control: 'object' },
    onPay: { action: 'Pay Button Clicked' },
  },
  decorators: [withActions],
};

export default meta;
type Story = StoryObj<typeof VCart>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const FullCart: Story = {
  render: (args) => ({
    components: { VCart },
    setup() {
      useI18n(en_US);
      return { args };
    },
    template: '<div class="w-full md:w-1/3 p-[40px] md:p-[80px] bg-gray-50"><v-cart v-bind="args" /></div>',
  }),
  args: {
    items: [
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

export const CompactCart: Story = {
  render: (args) => ({
    components: { VCompactCart },
    setup() {
      useI18n(en_US);
      return { args };
    },
    template: '<v-compact-cart v-bind="args" />',
  }),
  argTypes: {
    shadow: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      },
    },
    extraClasses: { control: 'text' },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'md'],
      },
    },
    pay: {
      table: {
        disable: true,
      },
    },
    onPay: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    items: [
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
    size: 'xs',
    shadow: '2xl',
    extraClasses: 'p-sm',
  },
};
