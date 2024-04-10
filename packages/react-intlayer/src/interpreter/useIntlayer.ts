import type { IntLayerDictionaryTypesConnector } from '@intlayer/core';
/**
 * @intlayer-alias/dictionaries-entry should match with an alias
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import dictionaries from '@intlayer-alias/dictionaries-entry';

type DictionaryKeys = keyof IntLayerDictionaryTypesConnector;

type UseIntlayer = <T extends DictionaryKeys>(
  id: T
) => IntLayerDictionaryTypesConnector[T];

/**
 * ALTERNATIVE WAY TO IMPORT DICTIONARIES INSTEAD OF USING ALIAS
 * This alternative don't work with webpack hot reload
 * ---------------------------------------------------------------------------------
 * import { getConfiguration } from '@intlayer/config';
 * import { join } from 'path';
 * const { mainDir } = getConfiguration();
 * const dictionariesPath = join(mainDir, 'dictionaries.cjs');
 * const dictionaries = require(dictionariesPath);
 */

export const useIntlayer: UseIntlayer = <T extends DictionaryKeys>(id: T) => {
  const dictionaryContent = dictionaries[id];

  return dictionaryContent as IntLayerDictionaryTypesConnector[T];
};