import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { basename, relative, resolve } from 'path';
import { getConfiguration } from '@intlayer/config';
import { sync } from 'glob';
import { getFileHash, transformToCamelCase } from '../../utils';

const { mainDir, typesDir } = getConfiguration();

export const getTypeName = (id: string): string =>
  transformToCamelCase(`${id}Content`);

/**
 * This function generates the content of the module augmentation file
 */
const generateTypeIndexContent = (typeFiles: string[]): string => {
  let content = "// @ts-nocheck\n\nimport '@intlayer/core';\n\n";

  const dictionariesRef = typeFiles.map((dictionaryPath) => ({
    relativePath: relative(mainDir, dictionaryPath),
    id: basename(dictionaryPath, '.d.ts'), // Get the base name as the dictionary id
    hash: `_${getFileHash(dictionaryPath)}`, // Get the hash of the dictionary to avoid conflicts
  }));

  // Import all dictionaries
  dictionariesRef.forEach((dictionary) => {
    const typeName = getTypeName(dictionary.id);
    content += `import type { ${typeName} as ${dictionary.hash} } from '${dictionary.relativePath}';\n`;
  });

  content += '\n';

  // Format Dictionary Map
  const formattedDictionaryMap: string = dictionariesRef
    .map((dictionary) => `    "${dictionary.id}": ${dictionary.hash};`)
    .join('\n');

  /**
   * Write the module augmentation to extend the intlayer module with the dictionaries types
   * Will suggest the type resulting of the dictionaries
   *
   * declare module '@intlayer/core' {
   *   interface IntLayerDictionaryTypesConnector = {
   *     dictionaries: {
   *       id: DictionaryType;
   *     }
   * }
   *
   * See https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
   */
  content += `declare module '@intlayer/core' {\n  interface IntLayerDictionaryTypesConnector {    \n${formattedDictionaryMap}\n  };\n}`;

  return content;
};

/**
 * This function generates a index file merging all the types
 */
export const createModuleAugmentation = () => {
  // Create main directory if it doesn't exist
  if (!existsSync(mainDir)) {
    mkdirSync(mainDir, { recursive: true });
  }

  const dictionaries: string[] = sync(`${typesDir}/**/*.d.ts`);
  // Create the dictionary list file

  const tsContent = generateTypeIndexContent(dictionaries);
  writeFileSync(resolve(mainDir, 'intlayer.d.ts'), tsContent);
};