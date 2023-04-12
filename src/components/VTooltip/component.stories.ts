import VButton from '@/components/VButton';
import type { Meta, StoryObj } from '@storybook/vue3';
import { withActions } from '@storybook/addon-actions';
import VTooltip from '@/components/VTooltip';
import { ref } from 'vue';

const meta: Meta<typeof VTooltip> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Misc/VTooltip',
  component: VTooltip,
  argTypes: {
    content: { control: 'text' },
    allowHTML: { control: 'boolean' },
    animateFill: { control: 'text' },
    animation: { control: 'text' },
    appendTo: { control: 'text' },
    aria: { control: 'text' },
    arrow: { control: 'text' },
    delay: { control: 'text' },
    duration: { control: 'text' },
    followCursor: { control: 'text' },
    getReferenceClientRect: { control: 'text' },
    hideOnClick: { control: 'boolean' },
    ignoreAttributes: { control: 'boolean' },
    inertia: { control: 'text' },
    inlinePositioning: { control: 'text' },
    interactive: { control: 'boolean' },
    interactiveBorder: { control: 'text' },
    interactiveDebounce: { control: 'text' },
    maxWidth: { control: 'text' },
    moveTransition: { control: 'text' },
    offset: { control: 'text' },
    onAfterUpdate: { action: 'After Update Triggered' },
    onBeforeUpdate: { action: 'Before Update Triggered' },
    onClickOutside: { action: 'Click Outside Triggered' },
    onCreate: { action: 'Create Triggered' },
    onDestroy: { action: 'Destroy Triggered' },
    onHidden: { action: 'Hidden Triggered' },
    onHide: { action: 'Hide Triggered' },
    onMount: { action: 'Mount Triggered' },
    onShow: { action: 'Show Triggered' },
    onShown: { action: 'Shown Triggered' },
    onTrigger: { action: 'Trigger Triggered' },
    onUntrigger: { action: 'Untrigger Triggered' },
    placement: { control: 'text' },
    popperOptions: { control: 'text' },
    role: { control: 'text' },
    showOnCreate: { control: 'boolean' },
    sticky: { control: 'text' },
    theme: { control: 'text' },
    touch: { control: 'text' },
    trigger: { control: 'text' },
    triggerTarget: { control: 'text' },
    zIndex: { control: 'text' },
  },
  decorators: [withActions],
};

export default meta;
type Story = StoryObj<typeof VTooltip>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VTooltip, VButton },
    setup() {
      const control = ref(null);
      return { args, control };
    },
    template:
      '<div><v-tooltip :trigger-element="() => control.$el" v-bind="args"><v-button text="Hover Me" variant="primary" mode="text" size="40" ref="control" id="test" /></v-tooltip></div>',
  }),
  args: {
    content: 'Tooltip Content',
  },
};
