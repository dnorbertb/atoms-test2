import { reactive, type Ref, toRaw } from 'vue';
import useVuelidate, { type Validation } from '@vuelidate/core';
import type { IGenericObject } from '../types/IGenericObject';

export function useGuardedVuelidate(reactiveState: { [key: string]: any }, validationRules: any) {
  const prevState = Object.assign({}, toRaw(reactiveState));
  const reactiveIntermediateState = reactive(prevState);
  const vuelidate = useVuelidate(validationRules, reactiveIntermediateState);

  return [vuelidate, reactiveIntermediateState, () => mergeState(vuelidate, reactiveIntermediateState, reactiveState)];
}

function mergeState(vuelidate: Ref<Validation>, intermediateState: IGenericObject, targetState: IGenericObject): void {
  Object.entries(intermediateState).forEach(([key, value]) => {
    if (Object.prototype.hasOwnProperty.call(vuelidate.value, key) && !vuelidate.value[key].$error) {
      targetState[key] = value;
    }
  });
}
