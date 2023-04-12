import VHeadline from '.';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof VHeadline> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Typography/VHeadline',
  component: VHeadline,
  argTypes: {
    headingClass: { control: 'text' },
    headingTag: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
      },
    },
    headingText: { control: 'text' },
    content: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof VHeadline>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VHeadline },
    setup() {
      return { args };
    },
    template: '<v-headline v-bind="args"><p>{{ args.content }}</p></v-headline>',
  }),
  args: {
    headingTag: 'h2',
    headingClass: 'text-d-xs font-semibold',
    headingText: 'Example Headline Text',
    content: 'Some example content',
  },
};
