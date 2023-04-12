<template v-if="triggerElement">
  <slot></slot>
</template>

<script lang="ts" setup>
  // region Libs
  import type { TippyOptions } from 'vue-tippy';
  import { useTippy } from 'vue-tippy';
  import 'tippy.js/dist/tippy.css';
  import 'tippy.js/themes/light.css';

  // endregion

  interface ITooltipProps extends TippyOptions {
    triggerElement: () => Element;
    allowHTML?: TippyOptions['allowHTML'];
    animateFill?: TippyOptions['animateFill'];
    animation?: TippyOptions['animation'];
    appendTo?: TippyOptions['appendTo'];
    aria?: TippyOptions['aria'];
    arrow?: TippyOptions['arrow'];
    content?: TippyOptions['content'];
    delay?: TippyOptions['delay'];
    duration?: TippyOptions['duration'];
    followCursor?: TippyOptions['followCursor'];
    getReferenceClientRect?: TippyOptions['getReferenceClientRect'];
    hideOnClick?: TippyOptions['hideOnClick'];
    ignoreAttributes?: TippyOptions['ignoreAttributes'];
    inertia?: TippyOptions['inertia'];
    inlinePositioning?: TippyOptions['inlinePositioning'];
    interactive?: TippyOptions['interactive'];
    interactiveBorder?: TippyOptions['interactiveBorder'];
    interactiveDebounce?: TippyOptions['interactiveDebounce'];
    maxWidth?: TippyOptions['maxWidth'];
    moveTransition?: TippyOptions['moveTransition'];
    offset?: TippyOptions['offset'];
    onAfterUpdate?: TippyOptions['onAfterUpdate'];
    onBeforeUpdate?: TippyOptions['onBeforeUpdate'];
    onClickOutside?: TippyOptions['onClickOutside'];
    onCreate?: TippyOptions['onCreate'];
    onDestroy?: TippyOptions['onDestroy'];
    onHidden?: TippyOptions['onHidden'];
    onHide?: TippyOptions['onHide'];
    onMount?: TippyOptions['onMount'];
    onShow?: TippyOptions['onShow'];
    onShown?: TippyOptions['onShown'];
    onTrigger?: TippyOptions['onTrigger'];
    onUntrigger?: TippyOptions['onUntrigger'];
    placement?: TippyOptions['placement'];
    popperOptions?: TippyOptions['popperOptions'];
    role?: TippyOptions['role'];
    showOnCreate?: TippyOptions['showOnCreate'];
    sticky?: TippyOptions['sticky'];
    theme?: TippyOptions['theme'];
    touch?: TippyOptions['touch'];
    trigger?: TippyOptions['trigger'];
    triggerTarget?: TippyOptions['triggerTarget'];
    zIndex?: TippyOptions['zIndex'];
  }

  const props = defineProps<ITooltipProps>();

  useTippy(props.triggerElement, {
    ...props,
  });
</script>

<style lang="postcss">
  .tippy-box {
    @apply p-xs sm:p-sm;
    @apply rounded-sm shadow-2xl;
  }
  .tippy-box[data-theme~='dark'] {
    @apply bg-gray-900;
  }
  .tippy-box[data-theme~='light'] {
    @apply bg-white;
  }
</style>
