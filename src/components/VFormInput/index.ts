import component from './component.vue';
import { defineAsyncComponent } from 'vue';

export const FormTypeToComponent: Record<string, typeof defineAsyncComponent> = {
  Text: defineAsyncComponent(() => import('../VInput')),
  Select: defineAsyncComponent(() => import('../VSelect')),
  RadioGroup: defineAsyncComponent(() => import('../VRadioGroup')),
  Checkbox: defineAsyncComponent(() => import('../VCheckbox')),
  // Upload: defineAsyncComponent(() => import('../VFileUpload')),
  Textarea: defineAsyncComponent(() => import('../VTextarea')),
};

export interface IVuelidate {
  error: boolean;
  messages: string[];
}

export default component;
