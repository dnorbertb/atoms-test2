import VDescriptions from '.';
import VDescriptionsItem from './VDescriptionsItem';
import FileIcon from '@/assets/icons/FileIcon.svg';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof VDescriptions> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Misc/VDescriptions',
  component: VDescriptions,
  argTypes: {
    icon: { control: 'object' },
    heading: { control: 'text' },
    slots: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof VDescriptions>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VDescriptions, VDescriptionsItem },
    setup() {
      return { args };
    },
    template:
      '<div class="w-[512px]"><v-descriptions><v-descriptions-item v-for="(slot, key) in args.slots" :heading="args.heading" :key="key" :icon="args.icon"><div class="flex gap-xs"><p class="text-gray-600 text-md font-medium w-[192px]">{{ slot.label }}</p><p class="text-black text-md font-medium">{{ slot.content }}</p> </div></v-descriptions-item></v-descriptions>',
  }),
  args: {
    heading: 'Hello World',
    icon: FileIcon,
    slots: {
      1: {
        label: 'First Name and Last Name',
        content: 'John Doe',
      },
      2: {
        label: 'Phone Number',
        content: '(201)-223223233',
      },
    },
  },
};

export const _VDescriptionItem: Story = {
  render: (args) => ({
    components: { VDescriptionsItem },
    setup() {
      return { args };
    },
    template: '<v-descriptions-item v-bind="args">👆You can put any content/component here</v-descriptions-item>',
  }),
  args: {
    icon: FileIcon,
    heading: 'Hello World',
  },
};
