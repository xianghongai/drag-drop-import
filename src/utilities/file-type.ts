import { FileType } from '../model';
import { getFileExt } from './file-extension';

/**
 * Get Import type.
 * @param {string} filePath File path.
 * @returns Import type
 */
export function getFileType(filePath: string): FileType | null {
  switch (getFileExt(filePath)) {
    case '.js': return 'script';
    case '.jsx': return 'script';
    case '.ts': return 'script';
    case '.tsx': return 'script';
    case '.css': return 'stylesheet';
    case '.scss': return 'stylesheet';
    case '.less': return 'stylesheet';
    case '.vue': return 'vue';
    case '.md': return 'markdown';
    case '.html': return 'html';
    default: return 'image';
  }
}
