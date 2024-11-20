import * as changeCase from 'change-case';
import { EOL } from 'os';
import { SnippetString } from 'vscode';
import { DragDropParams } from '../../model';
import { getFileDir, getFileName, getPath } from '../../utilities';

/**
 * Returns the Import statement string
 * @param params.dragFilePath Dragged file path
 * @param params.dropFilePath Dropped file path
 * @returns Import statement string
 */
export function htmlScriptImportStatement({ dragFilePath, dropFilePath }: DragDropParams): SnippetString {
  const importPath = getPath({ dragFilePath, dropFilePath });
  return new SnippetString(`<script type=\"\${1:text/javascript}\" src=\"${importPath}\"></script>${EOL}$0`);
}

/**
 * Returns the Import statement string
 * @param params.dragFilePath Dragged file path
 * @param params.dropFilePath Dropped file path
 * @returns Import statement string
 */
export function htmlImageImportStatement({ dragFilePath, dropFilePath }: DragDropParams): SnippetString {
  const importPath = getPath({ dragFilePath, dropFilePath });
  let fileName = getFileName(dragFilePath);

  if (fileName === 'index') {
    fileName = getFileDir(dragFilePath);
  }

  return new SnippetString(`<img src=\"${importPath}\" alt=\"\${1:${changeCase.capitalCase(fileName)}}\">${EOL}$0`);
}

/**
 * Returns the Import statement string
 * @param params.dragFilePath Dragged file path
 * @param params.dropFilePath Dropped file path
 * @returns Import statement string
 */
export function htmlStylesheetImportStatement({ dragFilePath, dropFilePath }: DragDropParams): SnippetString {
  const importPath = getPath({ dragFilePath, dropFilePath });
  return new SnippetString(`<link href=\"${importPath}\" rel=\"stylesheet\">${EOL}$0`);
}
