import { DocumentDropEdit, SnippetString, window } from 'vscode';
import { NotifyType } from '../model';

/**
 * Notification actions
 * @param {NotifyType} type Indicated notification type
 * @returns {DocumentDropEdit} undefined text in active text editor.
 */
export function notify(type: NotifyType): DocumentDropEdit {

  switch (type) {
    case NotifyType.SameFilePath: {
      /*
        Emit same file path, window notification (warning)
      */
      window.showWarningMessage(`Same file path.`);
  		return { insertText: new SnippetString('') };
    }
    case NotifyType.NotSupported: {
      /*
        Emit not supported, window notification (warning)
      */
      window.showWarningMessage(`Not supported.`);
  		return { insertText: new SnippetString('') };
    }
  }
}
