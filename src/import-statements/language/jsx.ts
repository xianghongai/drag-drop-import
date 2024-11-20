import { SnippetString } from 'vscode';
import { DragDropParams, FileExtension } from '../../model';
import { getFileExt, getRelativePath } from '../../utilities';
import { unknownImportStatement } from './unknown';

export function jsxImportStatement({ dragFilePath, dropFilePath }: DragDropParams): SnippetString {
  const relativePath = getRelativePath(dropFilePath, dragFilePath);

  switch (getFileExt(dragFilePath) as FileExtension) {
    case '.gif': // Images
    case '.jpeg':
    case '.jpg':
    case '.png':
    case '.webp':
    case '.json': // Data
    case '.js': // Scripts
    case '.jsx': {
      return new SnippetString(`import name$1 from '${relativePath}';`);
    }
    case '.woff': // Fonts
    case '.woff2':
    case '.ttf':
    case '.eot':
    case '.css': // Stylesheets
    case '.scss':
    case '.less': {
      return new SnippetString(`import '${relativePath}';`);
    }
    default: {
      return unknownImportStatement({ dragFilePath, dropFilePath });
    }
  }
}
