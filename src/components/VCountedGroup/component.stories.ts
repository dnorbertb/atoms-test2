import VCountedGroupItem from './VCountedGroupItem';
import type { Meta, StoryObj } from '@storybook/vue3';
import VCountedGroup from '@/components/VCountedGroup/index';
import VButton from '@/components/VButton';
import VFormInput from '@/components/VFormInput';

const meta: Meta<typeof VCountedGroupItem> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Misc/VCountedGroup',
  component: VCountedGroupItem,
  argTypes: {
    headingText: { control: 'text' },
    indicatorValue: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof VCountedGroupItem>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VCountedGroupItem, VCountedGroup, VButton, VFormInput },
    setup() {
      return { args };
    },
    template:
      '<v-counted-group><v-counted-group-item :heading-text="args.headingText" :indicator-value="args.indicatorValue"><v-form-input :options="{ meta: { placeholder: `Enter First Identification`}}" /></v-counted-group-item><v-counted-group-item heading-text="Second Identification" indicator-value="2/2"><v-button text="Hello World"  /></v-counted-group-item><p>👆You can put any content/component here </p></v-counted-group>',
  }),
  args: {
    headingText: 'First Identification',
    indicatorValue: '1/2',
  },
};
