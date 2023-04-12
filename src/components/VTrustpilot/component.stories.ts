import VTrustpilot from '.';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof VTrustpilot> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Brand/VTrustpilot',
  component: VTrustpilot,
  argTypes: {
    reviewSiteName: { control: 'text' },
    templateId: { control: 'text' },
    businessUnitId: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof VTrustpilot>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Component: Story = {
  render: (args) => ({
    components: { VTrustpilot },
    setup() {
      setTimeout(() => {
        const script = document.createElement('script');
        script.setAttribute('src', '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js');
        script.setAttribute('defer', 'defer');
        script.setAttribute('id', 'tpwidget');
        document.head.append(script);
      }, 1000);

      return { args };
    },
    template: '<v-trustpilot v-bind="args" />',
  }),
  args: {
    reviewSiteName: 'incfile.com',
    templateId: '5419b637fa0340045cd0c936',
    businessUnitId: '5b3ff2645c814d0001808576',
  },
};
