import VNavButtons from '.';
import type { Meta, StoryObj } from '@storybook/vue3';
import { withActions } from '@storybook/addon-actions';
import { en_US } from '@/lang/en';
import { useI18n } from '@/composables/useI18n';

const meta: Meta<typeof VNavButtons> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Misc/VNavButtons',
  component: VNavButtons,
  argTypes: {
    backHidden: { control: 'boolean' },
    nextHidden: { control: 'boolean' },
    backDisabled: { control: 'boolean' },
    nextDisabled: { control: 'boolean' },
    onNext: { action: 'Next Button Clicked' },
    onBack: { action: 'Back Button Clicked' },
  },
  decorators: [withActions],
};

export default meta;
type Story = StoryObj<typeof VNavButtons>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VNavButtons },
    setup() {
      useI18n(en_US);
      return { args };
    },
    template: '<v-nav-buttons v-bind="args" />',
  }),
  args: {
    backHidden: false,
    nextHidden: false,
    backDisabled: false,
    nextDisabled: false,
  },
};
