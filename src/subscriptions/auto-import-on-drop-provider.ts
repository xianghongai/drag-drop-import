import {
  CancellationToken,
  DataTransfer,
  DocumentDropEdit,
  DocumentDropEditProvider,
  Position,
  TextDocument,
} from 'vscode';
import { unknown } from '../import-snippets';
import { NotifyType } from '../model';
import {
  cssExtensionLanguageSupported,
  cssSupported,
  htmlSupported,
  markdownSupported,
  vueModule,
  vueSupported,
} from '../providers';
import { getFileExt, importStatementSnippet, notify } from '../utilities';

/**
 * Drag and drop handler
 */
export class AutoImportOnDropProvider implements DocumentDropEditProvider {
  async provideDocumentDropEdits(
    _document: TextDocument,
    position: Position,
    dataTransfer: DataTransfer,
    token: CancellationToken
  ): Promise<DocumentDropEdit> {

    // Get the active text editor file path and dragged file path from tree view
    const dataTransferItem = dataTransfer.get('text/plain');
    const dropFilePath = _document.uri.fsPath;
    const dragFilePath = dataTransferItem?.value;

    // Prevents same file drag and drop
    if (dragFilePath.toLowerCase() === dropFilePath.toLowerCase()) {
      return notify(NotifyType.SameFilePath);
    }

    // Prevents unsupported drag and drop
    if (
      // Checks unsupported drag and drop files
      (!vueSupported.includes(getFileExt(dragFilePath)) && vueModule.includes(getFileExt(dropFilePath)))
      // Checks unsupported CSS drag import file extensions
      || (!cssSupported.includes(getFileExt(dragFilePath)) && getFileExt(dropFilePath) === '.css')
      // Checks unsupported SCSS/Less drag import file extensions
      || (!cssExtensionLanguageSupported.includes(getFileExt(dragFilePath)) && (getFileExt(dropFilePath) === '.scss' || getFileExt(dropFilePath) === '.less'))
      // Checks unsupported Markdown drag import file extensions
      || (!markdownSupported.includes(getFileExt(dragFilePath)) && getFileExt(dropFilePath) === '.md')
      // Checks unsupported HTML drag import file extensions
      || (!htmlSupported.includes(getFileExt(dragFilePath)) && getFileExt(dropFilePath) === '.html')
    ) {
      notify(NotifyType.NotSupported);
      return { insertText: unknown.snippet({dragFilePath, dropFilePath}) };
    }

    const snippet = importStatementSnippet(dragFilePath, dropFilePath);

    if (snippet.value === '\n') {
      notify(NotifyType.NotSupported);
      return { insertText: unknown.snippet({dragFilePath, dropFilePath}) };
    }

    return { insertText: snippet };
  }
}
