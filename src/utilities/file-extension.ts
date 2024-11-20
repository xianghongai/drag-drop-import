import * as path from 'path';
import { FileExtension } from '../model';

/**
 * Get file extension from path/relative paths.
 * @param {string} filePath Calculated relative path from dragged file and text editor.
 * @returns FileExtension: Supported file extensions
 */
export function getFileExt(filePath: string): FileExtension {
  return path.parse(filePath).ext as FileExtension;
}

/**
 * Remove relative path's file extension.
 * @param {string} relativePath The relative path to remove the file extension from.
 * @returns The relative path without the file extension.
 */
export function removeFileExt(relativePath: string): string {
  const ext = getFileExt(relativePath);
  return relativePath.slice(0, -ext.length);
}
