import * as changeCase from 'change-case';
import { SnippetString } from 'vscode';
import { DragDropParams } from '../../model';
import { getFileDir, getFileName, getRelativePath } from '../../utilities';

/**
 * Returns the Import statement string
 * @param params.dragFilePath Dragged file path
 * @param params.dropFilePath Dropped file path
 * @returns Import statement string
 */
export function markdownImportStatement({ dragFilePath, dropFilePath }: DragDropParams): SnippetString {
  const importPath = getRelativePath(dropFilePath, dragFilePath);
  let fileName = getFileName(dragFilePath);

  if (fileName === 'index') {
    fileName = getFileDir(dragFilePath);
  }

  return new SnippetString(`[\${1:${changeCase.capitalCase(fileName)}}](${importPath})`);
}

/**
 * Returns the Import statement string
 * @param params.dragFilePath Dragged file path
 * @param params.dropFilePath Dropped file path
 * @returns Import statement string
 */
export function markdownImageImportStatement({ dragFilePath, dropFilePath }: DragDropParams): SnippetString {
  const importPath = getRelativePath(dropFilePath, dragFilePath);
  let fileName = getFileName(dragFilePath);

  if (fileName === 'index') {
    fileName = getFileDir(dragFilePath);
  }

  return new SnippetString(`![\${1:${changeCase.capitalCase(fileName)}}](${importPath})`);
}
