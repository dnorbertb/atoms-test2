import VImagePreview from '.';
import type { Meta, StoryObj } from '@storybook/vue3';
import { withActions } from '@storybook/addon-actions';
import { en_US } from '@/lang/en';

const meta: Meta<typeof VImagePreview> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Misc/VImagePreview',
  component: VImagePreview,
  argTypes: {
    file: { control: 'object' },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof VImagePreview>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VImagePreview },
    setup() {
      useI18n(en_US);
      return { args };
    },
    template: '<v-image-preview v-bind="args" />',
  }),
  args: {
    file: {
      name: 'superlogo.jpg',
      url: 'https://via.placeholder.com/200x200',
      mime: 'image/png',
      createdAt: '2023-03-04 14:43:33',
      size: '355 KB',
      previewUrl: 'https://via.placeholder.com/100x100',
    },
  },
};
