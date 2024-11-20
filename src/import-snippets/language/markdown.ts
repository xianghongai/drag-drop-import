import { SnippetString } from 'vscode';
import { markdown } from '../../import-statements';
import { DragDropParams } from '../../model';
import { getFileType } from '../../utilities';

/**
 * Returns the import statement
 * @param params.dragFilePath Dragged file path
 * @param params.dropFilePath Dropped file path
 * @returns Import statement string
 */
export function snippet({ dragFilePath, dropFilePath }: DragDropParams): SnippetString {
  switch (getFileType(dragFilePath)) {
    case 'image':
      return markdown.markdownImageImportStatement({ dragFilePath, dropFilePath });
    default:
      return markdown.markdownImportStatement({ dragFilePath, dropFilePath });
  }
}
