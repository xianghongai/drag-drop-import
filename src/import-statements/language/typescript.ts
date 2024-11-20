import * as changeCase from 'change-case';
import { EOL } from 'os';
import { SnippetString, workspace } from 'vscode';
import { DragDropParams, ImportStyle } from '../../model';
import { importStyle } from '../../providers';
import { getFileDir, getFileName, getFileType, getPath, removeFileExt } from '../../utilities';

/**
 * Returns the Import statement string
 * @param params.dragFilePath Dragged file path
 * @param params.dropFilePath Dropped file path
 * @returns Import statement string
 */
export function typescriptImportStatement({ dragFilePath, dropFilePath }: DragDropParams): SnippetString {
  let importPath = getPath({ dragFilePath, dropFilePath });
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

  // 3. Import TypeScript file
  const preserve = workspace.getConfiguration('dragDropImport.importStatements.script').get('preserveTypeScriptFileExtension') as boolean;

  if (!preserve) {
    importPath = removeFileExt(importPath);
  }

  let configValue = workspace.getConfiguration('dragDropImport.importStatements.script').get('typescriptImportStyle');
  configValue = importStyle.typescript.find((config: ImportStyle) => config.description === configValue)?.value ?? 1;

  switch (configValue as number) {
    case 0:
      return new SnippetString(`import \${1:${changeCase.camelCase(fileName)}} from '${importPath}';${EOL}$0`);
    case 2:
      return new SnippetString(`import { $1 as $2 } from '${importPath}';${EOL}$0`);
    case 3:
      return new SnippetString(`import * as \${1:${changeCase.camelCase(fileName)}} from '${importPath}';${EOL}$0`);
    case 4:
      return new SnippetString(`import '${importPath}';${EOL}$0`);
    default:
      return new SnippetString(`import { $1 } from '${importPath}';${EOL}$0`);
  }
}
