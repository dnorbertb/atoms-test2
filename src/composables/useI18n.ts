import type { II18n } from '../types/II18n';
import { provide } from 'vue';

export function useI18n(lang: II18n) {
  provide('i18n', lang);
}
