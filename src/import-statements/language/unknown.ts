import { SnippetString } from 'vscode';
import { DragDropParams } from '../../model';
import { getRelativePath } from '../../utilities';

/**
 * Returns the Import statement string
 * @param params.dragFilePath Dragged file path
 * @param params.dropFilePath Dropped file path
 * @returns Import statement string
 */
export function unknownImportStatement({ dragFilePath, dropFilePath }: DragDropParams): SnippetString {
  const importPath = getRelativePath(dropFilePath, dragFilePath);
  return new SnippetString(`${importPath}`);
}
