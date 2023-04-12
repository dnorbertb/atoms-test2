import VButton from '@/components/VButton';
import VModal from '.';
import type { Meta, StoryObj } from '@storybook/vue3';
import { withActions } from '@storybook/addon-actions';
import { ref } from 'vue';

const meta: Meta<typeof VModal> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Misc/VModal',
  component: VModal,
  argTypes: {
    content: { control: 'text' },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof VModal>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VModal, VButton },
    setup() {
      document.body.style.height = '100vh';
      const control = ref(null);
      return { args, control };
    },
    template:
      '<div><v-modal ref="control" v-bind="args">{{ args.content }}</v-modal><v-button text="Show Modal" variant="primary" mode="text" size="40" @click="control.show()" /></div>',
  }),
  args: {
    content: 'Modal Content',
  },
};
