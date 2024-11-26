import { workspace } from 'vscode';

let configuration = workspace.getConfiguration('dragDropImport');

/**
 * Update the configuration when the configuration changes
 */
workspace.onDidChangeConfiguration((event) => {
  if (event.affectsConfiguration('dragDropImport')) {
    configuration = workspace.getConfiguration('dragDropImport');
  }
});

/**
 * Get the configuration
 * @returns The configuration
 */
export function getConfiguration() {
  return configuration;
}

/**
 * The path style type
 */
type PathStyleType = 'relative' | 'alias';

/**
 * The path style configuration type
 */
interface PathStyleConfiguration {
  general: PathStyleType;
  styleSheet2styleSheet: PathStyleType;
}


/**
 * Get the path style configuration
 * @returns The path style configuration
 */
export function getPathStyleConfiguration() {
  return configuration.get<PathStyleConfiguration>('importStatements.pathStyle', {
    general: 'alias',
    styleSheet2styleSheet: 'relative'
  });
}

/**
 * Get the same directory keep relative configuration
 * @returns The same directory keep relative configuration
 */
export function getSameDirKeepRelativeConfiguration(): boolean {
  return configuration.get<boolean>('importStatements.sameDirKeepRelative', true);
}

interface PathMappings {
  [alias: string]: string;
}

/**
 * Get the path mappings configuration
 * @returns The path mappings configuration
 */
export function getPathMappingsConfiguration(): PathMappings {
  return configuration.get<PathMappings>('importStatements.pathMappings', {
    '@': 'src',
    '~': 'node_modules/'
  });
}

/**
 * The script import style type
 */
type ScriptImportStyle =
  | `import name from '_path_';`
  | `import { name } from '_path_';`
  | `import { default as name } from '_path_';`
  | `import * as name from '_path_';`
  | `import '_path_';`;

/**
 * Get the script import style configuration
 * @returns The script import style configuration
 */
export function getScriptImportStyleConfiguration(): ScriptImportStyle {
  return configuration.get<ScriptImportStyle>('importStatements.script.javascriptImportStyle', `import { name } from '_path_';`);
}

/**
 * The typescript import style type
 */
type TypescriptImportStyle =
  | `import name from '_path_';`
  | `import { name } from '_path_';`
  | `import { default as name } from '_path_';`
  | `import * as name from '_path_';`
  | `import '_path_';`;

/**
 * Get the typescript import style configuration
 * @returns The typescript import style configuration
 */
export function getTypescriptImportStyleConfiguration(): TypescriptImportStyle {
  return configuration.get<TypescriptImportStyle>('importStatements.script.typescriptImportStyle', `import { name } from '_path_';`);
}

/**
 * Get the preserve type script file extension configuration
 * @returns The preserve type script file extension configuration
 */
export function getPreserveTypeScriptFileExtensionConfiguration(): boolean {
  return configuration.get<boolean>('importStatements.script.preserveTypeScriptFileExtension', false);
}

/**
 * The css import style type
 */
type CssImportStyle =
  `@import '_path_';` |
  `@import url('_path_');`;

/**
 * Get the css import style configuration
 * @returns The css import style configuration
 */
export function getCssImportStyleConfiguration(): CssImportStyle {
  return configuration.get<CssImportStyle>('importStatements.styleSheet.cssImportStyle', `@import '_path_';`);
}
