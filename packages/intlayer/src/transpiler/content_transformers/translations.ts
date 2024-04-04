import { getConfiguration, type Locales } from 'intlayer-config';
import {
  getStackTraceInfo,
  type NoteStackTraceInfo,
} from '../../utils/getStackTraceInfo';

export type LanguageContent<Content> = Record<Locales, Content>;

export type TranslationContent = Partial<LanguageContent<string>> &
  NoteStackTraceInfo & {
    type: 'translation';
  };

const { defaultLocale } = getConfiguration();
/**
 * Create a JSON string with the content and the stack trace information
 * @param {string | Partial<LanguageContent<string>>} content - The content to be translated
 * @returns { TranslationContent } A JSON string containing the content and stack trace information
 */
export const translations = (
  content?: Partial<LanguageContent<string>> | string
) => {
  const stackTraceInfo = getStackTraceInfo();

  if (typeof content === 'string') {
    const result: TranslationContent = {
      type: 'translation',
      ...stackTraceInfo,
      [defaultLocale]: content,
    };

    return result;
  }

  const result: TranslationContent = {
    type: 'translation',
    ...stackTraceInfo,
    ...content,
  };

  return result;
};
