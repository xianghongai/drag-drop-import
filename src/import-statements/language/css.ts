import { EOL } from 'os';
import { SnippetString, workspace } from 'vscode';
import { DragDropParams, ImportStyle } from '../../model';
import { importStyle } from '../../providers';
import { getPath } from '../../utilities';

/**
 * Returns the Import statement string
 * @param params.dragFilePath Dragged file path
 * @param params.dropFilePath Dropped file path
 * @returns Import statement string
 */
export function cssImportStatement({ dragFilePath, dropFilePath }: DragDropParams): SnippetString {
  const importPath = getPath({ dragFilePath, dropFilePath });

  let configValue = workspace.getConfiguration('dragDropImport.importStatements.styleSheet').get('cssImportStyle');
  configValue = importStyle.css.find((config: ImportStyle) => config.description === configValue)?.value ?? 1;

  switch (configValue as number) {
    case 0:
      return new SnippetString(`@import '${importPath}';${EOL}$0`);
    case 1:
      return new SnippetString(`@import url('${importPath}');${EOL}$0`);
    default:
      return new SnippetString(`@import '${importPath}';${EOL}$0`);
  }
}

/**
 * Returns the Import statement string
 * @param params.dragFilePath Dragged file path
 * @param params.dropFilePath Dropped file path
 * @returns Import statement string
 */
export function cssImageImportStatement({ dragFilePath, dropFilePath }: DragDropParams): SnippetString {
  const importPath = getPath({ dragFilePath, dropFilePath });
  return new SnippetString(`url('${importPath}')`);
}
