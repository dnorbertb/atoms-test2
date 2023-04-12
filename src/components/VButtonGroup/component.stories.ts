import VButtonGroup from '.';
import type { Meta, StoryObj } from '@storybook/vue3';
import { withActions } from '@storybook/addon-actions';
import FileIcon from '@/assets/icons/FileIcon.svg';

const meta: Meta<typeof VButtonGroup> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Misc/VButtonGroup',
  component: VButtonGroup,
  argTypes: {
    options: { control: 'object' },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof VButtonGroup>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VButtonGroup },
    setup() {
      return { args };
    },
    template: '<v-button-group v-bind="args" />',
  }),
  args: {
    options: [
      {
        id: 'button-1',
        text: 'Button 1',
        meta: {
          icon: FileIcon,
          mode: 'both',
          iconPosition: 'left',
          variant: 'primary',
          size: '48',
        },
      },
      {
        id: 'button-2',
        text: 'Button 1',
        meta: {
          icon: FileIcon,
          mode: 'both',
          iconPosition: 'left',
          variant: 'secondary',
          size: '48',
        },
      },
      {
        id: 'button-3',
        text: 'Button 1',
        meta: {
          icon: FileIcon,
          mode: 'both',
          iconPosition: 'left',
          variant: 'tertiary',
          size: '48',
        },
      },
      {
        id: 'button-4',
        text: 'Button 1',
        meta: {
          icon: FileIcon,
          mode: 'both',
          iconPosition: 'left',
          variant: 'quaternary',
          size: '48',
        },
      },
    ],
  },
};
