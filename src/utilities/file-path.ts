import path from 'path';
import { DragDropParams } from '../model';
import { removeFileExt } from './file-extension';
import { getFileType } from './file-type';
import {
  getPathMappingsConfiguration, getPathStyleConfiguration, getSameDirKeepRelativeConfiguration,
} from './workspace-configuration';

/**
 * Get file name from path/relative paths.
 * @param filePath File path.
 * @returns File name
 */
export function getFileName(filePath: string): string {
  return path.parse(filePath).name;
}

/**
 * Get file directory from path/relative paths.
 * @param filePath File path.
 * @returns File directory
 */
export function getFileDir(filePath: string): string {
  return path.parse(filePath).dir.split(path.sep).pop() || '';
}

/**
 * Calculates file path between from and to.
 * @param basePath The base path to calculate from.
 * @param targetPath Path to calculate relative path to.
 * @returns The relative file path of dragged and active text editor.
 */
function relative(basePath: string, targetPath: string): string {
  return path.relative(path.dirname(basePath), targetPath);
}

/**
 * Convert linux/unix path to windows path.
 * @param relativePath The relative path to convert to Windows format.
 * @returns The Windows relative path.
 */
function toWindowsPath(relativePath: string): string {
  return relativePath.replace(/\\/gi, '/');
}

/**
 * Validate Dragged file path and active text editor file path if in the same directory.
 * @param basePath The base path to check if the target path is in the same directory.
 * @param targetPath The path to check if it is in the same directory as the base path.
 * @returns Boolean
 */
function isSameDir(basePath: string, targetPath: string): boolean {
  const baseDir = path.parse(basePath).dir.toLowerCase().trim();
  const targetDir = path.parse(targetPath).dir.toLowerCase().trim();
  return baseDir === targetDir || baseDir.includes(targetDir);
}

/**
 * Get calculated import style to append in editor.
 * @param basePath The base path to calculate from.
 * @param targetPath The path to calculate the relative path to.
 * @param preserveFileExtension Whether to preserve the file extension
 * @returns The calculated relative path.
 */
export function getRelativePath(basePath: string, targetPath: string, preserveFileExtension = true): string {
  const startChars = isSameDir(basePath, targetPath) ? './' : '';
  const relativePath = toWindowsPath(relative(basePath, targetPath));
  const finalPath = preserveFileExtension ? relativePath : removeFileExt(relativePath);
  return startChars + finalPath;
}

/**
 * Get alias path based on VS Code path mappings configuration
 * @param filePath Original file path
 * @param preserveFileExtension Whether to preserve the file extension
 * @returns Converted alias path
 */
export function getAliasPath(filePath: string, preserveFileExtension = true): string {
  const pathMappings = getPathMappingsConfiguration();

  if (!pathMappings || Object.keys(pathMappings).length === 0) {
    return preserveFileExtension ? filePath : removeFileExt(filePath);
  }

  // Sort the mapping rules by the length of the real path in descending order
  const sortedMappings = Object.entries(pathMappings)
    .map(([alias, realPath]) => ({
      alias,
      realPath: realPath.endsWith('/') ? realPath : `${realPath}/`,
      addSlash: alias !== '~' // special handling for ~ alias, do not add slash
    }))
    .sort((a, b) => b.realPath.length - a.realPath.length);

  const normalizedPath = filePath.replace(/\\/g, '/');

  for (const { alias, realPath, addSlash } of sortedMappings) {
    const searchPath = `/${realPath}`;
    const matchIndex = normalizedPath.indexOf(searchPath);

    if (matchIndex !== -1) {
      const remainingPath = normalizedPath.slice(matchIndex + searchPath.length);
      const cleanPath = remainingPath.replace(/^\//, '');
      const aliasPrefix = addSlash ? `${alias}/` : alias;
      const result = `${aliasPrefix}${cleanPath}`;

      return preserveFileExtension ? result : removeFileExt(result);
    }
  }

  return preserveFileExtension ? filePath : removeFileExt(filePath);
}

/**
 * Get the calculated path based on the path style configuration
 * @param params.dragFilePath Dragged file path
 * @param params.dropFilePath Dropped file path
 * @returns The calculated path
 */
export function getPath({ dragFilePath, dropFilePath }: DragDropParams): string {
  if (dragFilePath.includes('node_modules')) {
    return getAliasPath(dragFilePath);
  }

  const pathStyle = getPathStyleConfiguration();
  const isStyleSheetToStyleSheet =
    getFileType(dragFilePath) === 'stylesheet' &&
    getFileType(dropFilePath) === 'stylesheet';

  const shouldUseRelativePath = isStyleSheetToStyleSheet
    ? pathStyle.styleSheet2styleSheet === 'relative'
    : pathStyle.general === 'relative';

  return shouldUseRelativePath
    ? getRelativePath(dropFilePath, dragFilePath)
    : getAliasPath(dragFilePath);
}
