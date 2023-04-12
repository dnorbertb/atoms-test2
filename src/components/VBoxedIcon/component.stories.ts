import VBoxedIcon from '.';
import type { Meta, StoryObj } from '@storybook/vue3';
import FileIcon from '@/assets/icons/FileIcon.svg';

const meta: Meta<typeof VBoxedIcon> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Brand/VBoxedIcon',
  component: VBoxedIcon,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['square', 'round'],
      },
      icon: { control: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof VBoxedIcon>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VBoxedIcon },
    setup() {
      return { args };
    },
    template: '<v-boxed-icon v-bind="args" />',
  }),
  args: {
    variant: 'square',
    icon: FileIcon,
  },
};
