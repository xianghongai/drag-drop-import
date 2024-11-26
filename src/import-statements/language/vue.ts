import * as changeCase from 'change-case';
import { EOL } from 'os';
import { SnippetString } from 'vscode';
import { DragDropParams, ImportStyle } from '../../model';
import { importStyle } from '../../providers';
import { getFileDir, getFileName, getFileType, getPath } from '../../utilities';
import { getScriptImportStyleConfiguration } from '../../utilities/workspace-configuration';

/**
 * Returns the Import statement string
 * @param params.dragFilePath Dragged file path
 * @param params.dropFilePath Dropped file path
 * @returns Import statement string
 */
export function vueImportStatement({ dragFilePath, dropFilePath }: DragDropParams): SnippetString {
  const importPath = getPath({ dragFilePath, dropFilePath });
  const dragFileType = getFileType(dragFilePath);

  // 1. Import stylesheet
  if (dragFileType === 'stylesheet') {
    return new SnippetString(`import '${importPath}';${EOL}$0`);
  }

  let fileName = getFileName(dragFilePath);

  if (fileName === 'index') {
    fileName = getFileDir(dragFilePath);
  }

  // 2. Import image or vue file as a component
  if (dragFileType === 'image' || dragFileType === 'vue') {
    return new SnippetString(`import \${1:${changeCase.pascalCase(fileName)}} from '${importPath}';${EOL}$0`);
  }

  // 3. Import JavaScript file
  const configValue = getScriptImportStyleConfiguration();
  const value = importStyle.javascript.find((config: ImportStyle) => config.description === configValue)?.value ?? 1;

  switch (value) {
    case 0:
      return new SnippetString(`import \${1:${changeCase.camelCase(fileName)}} from '${importPath}';${EOL}$0`);
    case 1:
      return new SnippetString(`import { $1 } from '${importPath}';${EOL}$0`);
    case 2:
      return new SnippetString(`import { $1 as $2 } from '${importPath}';${EOL}$0`);
    case 3:
      return new SnippetString(`import * as \${1:${changeCase.camelCase(fileName)}} from '${importPath}';${EOL}$0`);
    case 4:
      return new SnippetString(`import '${importPath}';${EOL}$0`);
    default:
      return new SnippetString(`import \${1:${changeCase.camelCase(fileName)}} from '${importPath}';${EOL}$0`);
  }
}
