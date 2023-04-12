import VInfoBox from '.';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof VInfoBox> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Order Process/VInfoBox',
  component: VInfoBox,
  argTypes: {
    headlineHeading: { control: 'text' },
    headlineContent: { control: 'text' },
    content: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof VInfoBox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VInfoBox },
    setup() {
      return { args };
    },
    template:
      '<v-info-box :headline-heading="args.headlineHeading"><template #headline-content>{{ args.headlineContent }}</template><p>{{ args.content }}</p></v-info-box>',
  }),
  args: {
    headlineHeading: 'Some Example Heading',
    headlineContent: 'Headline content done via slot',
    content: 'Drawer content done via slot',
  },
};
