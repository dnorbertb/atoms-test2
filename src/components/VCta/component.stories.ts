import VCta from '.';
import type { Meta, StoryObj } from '@storybook/vue3';
import { withActions } from '@storybook/addon-actions';

const meta: Meta<typeof VCta> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Order Process/VCta',
  component: VCta,
  argTypes: {
    linkText: { control: 'text' },
    linkHref: { control: 'text' },
    linkAction: {
      control: {
        type: 'select',
        options: ['href', 'click'],
      },
    },
    onLinkClick: { action: 'Link Clicked' },
  },
  decorators: [withActions],
};

export default meta;
type Story = StoryObj<typeof VCta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VCta },
    setup() {
      return { args };
    },
    template: '<v-cta v-bind="args" />',
  }),
  args: {
    linkText: 'Click Me',
    linkAction: 'click',
  },
};
