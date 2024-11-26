import { EOL } from 'os';
import { SnippetString } from 'vscode';
import { DragDropParams, ImportStyle } from '../../model';
import { importStyle } from '../../providers';
import { getPath } from '../../utilities';
import { getCssImportStyleConfiguration } from '../../utilities/workspace-configuration';

/**
 * Returns the Import statement string
 * @param params.dragFilePath Dragged file path
 * @param params.dropFilePath Dropped file path
 * @returns Import statement string
 */
export function cssImportStatement({ dragFilePath, dropFilePath }: DragDropParams): SnippetString {
  const importPath = getPath({ dragFilePath, dropFilePath });

  const configValue = getCssImportStyleConfiguration();
  const value = importStyle.css.find((config: ImportStyle) => config.description === configValue)?.value ?? 1;

  switch (value) {
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
