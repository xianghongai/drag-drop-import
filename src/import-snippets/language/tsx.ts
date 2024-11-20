import { SnippetString } from 'vscode';
import { tsx } from '../../import-statements';
import { DragDropParams } from '../../model';

/**
 * Returns the import statement
 * @param params.dragFilePath Dragged file path
 * @param params.dropFilePath Dropped file path
 * @returns Import statement string
 */
export function snippet({ dragFilePath, dropFilePath }: DragDropParams): SnippetString {
  return tsx.tsxImportStatement({ dragFilePath, dropFilePath });
}
