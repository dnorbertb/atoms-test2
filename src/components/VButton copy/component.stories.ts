import VButton from '.';
import type { Meta, StoryObj } from '@storybook/vue3';
import { withActions } from '@storybook/addon-actions';
import FileIcon from '@/assets/icons/FileIcon.svg';

const meta: Meta<typeof VButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Forms/VButton',
  component: VButton,
  argTypes: {
    icon: { control: 'object' },
    mode: {
      control: {
        type: 'select',
        options: ['text', 'icon', 'both'],
      },
    },
    iconPosition: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'quaternary'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['32', '40', '48', '56', '64'],
      },
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof VButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VButton },
    setup() {
      return { args };
    },
    template: '<v-button v-bind="args" />',
  }),
  args: {
    text: 'Button 1',
    icon: FileIcon,
    mode: 'both',
    iconPosition: 'left',
    variant: 'primary',
    size: '48',
  },
};
