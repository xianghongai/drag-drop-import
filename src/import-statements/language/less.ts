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
export function lessImportStatement({ dragFilePath, dropFilePath }: DragDropParams): SnippetString {
  const importPath = getPath({ dragFilePath, dropFilePath });
  return new SnippetString(`@import '${importPath}';${EOL}$0`);
}
