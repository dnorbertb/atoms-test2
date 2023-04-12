import VButton from '@/components/VButton';
import VDrawer from '.';
import type { Meta, StoryObj } from '@storybook/vue3';
import { withActions } from '@storybook/addon-actions';
import { ref } from 'vue';

const meta: Meta<typeof VDrawer> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Misc/VDrawer',
  component: VDrawer,
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
type Story = StoryObj<typeof VDrawer>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VDrawer, VButton },
    setup() {
      document.body.style.height = '100vh';
      const control = ref(null);
      return { args, control };
    },
    template:
      '<div><v-drawer ref="control" v-bind="args">{{ args.content }}</v-drawer><v-button text="Show Drawer" variant="primary" mode="text" size="40" @click="control.show()" /></div>',
  }),
  args: {
    content: 'Drawer Content',
  },
};
