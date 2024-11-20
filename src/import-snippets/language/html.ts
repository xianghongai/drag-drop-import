import { SnippetString } from 'vscode';
import { html, unknown } from '../../import-statements';
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
    case 'script':
      return html.htmlScriptImportStatement({ dragFilePath, dropFilePath });
    case 'stylesheet':
      return html.htmlStylesheetImportStatement({ dragFilePath, dropFilePath });
    case 'image':
      return html.htmlImageImportStatement({ dragFilePath, dropFilePath });
    default:
      return unknown.unknownImportStatement({ dragFilePath, dropFilePath });
  }
}
