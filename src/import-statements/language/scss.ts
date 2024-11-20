import { EOL } from 'os';
import { SnippetString } from 'vscode';
import { DragDropParams } from '../../model';
import { getPath } from '../../utilities';

/**
 * Returns the Import statement string
 * @param params.dragFilePath Dragged file path
 * @param params.dropFilePath Dropped file path
 * @returns Import statement string
 */
export function scssImportStatement({ dragFilePath, dropFilePath }: DragDropParams): SnippetString {
  const importPath = getPath({ dragFilePath, dropFilePath });
  const parsedPath = parsePartialFile(importPath);
  return new SnippetString(`@import '${parsedPath}';${EOL}$0`);
}

/**
 * Parses SASS partial file path by removing the leading underscore from the filename
 * @param params.relativePath The relative path to the SASS file
 * @returns {string} Processed path without leading underscore in filename
 */
function parsePartialFile(relativePath: string): string {
  const arr = relativePath.split('/');
  const lastElemIndex = arr.length - 1;
  const filename = arr[lastElemIndex];

  if (filename.startsWith('_')) {
    arr[lastElemIndex] = filename.substring(1);
  }

  return arr.join('/');
}
