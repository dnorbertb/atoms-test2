import Logo from '.';
import type { Meta, StoryObj } from '@storybook/vue3';
import { provide } from 'vue';

const meta: Meta<typeof Logo> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Brand/VLogo',
  component: Logo,
  argTypes: {
    logo: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { Logo },
    setup() {
      provide('config', { logo: { src: args.logo } });
      return { args };
    },
    template: '<logo />',
  }),
  args: {
    logo: 'https://via.placeholder.com/100x100',
  },
};
