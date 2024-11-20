import { SnippetString } from 'vscode';
import * as snippets from '../import-snippets';
import { getFileExt } from './';

/**
 * Get calculated import style to append in editor.
 * @param {string} dragFilePath Dragged file path.
 * @param {string} dropFilePath Dropped file path.
 * @returns Import statement string
 */
export function importStatementSnippet(dragFilePath: string, dropFilePath: string): SnippetString {
  switch (getFileExt(dropFilePath)) {
    case '.js': {
      return snippets.javascript.snippet({ dragFilePath, dropFilePath });
    }
    case '.jsx': {
      return snippets.jsx.snippet({ dragFilePath, dropFilePath });
    }
    case '.ts': {
      return snippets.typescript.snippet({ dragFilePath, dropFilePath });
    }
    case '.tsx': {
      return snippets.tsx.snippet({ dragFilePath, dropFilePath });
    }
    case '.css': {
      return snippets.css.snippet({ dragFilePath, dropFilePath });
    }
    case '.less': {
      return snippets.less.snippet({ dragFilePath, dropFilePath });
    }
    case '.scss': {
      return snippets.scss.snippet({ dragFilePath, dropFilePath });
    }
    case '.html': {
      return snippets.html.snippet({ dragFilePath, dropFilePath });
    }
    case '.md': {
      return snippets.markdown.snippet({ dragFilePath, dropFilePath });
    }
    case '.vue': {
      return snippets.vue.snippet({ dragFilePath, dropFilePath });
    }
    default: {
      return snippets.unknown.snippet({ dragFilePath, dropFilePath });
    }
  }
}
